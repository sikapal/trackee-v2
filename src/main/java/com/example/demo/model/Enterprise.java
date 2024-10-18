package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Data
@Entity
@Table(name = "enterprise")
public class Enterprise {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "enterprise_id") // Ensures the correct column name in the database
    private int enterpriseId; // Renamed to follow Java naming conventions
    
    private String enterpriseName;

    private int numOfAgencies; // Changed to camelCase

}
