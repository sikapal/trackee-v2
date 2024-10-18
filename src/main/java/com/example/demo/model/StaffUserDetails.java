package com.example.demo.model;
import java.util.ArrayList;
import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
@Table(name = "personnelle")
public class StaffUserDetails implements UserDetails {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private String matricule;
	private String nom;
	private String prenom;
	private String poste;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "agence", referencedColumnName = "id")
	private Agency agence;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "enterprise", referencedColumnName = "enterprise_id")
	private Enterprise enterprise;
	private String password;
	
	

	public StaffUserDetails() {
	}

	
	
	public String getMatricule() {
		return matricule;
	}



	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public String getPrenom() {
		return prenom;
	}



	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}



	public String getPoste() {
		return poste;
	}



	public void setPoste(String poste) {
		this.poste = poste;
	}



	public Agency getAgence() {
		return agence;
	}



	public void setAgence(Agency agence) {
		this.agence = agence;
	}



	public Enterprise getEnterprise() {
		return enterprise;
	}



	public void setEnterprise(Enterprise enterprise) {
		this.enterprise = enterprise;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.matricule;
	}

	private String getAgency() {
		return this.agence.toString();
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}

	public StaffUserDetails(String matricule, String pwd, ArrayList arrayList) {
		// TODO Auto-generated constructor stub
		this.matricule = matricule ;
		this.password = pwd;
	}

}
