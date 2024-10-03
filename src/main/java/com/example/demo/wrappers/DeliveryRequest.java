package com.example.demo.wrappers;

//import com.example.demo.model.Bus;
import com.example.demo.model.Delivery;
import com.example.demo.model.Driver;
import com.example.demo.model.Package;
import com.example.demo.model.Agency; // Assuming Agency represents a stop.

import java.util.List;

public class DeliveryRequest {
    private Delivery delivery;
    private Package packet;
    //private Bus bus;
    private Driver driver;
    private List<Agency> intermediateStops; // New field for intermediate stops

    // Getters and setters
    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }

    public Package getPacket() {
        return packet;
    }

    public void setPacket(Package packet) {
        this.packet = packet;
    }
/*
    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }*/

    public Driver getDriver() {
        return this.driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public List<Agency> getIntermediateStops() {
        return intermediateStops;
    }

    public void setIntermediateStops(List<Agency> intermediateStops) {
        this.intermediateStops = intermediateStops;
    }
}
