package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Driver;
import com.example.demo.model.Package;

@Repository
public interface PackageRepository extends JpaRepository<Package, String> {

	Package findByNumSerie(String Matricule);
	List<Package> findByDestination(String destination);
}
