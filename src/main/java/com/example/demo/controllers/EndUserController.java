package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import com.example.demo.service.DeliveryService;
import com.example.demo.service.PackageService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;
//import com.example.demo.model.Bus;
import com.example.demo.model.Delivery;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import com.example.demo.model.Package;

@Controller
@CrossOrigin

public class EndUserController {
	
	@Autowired
	private PackageService packageService;
	@Autowired
	private DeliveryService deliveryService;
	private String labelPAcket = "";
     
	@GetMapping("/userWelcomePage")
	public ModelAndView showWelcomePageUser()
	{
		
		ModelAndView  modelView = new ModelAndView("/userWelcomePage");
		return modelView;
		
	}	
	
	@GetMapping("/map")
	public ModelAndView mapUser()
	{
		
		ModelAndView  modelView = new ModelAndView("/map");
		return modelView;
		
	}
	
	@GetMapping("/userTrackingPage")
	public String showTrackingPage(Model model)
	{
		String label = "";
		model.addAttribute("label", label);
		return "userTrackingPage";
		
	}
	
	@PostMapping("/recepteur")
	public RedirectView track(@ModelAttribute (value = "label") String label,HttpSession session, RedirectAttributes attributes)
	{
		//ModelAndView  modelViewTracking = new ModelAndView("/tracking_user");
        attributes.addAttribute("label", label);
        return new RedirectView("http://localhost:8080/Hay");
		
	}
	
    @GetMapping("/Hay")
    public ModelAndView ShowCityMap() {
		ModelAndView  modelViewTracking = new ModelAndView("/tracking_user");
		return modelViewTracking;
        } 
	
	@GetMapping("/trackingUser/{label}")
	public ResponseEntity<String> meth2(@PathVariable(value = "label") String label)
	{
    	Package packet = packageService.findByNumSerie(label);
    	Delivery livraison = packet.getLabel_livrasion();
    	//Bus bus = livraison.getBus();
        //System.out.println("Ville : "+bus.getCity());
		//return new ResponseEntity<String>(bus.getCity(), HttpStatus.OK);
		return null;
	}
	
	@GetMapping("/userTrackingHistory")
	public ModelAndView showTrackingHistory()
	{
		
		ModelAndView  modelViewTrackingHistory = new ModelAndView("/history");
		return modelViewTrackingHistory;
		
	}
	
	@GetMapping("/userTrackingExpeditionColis")
	public ModelAndView showTrackingOnlineBooking()
	{
		
		ModelAndView  modelViewTrackingOnlineBooking = new ModelAndView("/online-booking");
		return modelViewTrackingOnlineBooking;
		
	}
	
	@GetMapping("/userTrackingSignUpPage")
	public ModelAndView showSignUpPage() {
		ModelAndView modelViewSignUpPage = new ModelAndView("/sign-UpEndUSer");
		return modelViewSignUpPage;
	}
	
	@GetMapping("/userTrackingLoginPage")
	public ModelAndView showLoginPage() {
		ModelAndView modelViewSignUpPage = new ModelAndView("/loginEndUser");
		return modelViewSignUpPage;
	}
}
