package com.example.demo.controllers;
/*
import java.awt.image.BufferedImage;
import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import com.example.demo.Print.PrintingDeliveries;
import com.example.demo.Print.PrintingService;
import com.example.demo.model.BeanForTransit;
import com.example.demo.model.Bus;
import com.example.demo.model.Delivery;
import com.example.demo.model.Enterprise;
import com.example.demo.model.Package;
import com.example.demo.model.StaffUserDetails;
import com.example.demo.service.AgencyService;
import com.example.demo.service.BeanForTransitService;
import com.example.demo.service.BusService;
import com.example.demo.service.DeliveryService;
import com.example.demo.service.EnterpriseService;
import com.example.demo.service.JwtUserDetailsService;
import com.example.demo.service.PackageService;
import com.example.demo.service.ReceptionService;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@CrossOrigin
public class Center {

	@Autowired
	private PackageService packageService;
	@Autowired
	private DeliveryService deliveryService;
	@Autowired
	private EnterpriseService enterpriseService;
	@Autowired
	private BusService busService;
	@Autowired
	private AgencyService agencyService;
	@Autowired
	private BeanForTransitService BFTS;
	@Autowired
	private JwtUserDetailsService emplService;
	@Autowired
	PrintingService printer;
	@Autowired
	PrintingDeliveries printerDeliv;
	@Autowired
	ReceptionService receptionService;

    @GetMapping("/deliveries")
    public Iterable<Delivery> getPackage(HttpSession session) {
        return deliveryService.findByVilleDepart((String) session.getAttribute("ville"));
    }
    
    @GetMapping("/tracking")
    public ModelAndView getTransitPackages(HttpSession session) throws NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        ModelAndView modelAndView = new ModelAndView();
        int agency_num = (int) session.getAttribute("agency_num");
        System.out.println("agency_num"+agency_num);
        modelAndView.addObject("transactions", BFTS.findByAgency(agency_num));
        modelAndView.setViewName("Suivi-des-colis");
    	/*int number = session.getAttribute("agency_num")!=null?(int) session.getAttribute("agency_num"):0;
       System.out.println("number agency : "+number);
    	return new ResponseEntity<Iterable<BeanForTransit>>(BFTS.findByAgency(number), HttpStatus.OK);
*/
		/*return modelAndView;
    }    
    
    @GetMapping("/test")
    public  ModelAndView test() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("Suivi-des-colis");
        return modelAndView;    
        } 
    
    @PostMapping("/change/{label}")
    public RedirectView ChangeStatus(@PathVariable(value = "label") String label, HttpSession session, RedirectAttributes attributes) {
        System.out.println("Label : "+label);
        Bus bus = deliveryService.findByLabel_livraison(label).getBus();
        System.out.println("bus : "+bus.getMatricule());
        System.out.println("Ville : "+(String) session.getAttribute("ville"));
        bus.setCity((String) session.getAttribute("ville"));  
        busService.saveBus(bus);
        attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        return new RedirectView("http://localhost:8080/track");       
        } 
    
    @GetMapping("/")
    public ModelAndView getIndex() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    }
    
    @GetMapping("/track")
    public ModelAndView getSuivi(HttpSession session) {
        ModelAndView modelAndView = new ModelAndView();
        int agency_num = (int) session.getAttribute("agency_num");
        System.out.println("agency_num"+agency_num);
        modelAndView.addObject("transactions", BFTS.findByAgency(agency_num));
        modelAndView.setViewName("Suivi-des-colis");
        return modelAndView;
    }
    
    @GetMapping("/reception")
    public ModelAndView Reception(HttpSession session) {
        ModelAndView modelAndView = new ModelAndView();
        int agency_num = (int) session.getAttribute("agency_num");
        System.out.println("agency_num"+agency_num);
        modelAndView.addObject("packages", deliveryService.findByVilleArrivee((String) session.getAttribute("ville")));
        modelAndView.setViewName("reception");
        return modelAndView;
    }
    /*
    @GetMapping("/reception")
    public ModelAndView getReception(HttpSession session) {
        ModelAndView modelAndView = new ModelAndView();
        int agency_num = (int) session.getAttribute("agency_num");
        System.out.println("agency_num"+agency_num);
        modelAndView.addObject("Receptions", receptionService.findByAgency(agency_num));
        modelAndView.setViewName("Reception");
        return modelAndView;
    }*/
    /*
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
    
    @PostMapping("/delivery")
    public RedirectView createNewDelivery(@ModelAttribute("livraison") Delivery delivery,@ModelAttribute("packet") Package packet,@ModelAttribute("bus") Bus bus, HttpSession session, BindingResult bindingResult, RedirectAttributes attributes) {
    	ModelAndView modelAndView = new ModelAndView();
        String generatedString = randomAlphanumericString(10);
        while(deliveryService.try_delivery_id(generatedString)) {
            generatedString =randomAlphanumericString(10);
        }
        System.out.println("label "+ generatedString);
        Bus bus2 = busService.loadBusById(bus.getMatricule());
        System.out.println("matricule "+(bus.getMatricule()));
        delivery.setVilleDepart((String) session.getAttribute("ville"));
        delivery.setLabelLivraison(generatedString);
        String number = (String)session.getAttribute("ville");
        bus2.setCity(number);
        busService.saveBus(bus2);
        delivery.setBus(bus2);
        deliveryService.saveDelivery(delivery);
        packet.setLabel_livrasion(delivery);
        packet.setStatus("onsite");
        packageService.savePackage(packet);

        //modelAndView.addObject("successMessage", "User has been registered successfully");
        //modelAndView.addObject("user", new User());
        attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        return new RedirectView("http://localhost:8080/delivery");
}
    
    @PostMapping("/delivery/{delivery_id}") //packet plutot
    public RedirectView add_package(@PathVariable(value = "delivery_id") String id, @ModelAttribute("packet") Package packet, HttpSession session, RedirectAttributes attributes){
    	
        System.out.println("Label livraison "+id);
        System.out.println("Label livraison "+id);
        System.out.println("Label livraison "+id);
        System.out.println("Label livraison "+id);

    	Delivery livraison = deliveryService.findByLabel_livraison(id);
        packet.setLabel_livrasion(livraison);
        String number = (String)session.getAttribute("ville");
    	livraison.getBus().setCity(number);
        deliveryService.saveDelivery(livraison);
        packet.setNumSerie(randomAlphanumericString(6));
        packet.setStatus("onsite");
        packageService.savePackage(packet);
        attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        return new RedirectView("http://localhost:8080/delivery");
        //qr generation
        /*
        try {
    		BufferedImage bufferedImage = generateQRCodeImage(packet);
    		File outputfile = new File("Saved Pictures"+packet.getNumSerie()+".jpg");
    		ImageIO.write(bufferedImage, "jpg", outputfile);
    		String txt = "hey hey";
    		//BufferedImage f = printer.addTextToImage(bufferedImage, txt, "reçu"+packet.getNumSerie()+".jpg");
    		//File outputfile2 = new File("recu"+packet.getNumSerie()+".jpg");
    		//ImageIO.write(f, "jpg", outputfile2);
    		//printer.print(outputfile);
    		printer.launch(outputfile);
    		System.out.println("printed successfully");

    		}catch (Exception e) {
    			e.getMessage();
    		}
        attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        return new RedirectView("http://localhost:8080/delivery");*/
    	/*
    }
    
    @GetMapping("/QR/{packet_id}")
    public RedirectView printQR(@PathVariable(value = "packet_id") String id, HttpSession session, RedirectAttributes attributes) {
    	
        try {
        	Package packet = packageService.findByNumSerie(id);
    		BufferedImage bufferedImage = generateQRCodeImage(packet);
    		File outputfile = new File("Saved Pictures"+packet.getNumSerie()+".jpg");
    		ImageIO.write(bufferedImage, "jpg", outputfile);
    		String txt = "hey hey";
    		//BufferedImage f = printer.addTextToImage(bufferedImage, txt, "reçu"+packet.getNumSerie()+".jpg");
    		//File outputfile2 = new File("recu"+packet.getNumSerie()+".jpg");
    		//ImageIO.write(f, "jpg", outputfile2);
    		//printer.print(outputfile);
    		printer.launch(outputfile, packet);
    		System.out.println("printed successfully");

    		}catch (Exception e) {
    			e.getMessage();
    		}
        attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        return new RedirectView("http://localhost:8080/delivery");
    	
    }
    
    @GetMapping("/QRDeliv/{delivery_id}")
    public RedirectView printQRDeliv(@PathVariable(value = "delivery_id") String id, HttpSession session, RedirectAttributes attributes) {
    	
        try {
        	Delivery livraison = deliveryService.findByLabel_livraison(id);
    		BufferedImage bufferedImage = generateQRCodeImageDeliv(livraison);
    		File outputfile = new File("Saved Pictures"+livraison.getLabelLivraison()+".jpg");
    		ImageIO.write(bufferedImage, "jpg", outputfile);
    		String txt = "hey hey";
    		//BufferedImage f = printer.addTextToImage(bufferedImage, txt, "reçu"+packet.getNumSerie()+".jpg");
    		//File outputfile2 = new File("recu"+packet.getNumSerie()+".jpg");
    		//ImageIO.write(f, "jpg", outputfile2);
    		//printer.print(outputfile);
    		printerDeliv.launch(outputfile, livraison);
    		System.out.println("printed successfully");

    		}catch (Exception e) {
    			e.getMessage();
    		}
        attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        return new RedirectView("http://localhost:8080/delivery");
    	
    }
    
    @GetMapping("/demarrage/{delivery_id}")
    public RedirectView kickoff(@PathVariable(value = "delivery_id") String id, HttpSession session, RedirectAttributes attributes) {
    	
    	Delivery delivery = deliveryService.findByLabel_livraison(id);
    	delivery.setStatus("En route");
    	deliveryService.saveDelivery(delivery);
        attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
        return new RedirectView("http://localhost:8080/delivery");
    }
    //
    @PostMapping("/print/{delivery_id}")
    @ResponseBody
    public RedirectView display_print(@PathVariable(value = "delivery_id") String id, @ModelAttribute("packet") Package packet, HttpSession session, RedirectAttributes attributes){

    	 Delivery livraison = deliveryService.findByLabel_livraison(id);
         packet.setLabel_livrasion(livraison);
         packet.setNumSerie("PPTT000014");
         packageService.savePackage(packet);
         attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
    	
        attributes.addAttribute("packetNature", packet.getNature());
        attributes.addAttribute("packetExp", packet.getExp_number());
        attributes.addAttribute("packetDest", packet.getDest_number());
        attributes.addAttribute("packetId", packet.getNumSerie());
        System.out.println("iiiiiiiiidiiiiiii"+packet.getNumSerie());
        attributes.addAttribute("livraison", id);
        //
       
        return new RedirectView("http://localhost:8080/delivery");
    }
    
    //
    
    @GetMapping("/package/{package_id}")
    public RedirectView view_packages(@PathVariable(value = "package_id") String id, HttpSession session, RedirectAttributes attributes){

    	Package P = packageService.findByNumSerie(id);
    	P.setStatus("recupere");
    	packageService.savePackage(P);
        return new RedirectView("http://localhost:8080/reception");

    	}
    
    /*
    @RequestMapping(value="/delivery", method = RequestMethod.GET)
    public ModelAndView registration(){
        ModelAndView modelAndView = new ModelAndView();
        Package packet = new Package();
        Package printPacket = new Package();
        Delivery livraison = new Delivery();
        Bus bus = new Bus();
        String id_livraison_impr ="";
        modelAndView.addObject("bus", bus);
        modelAndView.addObject("id_livraison_impr", id_livraison_impr);
        modelAndView.addObject("livraison", livraison);
        modelAndView.addObject("packet", packet);
        modelAndView.addObject("packet", printPacket);
        modelAndView.addObject("deliveries", deliveryService.getDeliveries());
        modelAndView.addObject("packet", packet);
        modelAndView.setViewName("Envoi-de-colis");
        return modelAndView;
    }
   /* ----Only for when we want to print */
    /*
    @RequestMapping(value="/delivery", method = RequestMethod.GET)
    public ModelAndView registration(@Nullable @RequestParam String packetId, HttpSession session){
        ModelAndView modelAndView = new ModelAndView();
        Package packet = new Package();
        Package printPacket = new Package();
        Delivery livraison = new Delivery();
        Bus bus = new Bus();
        String id_livraison_impr ="";
        modelAndView.addObject("bus", bus);
        modelAndView.addObject("id_livraison_impr", id_livraison_impr);
        modelAndView.addObject("livraison", livraison);
        modelAndView.addObject("packet", packet);
        modelAndView.addObject("packetId", packetId);
        modelAndView.addObject("Buses", busService.getBuses());
        System.out.println("the bus are : "+busService.getBuses());
        modelAndView.addObject("deliveries", deliveryService.findByVilleDepart((String) session.getAttribute("ville")));
        modelAndView.addObject("packet", packet);
        modelAndView.setViewName("Envoi-de-colis");
        return modelAndView;
    }
    
/* ---------------------------*/
    /*
    @GetMapping("/employees")
    public ModelAndView getEmployees() {
    	ModelAndView mav = new ModelAndView("test-display");
    	mav.addObject("employees", emplService.geEmployees());
        return mav;
    }
    
    @GetMapping("/packages")
    public Iterable<Package> getPackages() {
        return packageService.gePackages();
    }
    /*
    @GetMapping("/bus")
    public Iterable<Bus> getBus() {
        return busService.getBus();
    }*/
    
    //qr method
