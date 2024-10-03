package com.example.demo.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@Table(name = "livraison")
public class Delivery {
    @Id
    @Column(name = "label_livraison")
    private String labelLivraison;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bus", referencedColumnName = "matricule")
    private Bus bus;

    @Column(name = "ville_depart")
    private String villeDepart;

    @Column(name = "ville_arrivee")
    private String villeArrivee;

    private LocalDateTime Depart;

    @OneToMany(mappedBy = "label_livrasion", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Package> packages = new ArrayList<>();

    private LocalDateTime Arrivee;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "arrival_agency", referencedColumnName = "id")
    private Agency ArrivalAgency;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departure_agency", referencedColumnName = "id")
    private Agency DepartureAgency;

    @Column(name = "status")
    private String status;

    // New field to hold a list of agencies
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "delivery_id", referencedColumnName = "label_livraison")
    private List<Agency> transitAgencies = new ArrayList<>();

    // Getters and setters
    public String getLabelLivraison() {
        return labelLivraison;
    }

    public void setLabelLivraison(String labelLivraison) {
        this.labelLivraison = labelLivraison;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }

    public String getVilleDepart() {
        return villeDepart;
    }

    public void setVilleDepart(String ville_depart) {
        this.villeDepart = ville_depart;
    }

    public String getVilleArrivee() {
        return villeArrivee;
    }

    public void setVilleArrivee(String ville_arrivee) {
        this.villeArrivee = ville_arrivee;
    }

    public LocalDateTime getDepart() {
        return Depart;
    }

    public void setDepart(LocalDateTime depart) {
        Depart = depart;
    }

    public List<Package> getPackages() {
        return packages;
    }

    public void setPackages(List<Package> packages) {
        this.packages = packages;
    }

    public LocalDateTime getArrivee() {
        return Arrivee;
    }

    public void setArrivee(LocalDateTime arrivee) {
        Arrivee = arrivee;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Agency> getAgencies() {
        return transitAgencies;
    }

    public void setAgencies(List<Agency> agencies) {
        this.transitAgencies = agencies;
    }
}
