package com.example.demo.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Reception")
public class Reception {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "label_livraison", referencedColumnName = "label_livraison")
	private Delivery labelLivraison;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "agency_id", referencedColumnName = "id")
	private Agency agency;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "enterprise", referencedColumnName = "enterprise_id")
	private Enterprise enterprise;
	private LocalDateTime arrivee;
	private String villeDepart;
	private String villeArrivee;
	private String bus;
	private String label;
	
	public void setVilleDepart() {
		this.villeDepart = this.labelLivraison.getVilleDepart();
	}
	
	public void setBus() {
		//this.bus= this.labelLivraison.getBus().getMatricule();
	}
	
	public void setVilleArrivee() {
		this.villeArrivee = this.labelLivraison.getVilleArrivee();
	}
	
}
