package com.example.demo.controllers;

import com.example.demo.model.Driver;
import com.example.demo.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow your React app's origin
@RequestMapping("/drivers")
public class DriverController {

    @Autowired
    private DriverService driverService;

    // Endpoint to add a new driver
    
    @PostMapping
    public ResponseEntity<Driver> addDriver(@RequestBody Driver driver) {
        Driver savedDriver = driverService.addDriver(driver);
        return ResponseEntity.ok(savedDriver);
    }

    // Endpoint to find drivers with no actual delivery
    @GetMapping("/available")
    public ResponseEntity<List<Driver>> getAvailableDrivers() {
        List<Driver> availableDrivers = driverService.getDriversWithNoActualDelivery();
        return ResponseEntity.ok(availableDrivers);
    }
}