/*
    public static BufferedImage generateQRCodeImage(Package barcodeText) throws Exception {
		StringBuilder str = new StringBuilder();
		str = str.append("Destination NUmber:").append(barcodeText.getDest_number()).append("| |").append("Expedition NUmber:").append(barcodeText.getExp_number()).append("| |").append("NoSerie:").append(barcodeText.getNumSerie()).append("| |").append("Ville destination:").append(barcodeText.getLabel_livrasion().getVilleArrivee());
	    QRCodeWriter barcodeWriter = new QRCodeWriter();
	    BitMatrix bitMatrix = 
	      barcodeWriter.encode(str.toString(), BarcodeFormat.QR_CODE, 200, 200);

	    return MatrixToImageWriter.toBufferedImage(bitMatrix);
	}
    
    public static BufferedImage generateQRCodeImageDeliv(Delivery barcodeText) throws Exception {
		StringBuilder str = new StringBuilder();
		str = str.append("labelLivraison : ").append(barcodeText.getLabelLivraison()).append("| |").append("Bus :").append(barcodeText.getBus().getMatricule()).append("| |").append("Ville depart : ").append(barcodeText.getVilleDepart()).append("| |").append("Ville destination:").append(barcodeText.getVilleArrivee());
	    QRCodeWriter barcodeWriter = new QRCodeWriter();
	    BitMatrix bitMatrix = 
	      barcodeWriter.encode(str.toString(), BarcodeFormat.QR_CODE, 200, 200);
	    return MatrixToImageWriter.toBufferedImage(bitMatrix);
	}

}*/
