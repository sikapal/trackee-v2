package com.example.demo.controllers;

import com.example.demo.model.Bus;
import com.example.demo.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/buses")
public class BusController {

    @Autowired
    private BusService busService;

    // 1. Fetch all buses
	/*
	 * @GetMapping public ResponseEntity<List<Bus>> getAllBuses() { List<Bus> buses
	 * = busService.getAvailableBuses(); return new ResponseEntity<>(buses,
	 * HttpStatus.OK); }
	 */
    @GetMapping
    public List<Bus> getAllBuses2() {
        return busService.getAllBuses();
    }
    
    @GetMapping("/{matricule}")
    public ResponseEntity<Bus> getBusByMatricule(@PathVariable int id) {
        Optional<Bus> bus = busService.getBusById(id);
        return bus.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/createNewBus")
    public Bus createBus(@RequestBody Bus bus) {
        return busService.saveBus(bus);
    }

    @PutMapping("updateBus/{id}")
    public ResponseEntity<Bus> updateBus(@PathVariable int id, @RequestBody Bus busDetails) {
        try {
            Bus updatedBus = busService.updateBus(id, busDetails);
            return ResponseEntity.ok(updatedBus);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("deleteBus/{id}")
    public ResponseEntity<Void> deleteBus(@PathVariable int id) {
        busService.deleteBus(id);
        return ResponseEntity.noContent().build();
    }
    
    
    // 2. Add a new bus
	/*
	 * @PostMapping public ResponseEntity<String> addBus(@RequestBody Bus bus) { try
	 * { busService.saveBus(bus); return new
	 * ResponseEntity<>("Bus added successfully!", HttpStatus.CREATED); } catch
	 * (Exception e) { return new ResponseEntity<>("Error: " + e.getMessage(),
	 * HttpStatus.INTERNAL_SERVER_ERROR); } }
	 */

 
}
