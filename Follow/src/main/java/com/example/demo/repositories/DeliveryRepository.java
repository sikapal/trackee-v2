package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Delivery;
import com.example.demo.model.StaffUserDetails;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, String> {

	Delivery findByLabelLivraison(String Matricule);
	Iterable<Delivery> findByVilleDepart(String villeArrivee);
	Iterable<Delivery> findByVilleArrivee(String villeArrivee);

}
