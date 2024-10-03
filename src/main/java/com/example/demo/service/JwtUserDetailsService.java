package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.Package;
import com.example.demo.model.StaffUserDetails;
import com.example.demo.repositories.StaffRepository;

import jakarta.transaction.Transactional;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private StaffRepository staffRepo;

	@Override
    @Transactional

	public StaffUserDetails loadUserByUsername(String matricule) throws UsernameNotFoundException {
		StaffUserDetails user = staffRepo.findByMatricule(matricule);
		/*if ("javainuse".equals(username)) {
			System.out.println("5.5");
			return new StaffUserDetails("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}*/
		System.out.println("pseudo written = "+matricule + "password : "+user.getPassword());
		return user;
	}
	
    public Iterable<StaffUserDetails> geEmployees() {
        return staffRepo.findAll();
    }
	
}