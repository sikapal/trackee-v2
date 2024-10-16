package com.example.demo.controllers;

import com.example.demo.model.Agency;
import com.example.demo.service.AgencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;



@RestController
@RequestMapping("/api/agency")
@CrossOrigin(origins = "*")
@Tag(name = "Agency API", description = "Operations related to Agency management")
public class AgencyController {

	@Autowired
	private AgencyService agencyService;

	@GetMapping
	@Operation(summary = "Get All agencies", description = "Returns all the agencies")
	public List<Agency> getAllAgencies() {
		return agencyService.getAllAgencies();
	}

	@GetMapping("/active-agencies")
	@Operation(summary = "Get all active agencies", description = "Returns all the actives agencies")
	public List<Agency> getAllActiveAgencies() {
		return agencyService.getAllActiveAgencies();
	}
	
	  
	@GetMapping("/{id}")
	@Operation(summary = "Get all agency by id", description = "Returns a unique agency")
	public ResponseEntity<Agency> getAgencyById(@PathVariable int id) {
		Optional<Agency> agency = agencyService.getAgencyById(id);
		return agency.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PostMapping("/createNewAgency")
	public ResponseEntity<Agency> createAgency(@Valid @RequestBody Agency agency) {
		Agency createdAgency = agencyService.createAgency(agency);
		return ResponseEntity.ok(createdAgency);
	}

	@PutMapping("/updateAgency/{id}")
	public ResponseEntity<Agency> updateAgency(@PathVariable int id, @Valid @RequestBody Agency agency) {
		return ResponseEntity.ok(agencyService.updateAgency(id, agency));
	}

	@DeleteMapping("/deleteAgency/{id}")
	public ResponseEntity<Void> deleteAgency(@PathVariable int id) {
		agencyService.deleteAgency(id);
		return ResponseEntity.noContent().build();
	}
	
	 // Endpoint to get the count of existing agencies
    @GetMapping("/count/existing-agencies")
    public ResponseEntity<Long> getExistingagenciesCount() {
        Long existingAgenciesCount = agencyService.getExistingAgenciesCount();
        return ResponseEntity.ok(existingAgenciesCount);
    }

    // Endpoint to get the count of deleted agencies
    @GetMapping("/count/deleted-agencies")
    public ResponseEntity<Long> getDeletedagenciesCount() {
        Long deletedAgenciesCount = agencyService.getDeletedAgenciesCount();
        return ResponseEntity.ok(deletedAgenciesCount);
    }

    // Endpoint to get the count of created agencies
    @GetMapping("/count/created-agencies")
    public ResponseEntity<Long> getCreatedagenciesCount() {
        Long createdAgenciesCount = agencyService.getCreatedAgenciesCount();
        return ResponseEntity.ok(createdAgenciesCount);
    }

}
