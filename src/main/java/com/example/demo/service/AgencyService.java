package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Agency;
import com.example.demo.repositories.AgencyRepository;
import org.springframework.data.domain.Sort;


import java.util.List;
import java.util.Optional;

@Service
public class AgencyService {

	
	@Autowired
	private AgencyRepository agencyRepo;
	
	public List<Agency> getAllAgencies() {
        return agencyRepo.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }
	
	  public List<Agency> getAllActiveAgencies() {
	        return agencyRepo.findActiveAgencies();
	    }

    public Optional<Agency> getAgencyById(int id) {
        return agencyRepo.findById(id);
    }

    public Agency createAgency(Agency agency) {
        return agencyRepo.save(agency);
    }

    public Agency updateAgency(int id, Agency updatedagency) {
    	Optional<Agency> existingAgencyOpt = agencyRepo.findById(id);
    	
    	if(existingAgencyOpt.isPresent()) {
    		Agency existingAgency = existingAgencyOpt.get();
    		
    		 // Preserve agencycode,enterprise Id and creationDate
            updatedagency.setAgencyCode(existingAgency.getAgencyCode());
            updatedagency.setCreatedAt(existingAgency.getCreatedAt());
            updatedagency.setEnterprise_id(existingAgency.getEnterprise_id());
            //update other fields
            
            existingAgency.setAgencyName(updatedagency.getAgencyName());
            existingAgency.setAgencyTown(updatedagency.getAgencyTown());
            
            
            return agencyRepo.save(existingAgency);
            }else
    	
            	throw new RuntimeException("Agency not found");
    }

    
    public Agency deleteAgency(int id) {
        Agency agency = agencyRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Agency not found"));
        agency.markasDeleted();
        return agencyRepo.save(agency); // Save the entity with the deletion date set
    }
    
    public Long getExistingAgenciesCount() {
        return agencyRepo.countExistingAgencies();
    }

    public Long getDeletedAgenciesCount() {
        return agencyRepo.countDeletedAgencies();
    }

    public Long getCreatedAgenciesCount() {
        return agencyRepo.countCreatedAgencies();
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
