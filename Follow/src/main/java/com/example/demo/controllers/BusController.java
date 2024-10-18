package com.example.demo.controllers;

import com.example.demo.model.Bus;
import com.example.demo.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow your React app's origin
@RequestMapping("/buses")
public class BusController {

    @Autowired
    private BusService busService;

    // 1. Fetch all buses
    @GetMapping
    public ResponseEntity<List<Bus>> getAllBuses() {
        List<Bus> buses = busService.getAvailableBuses();
        return new ResponseEntity<>(buses, HttpStatus.OK);
    }

    // 2. Add a new bus
    @PostMapping
    public ResponseEntity<String> addBus(@RequestBody Bus bus) {
        try {
            busService.saveBus(bus);
            return new ResponseEntity<>("Bus added successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 3. Remove a bus by ID
}
