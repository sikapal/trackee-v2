package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Data
@Entity
@Table(name = "enterprise")
public class Enterprise {
    @Id
    @Column(name = "enterprise_id") // Ensures the correct column name in the database
    private String enterpriseId; // Renamed to follow Java naming conventions

    private int numOfAgencies; // Changed to camelCase

    // No need for explicit getters and setters due to @Data annotation
}
