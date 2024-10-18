package com.example.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import jakarta.persistence.PostPersist;
import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.NotEmpty;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table( name ="agency")

public class Agency {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String agencyCode;

	@NotEmpty(message = "agency Name cannot be null")
	private String agencyName;
	 
	 @NotEmpty(message = "agency Town cannot be null")
	 private String agencyTown;
	 
	 private String createdAt;
	    
	 private String deletedAt;
	
	
	
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "enterprise_id", referencedColumnName = "enterprise_id")
	private Enterprise enterprise_id;
	
	public Agency( String agencyCode,String agencyName,String agencyTown,Enterprise enterprise_id ) {
    	this.enterprise_id=enterprise_id;
		this.agencyCode=agencyCode;
    	this.agencyName=agencyName;
    	this.agencyTown=agencyTown;
    	  	
    }

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Enterprise getEnterprise_id() {
		return enterprise_id;
	}
	public void setEnterprise_id(Enterprise enterprise_id) {
		this.enterprise_id = enterprise_id;
	}
	 @PrePersist
	    public void prePersist() {
	        this.createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	    }

	    
	    public void markasDeleted() {
	        this.deletedAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	    }
	    
	    @PostPersist
	    public void postPersist() {
	        this.agencyCode = enterprise_id+"_AG_" + this.id;
	    }
	    public boolean isDeleted() {
	        return this.deletedAt != null;
	    }
	
	
}


