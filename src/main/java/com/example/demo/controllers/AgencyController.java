package com.example.demo.controllers;

import com.example.demo.model.Agency;
import com.example.demo.service.AgencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agencies")
public class AgencyController {

    @Autowired
    private AgencyService agencyService;

    // 1. Fetch all agencies
    @GetMapping
    public ResponseEntity<List<Agency>> getAllAgencies() {
        List<Agency> agencies = agencyService.getAgencies();
        return new ResponseEntity<>(agencies, HttpStatus.OK);
    }

    // 2. Add a new agency
    //Yeah but it might be after authorization from the Regulator
    @PostMapping
    public ResponseEntity<String> addAgency(@RequestBody Agency agency) {
        try {
            agencyService.saveAgency(agency);
            return new ResponseEntity<>("Agency added successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Think about a method to delete agencies
}
