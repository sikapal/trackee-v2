package com.example.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Bus;
import com.example.demo.model.Delivery;
import com.example.demo.repositories.BusRepository;

@Service
public class BusService {

	@Autowired
	private BusRepository busRepo;
	@Autowired
	private DeliveryService dService;
	
	public Bus saveBus(Bus bus) {
		bus = busRepo.save(bus);
		return bus;
	}
	
	public List<Bus> getAll(){
		return this.busRepo.findAll();
	}
	
    public List<Bus> getAvailableBuses() {
    	Iterable<Bus> bus = busRepo.findAll();
    	Iterable<Delivery> livraisons = dService.getDeliveries();
    	ArrayList<Bus> availables = new ArrayList<>();
    	Iterator<Bus> it2 = bus.iterator();
    	int i = 0;
    	while(it2.hasNext()) {
    		Bus b = it2.next();
        	Iterator<Delivery> it1 = livraisons.iterator();
    		System.out.println("the bus : "+b.getMatricule());
    		while(it1.hasNext()) {
    			Delivery D = it1.next();
    			if(b.getMatricule().equals(D.getBus().getMatricule())) {
    				i++;
    			}
    		}
    		if(i==0) {
    			availables.add(b);
    		}
			i=0;
    	}
    	
        return availables;
    }
    
    public Bus loadBusById(String matricule) {
		Bus bus = busRepo.findByMatricule(matricule);
    	return bus;
    }
}
