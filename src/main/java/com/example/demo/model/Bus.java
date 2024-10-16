package com.example.demo.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "bus")
public class Bus {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
    @Column(name = "matricule")
	private String matricule;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "enterprise_id", referencedColumnName = "enterprise_id")
	private Enterprise enterprise;
	private double longitude;
	private String city;
	private double latitude;
	 private String createdAt;
	 
	 @PrePersist
	    public void prePersist() {
	        this.createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	    }
	
}
