package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Agency;
import com.example.demo.repositories.AgencyRepository;

@Service
public class AgencyService {

	@Autowired
	private AgencyRepository agencyRepo;
	
	public Agency saveAgency(Agency agency) {
		agency = agencyRepo.save(agency);
		return agency;
	}
	
	public Agency findByVille(String ville) {
		return agencyRepo.findByVille(ville);
	}
	
    public List<Agency> getAgencies() {
        return agencyRepo.findAll();
    }
   /* 
    public Iterable<BeanForTransit> getTransitPackages(){
		return this.agencyRepo.getTransitPackages();
		/*Iterable<String> transactions = this.agencyRepo.getTransitPackages();
		System.out.println("element "+transactions.);
		Iterator<String> iterator = transactions.iterator();
		String[] methods = {"setLabelLivraison", "setDepart", "setVilleDepart", "setVilleArrivee", "setBus"};
		int index = 0;
		BeanForTransit obj = new BeanForTransit();
		Class<?> ClassObj = obj.getClass();
		List<BeanForTransit> list = new ArrayList<>();
		while(iterator.hasNext()) {
			if(iterator.next() instanceof String) {
			String element = iterator.next();
			if(index%5==0 && index>0){
				list.add(obj);
				obj = new BeanForTransit();
				index = 0;
			}
			Method method = ClassObj.getDeclaredMethod(methods[index],String.class);
			method.invoke(obj, element);
			System.out.println("element "+element);
		}	
		}
		return list;
    	
    }*/
}
