package com.example.demo.service;

import java.util.Iterator;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Agency;
import com.example.demo.model.Reception;
import com.example.demo.repositories.AgencyRepository;
import com.example.demo.repositories.ReceptionRepository;

@Service
public class ReceptionService {

	@Autowired
	private ReceptionRepository BFT;
	@Autowired
	private AgencyRepository agencyRepo;
	private Optional<Agency> agence;
	
	public Iterable<Reception> findByAgency(int agency_id) {
		agence = this.agencyRepo.findById(agency_id);
		Iterable<Reception> transits=  this.BFT.findByAgency(agence);
		Iterator<Reception> it = transits.iterator();
		while(it.hasNext()) {
			Reception transit = it.next();
			transit.setBus();
			transit.setVilleArrivee();
			transit.setVilleDepart();
			System.out.println("bean beans : "+ transit.getLabelLivraison().getLabelLivraison());
		}
		return transits;
	}
}
