package com.example.demo.service;

import com.example.demo.model.Driver;
import com.example.demo.repositories.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverService {

	@Autowired
    private DriverRepository driverRepository;

    // Method to add a new driver
    public Driver addDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    // Method to find drivers with null actualDelivery
    public List<Driver> getDriversWithNoActualDelivery() {
        return driverRepository.findByActualBusIsNull();
    }
    
}
