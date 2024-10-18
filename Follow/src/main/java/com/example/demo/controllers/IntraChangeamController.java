package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Print.PrintingDeliveries;
import com.example.demo.Print.PrintingService;
import com.example.demo.service.AgencyService;
import com.example.demo.service.BusService;
import com.example.demo.model.Delivery;
import com.example.demo.model.Package;
import com.example.demo.model.Agency;
import com.example.demo.service.DeliveryService;
import com.example.demo.service.DriverService;
import com.example.demo.service.JwtUserDetailsService;
import com.example.demo.service.NotificationService;
import com.example.demo.service.PackageService;
import com.example.demo.service.ReceptionService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow your React app's origin
public class IntraChangeamController {

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
	@Autowired
	NotificationService notificationService;
	
    @PostMapping("/changePacket/{packetId}/{deliveryId}")
    public ResponseEntity<String> movePacket(@PathVariable(value = "packetId") String idPacket, @PathVariable(value = "deliveryId") String idDelivery, HttpSession session) {
    	try{
    		Package P = packageService.findByNumSerie(idPacket);
    	Delivery d = deliveryService.findByLabel_livraison(idDelivery);
    	Delivery D = P.getLabel_livrasion();
    	P.setLabel_livrasion(d);
        List<Delivery> deliveriesPassedBy = P.getDeliveriesPassedBy();
        deliveriesPassedBy.add(D);
        deliveriesPassedBy.add(d);
    	P.setDeliveriesPassedBy(deliveriesPassedBy);  
    	String city = P.getDestination();
    	Agency agency = agencyService.findByVille(city);
    	String msg = "Paquet en provenance de l'agence : "+(String)session.getAttribute("agency_num")+" de la ville de : "+(String)session.getAttribute("Agence");
    	packageService.savePackage(P); 
    	notificationService.sendNotification(session, msg, Integer.toString(agency.getId()));
        // Return a 200 OK response
        return ResponseEntity.ok("Package moved successfully");
        
    } catch (Exception e) {
        // Return a 500 Internal Server Error and send back the error message
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
    	}
    }
    
    @PostMapping("/changeDeliv/{oldDeliv}/{deliveryId}")
    public ResponseEntity<String> moveDeliveries(@PathVariable(value = "oldDeliv") String oldDeliv, @PathVariable(value = "deliveryId") String idDelivery, HttpSession session) {
    	try{
    	Delivery d = deliveryService.findByLabel_livraison(oldDeliv);
    	Delivery D = deliveryService.findByLabel_livraison(idDelivery);
    	List<String> destinations = new ArrayList<>();
    	//all the packages inside the new delivery
    	for(Package P : d.getPackages()) {
    		P.setLabel_livrasion(D);
    	    List<Delivery> deliveriesPassedBy = P.getDeliveriesPassedBy();
    	    deliveriesPassedBy.add(D);
    	    deliveriesPassedBy.add(d);
    		P.setDeliveriesPassedBy(deliveriesPassedBy);    
    		if(!destinations.contains(P.getDestination())) {
    			destinations.add(P.getDestination());
    		}
    		packageService.savePackage(P); 
    	}
    	d.setStatus("Déplacée vers la livraison : "+D.getLabelLivraison());
    	deliveryService.saveDelivery(d);
    	for(String destination : destinations) {
        	String msg = "Paquets en provenance de l'agence : "+(String)session.getAttribute("agency_num")+" de la ville de : "+(String)session.getAttribute("Agence");
        	notificationService.sendNotification(session, msg, Integer.toString(agencyService.findByVille(destination).getId()));
    	}
        // Return a 200 OK response
        return ResponseEntity.ok("Packages moved successfully");
        
    } catch (Exception e) {
        // Return a 500 Internal Server Error and send back the error message
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
    	}
    }
}
