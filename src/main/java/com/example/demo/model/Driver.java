package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "drivers")
public class Driver extends StaffUserDetails {

    private static final long serialVersionUID = 1L;

    @ManyToOne
    @JoinColumn(name = "bus_id") // Clé étrangère vers Bus
    private Bus actualBus; // Field to hold the current delivery assignment

    // Default constructor
    public Driver() {
        super(); // Call the superclass constructor
    }

    // Constructor with parameters
    public Driver(String matricule, String password, Bus actualbus) {
        super(matricule, password, null); // Call the superclass constructor with matricule and password
        this.actualBus = actualbus;
    }

    // Getter and Setter for actualDelivery
    public Bus getActualBus() {
        return this.actualBus;
    }

    public void setActualBus(Bus actualbus) {
        this.actualBus = actualbus;
    }

    // Override isAccountNonExpired method if needed
    @Override
    public boolean isAccountNonExpired() {
        return true; // Logic for whether the account is non-expired
    }

    // Override isAccountNonLocked method if needed
    @Override
    public boolean isAccountNonLocked() {
        return true; // Logic for whether the account is non-locked
    }

    // Override isCredentialsNonExpired method if needed
    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Logic for whether the credentials are non-expired
    }

    // Override isEnabled method if needed
    @Override
    public boolean isEnabled() {
        return true; // Logic for whether the account is enabled
    }
}
