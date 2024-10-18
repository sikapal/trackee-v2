package com.example.demo.service;

import java.util.ArrayList;
import java.util.Iterator;

import org.aspectj.weaver.Iterators;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Delivery;
import com.example.demo.model.Package;
import com.example.demo.model.StaffUserDetails;
import com.example.demo.repositories.DeliveryRepository;

@Service
public class DeliveryService {

	@Autowired
	private DeliveryRepository deliveryRepo;
	
	@Autowired
	private PackageService packageService;
	
	public Delivery saveDelivery(Delivery delivery) {
		delivery = deliveryRepo.save(delivery);
		return delivery;
	}
	
    public Iterable<Delivery> getDeliveries() {
        return deliveryRepo.findAll();
    }
    
	public boolean try_delivery_id(String matricule){
		Iterable<Delivery> deliveries = this.getDeliveries();
		Iterator<Delivery> iterator = deliveries.iterator();
		while(iterator.hasNext()) {
			Delivery element = iterator.next();
			if(matricule.equals(element.getLabelLivraison())){
				return true;
			}
		}
		return false;
	}
	
    public Delivery findByLabel_livraison(String Matricule) {
    	
        return deliveryRepo.findByLabelLivraison(Matricule);
    }
    
    public Iterable<Delivery> findByVilleDepart(String ville) {
    	System.out.println("laa ville est : "+ville);
        return deliveryRepo.findByVilleDepart(ville);
    }
    
    public Iterable<Delivery> findDeliveryByVilleArrivee(String ville) {
    	System.out.println("laa ville est : "+ville);
 		Iterable<Package> packages =  packageService.gePackagesArrived(ville);
 		Iterator<Package> it = packages.iterator();
 		ArrayList<Delivery> deliveries = new ArrayList<>();
 		while(it.hasNext()) {
 			Package P = it.next();
 			deliveries.add(P.getDeliveriesPassedBy().get(0));
 			}
 		return deliveries;
    }
    
    //Recuperer les colis arrivés
    public Iterable<Package> findByVilleArrivee(String ville) {
    	System.out.println("laa ville est : "+ville);
 		Iterable<Delivery> deliveries =  deliveryRepo.findByVilleArrivee(ville);
 		ArrayList<Package> arrivedPackages = new ArrayList<>();
 		Iterator<Delivery> iterator = deliveries.iterator();
 		while(iterator.hasNext()) {
 			Delivery element = iterator.next();
 			if(element.getStatus().equals("arrive")){
 		 		Iterator<Package> iteratorP = element.getPackages().iterator();
 		 		while(iteratorP.hasNext()) {
 		 			Package P = iteratorP.next();
 		 			if(P.getStatus().equals("recupere")){
 		 				System.out.println("no");
 		 		}
 		 			else {
 	 	 				arrivedPackages.add(P);
 		 			}
 		 		}
 			}
 		}
 		return arrivedPackages;
    }
}