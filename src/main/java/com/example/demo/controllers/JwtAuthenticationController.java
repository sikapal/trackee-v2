package com.example.demo.controllers;

import com.example.demo.model.StaffUserDetails;
import com.example.demo.service.JwtUserDetailsService;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class JwtAuthenticationController {

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    private com.example.demo.config.JwtTokenUtil jwtTokenUtil;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody StaffUserDetails usr, HttpSession session) {
        try {
            System.out.println("Info " + (usr.getMatricule() + " pwd :" + usr.getPassword()));

            // Load user details
            final StaffUserDetails userDetails = (StaffUserDetails) jwtUserDetailsService
                    .loadUserByUsername(usr.getMatricule());

            System.out.println("Info " + (usr.getUsername() + " pwd :" + usr.getPassword()));
            
            // Validate password
            if (userDetails.getPassword().equals(usr.getPassword())) {
                final String token = jwtTokenUtil.generateToken(userDetails);
                
                // Set session attributes
                session.setAttribute("Agence", userDetails.getAgence().getAgencyCode());
                session.setAttribute("agencyId", userDetails.getAgence().getId());
                session.setAttribute("agencyTown", userDetails.getAgence().getAgencyTown());
                session.setAttribute("token", token);

                // Return the token in the response
                return ResponseEntity.ok().body("Bearer " + token);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body("Invalid username or password");
            }
        } catch (Exception e) {
            // Log the error (optional)
            System.err.println("Error during authentication: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        }
    }
}
