package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Agency;
import com.example.demo.model.Bus;

@Repository
public interface AgencyRepository extends JpaRepository<Agency, Integer> {

	/*@Query(nativeQuery = true, value = "select ongoing_transactions.label_livraison, livraison.depart, livraison.ville_depart, livraison.ville_arrivee, livraison.bus from ongoing_transactions inner join livraison on ongoing_transactions.label_livraison = livraison.label_livraison where agency_id = 6;")
    public Iterable<BeanForTransit> getTransitPackages();*/
	Agency findByVille(String ville);
}

