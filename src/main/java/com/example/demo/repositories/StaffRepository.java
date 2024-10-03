package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.StaffUserDetails;

@Repository
public interface StaffRepository extends JpaRepository<StaffUserDetails, String> {
	StaffUserDetails findByMatricule(String Matricule);
}
