package com.example.demo.controllers;

import java.time.LocalDateTime;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.model.Delivery;
import com.example.demo.service.DeliveryService;
import com.example.demo.service.PackageService;
import com.example.demo.model.Package;
import jakarta.servlet.http.HttpSession;
@CrossOrigin(origins = "http://localhost:3000") // Allow your React app's origin

public class ReceptionController {
	
	@Autowired
	private DeliveryService deliveryService;
	
	@Autowired
	private PackageService packageService;

    public ResponseEntity<String> Arrived(@PathVariable(value = "delivery_id") String id, HttpSession session) {
        try {
            // Find the delivery by its label
            Delivery delivery = deliveryService.findByLabel_livraison(id);
            delivery.setDepart(LocalDateTime.now());
            // Update the delivery status
            delivery.setStatus("Arrivé");
        	for( Package P : delivery.getPackages()) {
        		P.setStatus("arrivé");
        		packageService.savePackage(P);
        	}
            deliveryService.saveDelivery(delivery);
            // You can return a success message or just an empty body
            return new ResponseEntity<>("Delivery status updated successfully", HttpStatus.OK);
            
        } catch (Exception e) {
            // Return the error message in case of failure
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
