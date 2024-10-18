package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@Table(name = "package")
public class Package {
    @Id
	private String numSerie;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "id_livraison", referencedColumnName = "label_livraison")
    @JsonIgnore // This field will be excluded from JSON response
    private Delivery label_livrasion;
	private String exp_number;
	private String dest_number1;
	private String dest_number2;
	private String description;
	private String nature;
	private String status;
	private String type;
	private String destination;
	private String activeDelivery;
    @ManyToMany
    @JsonIgnore
    @JoinTable(
        name = "package_delivery",
        joinColumns = @JoinColumn(name = "numSerie "),
        inverseJoinColumns = @JoinColumn(name = "labelLivraison")
    )    private List<Delivery> deliveriesPassedBy = new ArrayList<>();
}
