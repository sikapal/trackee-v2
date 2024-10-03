package com.example.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "package")
public class Package {
    @Id
	private String numSerie;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "id_livraison", referencedColumnName = "label_livraison")
    private Delivery label_livrasion;
	private int exp_number;
	private int dest_number;
	private String description;
	private String nature;
	private String status;
	private String type;
	private String destination;
	public String getNumSerie() {
		return numSerie;
	}
	public void setNumSerie(String numSerie) {
		this.numSerie = numSerie;
	}
	public Delivery getLabel_livrasion() {
		return label_livrasion;
	}
	public void setLabel_livrasion(Delivery label_livrasion) {
		this.label_livrasion = label_livrasion;
	}
	public int getExp_number() {
		return exp_number;
	}
	public void setExp_number(int exp_number) {
		this.exp_number = exp_number;
	}
	public int getDest_number() {
		return dest_number;
	}
	public void setDest_number(int dest_number) {
		this.dest_number = dest_number;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getNature() {
		return nature;
	}
	public void setNature(String nature) {
		this.nature = nature;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
}
