package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Agency;
import com.example.demo.model.Reception;

@Repository
public interface ReceptionRepository extends JpaRepository<Reception, Integer> {

	Iterable<Reception> findByAgency(Optional<Agency> agence);

}
