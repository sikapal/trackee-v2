package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Bus;

@Repository
public interface BusRepository extends JpaRepository<Bus, String> {
	Bus findByMatricule(String Matricule);
}
