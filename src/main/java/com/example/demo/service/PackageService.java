package com.example.demo.service;

import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.demo.model.Bus;
import com.example.demo.model.Delivery;
import com.example.demo.model.Package;
import com.example.demo.repositories.PackageRepository;

import lombok.Data;

@Data
@Service
public class PackageService {
	@Autowired
	private PackageRepository packageRepository;
	
	public Package savePackage(Package packet) {
		packet = packageRepository.save(packet);
		return packet;
	}
	
    public Iterable<Package> gePackages() {
        return packageRepository.findAll();
    }
    
    public Iterable<Package> gePackagesfromDelivery(String label) {
    	
		Iterable<Package> packages = this.gePackages();
		Iterator<Package> iterator = packages.iterator();
		ArrayList<Package> Thepackages = new ArrayList<Package>();
		while(iterator.hasNext()) {
			Package element = iterator.next();
			if(label.equals(element.getLabel_livrasion())){
				Thepackages.add(element);
			}
		}
        return Thepackages;
    }
    
    public Package findByNumSerie(String Matricule) {
    	return packageRepository.findByNumSerie(Matricule);
    }

	
}
