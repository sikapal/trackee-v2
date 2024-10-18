package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Enterprise;
import com.example.demo.repositories.EnterpriseRepository;

@Service
public class EnterpriseService {

	@Autowired
	private EnterpriseRepository enterpriseRepo;
	
	public Enterprise saveEnterprise(Enterprise enterprise) {
		enterprise = enterpriseRepo.save(enterprise);
		return enterprise;
	}
	
    public Iterable<Enterprise> getEnterprises() {
        return enterpriseRepo.findAll();
    }
}
