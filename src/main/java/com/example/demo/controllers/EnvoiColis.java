package com.example.demo.controllers;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.Random;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.Print.PrintingDeliveries;
import com.example.demo.Print.PrintingService;
import com.example.demo.model.Agency;
//import com.example.demo.model.Bus;
import com.example.demo.model.Delivery;
import com.example.demo.model.Driver;
import com.example.demo.model.Package;
import com.example.demo.service.AgencyService;
import com.example.demo.service.BusService;
import com.example.demo.service.DeliveryService;
import com.example.demo.service.DriverService;
import com.example.demo.service.JwtUserDetailsService;
import com.example.demo.service.PackageService;
import com.example.demo.service.ReceptionService;
import com.example.demo.wrappers.DeliveryRequest;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import jakarta.servlet.http.HttpSession;

public class EnvoiColis {
	
	@Autowired
	private PackageService packageService;
	@Autowired
	private DriverService driverService;
	@Autowired
	private DeliveryService deliveryService;
	@Autowired
	private BusService busService;
	@Autowired
	private AgencyService agencyService;
	@Autowired
	private JwtUserDetailsService emplService;
	@Autowired
	PrintingService printer;
	@Autowired
	PrintingDeliveries printerDeliv;
	@Autowired
	ReceptionService receptionService;
	
    @PostMapping("/delivery")
    //Creation de livraison
    //Look for the DeliveryRequest in the wrapper package, it encapsulates bus, delivery and packet.
    //In React you'll have to send them as a request body like  body: JSON.stringify({ delivery, packet, bus, driver })
    //more details on chatGpt
    public ResponseEntity<Object> createNewDelivery(@RequestBody DeliveryRequest deliveryRequest, HttpSession session) {
        try {
            // Extract the objects from the deliveryRequest
            Delivery delivery = deliveryRequest.getDelivery();
            Package packet = deliveryRequest.getPacket();
            //Bus bus = deliveryRequest.getBus();
            Driver D = deliveryRequest.getDriver();
            List<Agency> intransit = deliveryRequest.getIntermediateStops();
            
            //Affect the actual bus to the driver
           // D.setActualBus(bus);
            driverService.addDriver(D);//To save what has been done on the driver
            //When the deliveries of that bus will be done or if the driver is not driving we'll set the actualBus field to null

            // Generate a random delivery label and ensure it's unique
            String generatedString = randomAlphanumericString(10);
            while (deliveryService.try_delivery_id(generatedString)) {
                generatedString = randomAlphanumericString(10);
            }

            // Load bus details
            //Bus bus2 = busService.loadBusById(bus.getMatricule());

            // Set details for the delivery
            delivery.setVilleDepart((String) session.getAttribute("ville"));
            delivery.setLabelLivraison(generatedString);
            //bus2.setCity((String) session.getAttribute("ville"));
            //delivery.setBus(bus2);
            delivery.setStatus("Chargement");
            delivery.setTransitAgencies(intransit);

            // Save bus, delivery, and package
            //busService.saveBus(bus2);
            deliveryService.saveDelivery(delivery);

            packet.setLabel_livrasion(delivery);
            packet.setStatus("Point de depart");
            packageService.savePackage(packet);

            // Return a successful response
            return ResponseEntity.ok("Delivery created successfully");
            
        } catch (Exception e) {
            // Return an error response with a 500 status code
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("An error occurred: " + e.getMessage());
        }
        //attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        //return new RedirectView("http://localhost:8080/delivery");
    }

    
    //To randomly generate the id of the delivery
    //must add a way to check if the id is unique
    //not yet done
    public String randomAlphanumericString(int length) {
        String alphanumericCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuv";
     
        StringBuffer randomString = new StringBuffer(length);
        Random random = new Random();
     
        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(alphanumericCharacters.length());
            char randomChar = alphanumericCharacters.charAt(randomIndex);
            randomString.append(randomChar);
        }
     
        return randomString.toString();
    }

    @PostMapping("/package/{delivery_id}")
    //To add a package to a delivery
    //The delivery id is a request parameter
    //The package itself is a request body
    //More details on chatGpt
    public ResponseEntity<Object> addPackage(
            @PathVariable(value = "delivery_id") String id, 
            @RequestBody Package packet, 
            HttpSession session, 
            RedirectAttributes attributes) {
        try {
            System.out.println("Label livraison " + id);

            // Find the delivery based on the label
            Delivery livraison = deliveryService.findByLabel_livraison(id);
            if (livraison == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Delivery not found");
            }

            // Set city and other parameters
            packet.setLabel_livrasion(livraison);
            String number = (String) session.getAttribute("ville");
            //livraison.getBus().setCity(number);
            
            // Save delivery and package
            deliveryService.saveDelivery(livraison);
            packet.setNumSerie(randomAlphanumericString(6));
            packet.setStatus("Point de depart");
            packageService.savePackage(packet);
                        
            // Return a 200 OK response
            return ResponseEntity.ok("Package added successfully");
            
        } catch (Exception e) {
            // Return a 500 Internal Server Error and send back the error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
        }
    }
    
    @PostMapping("/generateQR/{packet_id}")
    //To print the qr code for a packet
    //here is an implementation example on the client with React
    /*
     const fetchQRCode = async (packetId) => {
    try {
        const response = await fetch(`/generateQR/${packetId}`, {
            method: 'POST',
        });
        
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // Set the image src or create an <img> element to show the QR code
            const img = document.createElement('img');
            img.src = url;
            document.body.appendChild(img);

            // Trigger printing
            window.print();

        } else {
            console.error('Error generating QR code');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
     */
    public ResponseEntity<byte[]> generateQR(@PathVariable("packet_id") String id) {
        try {
            Package packet = packageService.findByNumSerie(id);
            BufferedImage qrImage = generateQRCodeImage(packet);
            
            // Convert BufferedImage to byte array
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(qrImage, "jpg", baos);
            byte[] imageBytes = baos.toByteArray();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(imageBytes.length);

            return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    //class notification, for an agency, with the info

    //Generate the qr for the package
    public static BufferedImage generateQRCodeImage(Package barcodeText) throws Exception {
		StringBuilder str = new StringBuilder();
		str = str.append("Destination NUmber:").append(barcodeText.getDest_number()).append("| |").append("Expedition NUmber:").append(barcodeText.getExp_number()).append("| |").append("NoSerie:").append(barcodeText.getNumSerie()).append("| |").append("Ville destination:").append(barcodeText.getLabel_livrasion().getVilleArrivee());
	    QRCodeWriter barcodeWriter = new QRCodeWriter();
	    BitMatrix bitMatrix = 
	      barcodeWriter.encode(str.toString(), BarcodeFormat.QR_CODE, 200, 200);
	    return MatrixToImageWriter.toBufferedImage(bitMatrix);
	}
    
    @PostMapping("/demarrage/{delivery_id}")
    //To say that the bus is going
    //Must notify all the agencies which has been selected as transit during the delivery creation
    //not yet done
    public ResponseEntity<String> kickoff(@PathVariable(value = "delivery_id") String id, HttpSession session) {
        try {
            // Find the delivery by its label
            Delivery delivery = deliveryService.findByLabel_livraison(id);
            
            // Update the delivery status
            delivery.setStatus("En route");
            deliveryService.saveDelivery(delivery);
            
            // You can return a success message or just an empty body
            return new ResponseEntity<>("Delivery status updated successfully", HttpStatus.OK);
            
        } catch (Exception e) {
            // Return the error message in case of failure
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}

//
