package com.example.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Agency;
import com.example.demo.model.Bus;
import com.example.demo.model.Delivery;
import com.example.demo.repositories.BusRepository;

@Service
public class BusService {

	
	@Autowired
	private DeliveryService dService;
	
	
	@Autowired
    private BusRepository busRepo;

    public List<Bus> getAllBuses() {
        return busRepo.findAll();
    }
	
	/*
	 * public <Bus> Bus getBusByMatricule(String matricule) { return (Bus)
	 * busRepo.findByMatricule(matricule); }
	 */
    
    public Optional<Bus> getBusById(int id) {
        return busRepo.findById(id);
    }


    public Bus saveBus(Bus bus) {
        return busRepo.save(bus);
    }

    public Bus loadBusById(String matricule) {
		Bus bus = busRepo.findByMatricule(matricule);
    	return bus;
    }
 
    public void deleteBus(int id) {
    	busRepo.deleteById(id);
    }

    public Bus updateBus(int id, Bus busDetails) {
        Optional<Bus> busOptional = busRepo.findById(id);

        if (busOptional.isPresent()) {
            Bus bus = busOptional.get();
            bus.setMatricule(busDetails.getMatricule());
            bus.setEnterprise(busDetails.getEnterprise());
            bus.setLongitude(busDetails.getLongitude());
            bus.setLatitude(busDetails.getLatitude());
            bus.setCity(busDetails.getCity());
            return busRepo.save(bus);
        } else {
            throw new RuntimeException("Bus not found");
        }
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
    

}
