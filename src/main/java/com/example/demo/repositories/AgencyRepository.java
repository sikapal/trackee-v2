package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

import com.example.demo.model.Agency;

@Repository
public interface AgencyRepository extends JpaRepository<Agency, Integer> {

	@Query("SELECT COUNT(p) FROM Agency p WHERE p.deletedAt IS NULL")
    Long countExistingAgencies(); // Count agencies who are not deleted

    @Query("SELECT COUNT(p) FROM Agency p WHERE p.deletedAt IS NOT NULL")
    Long countDeletedAgencies(); // Count agencies who are marked as deleted

    @Query("SELECT COUNT(p) FROM Agency p")
    Long countCreatedAgencies(); // Count all agencies ever created
    
    @Query("SELECT p FROM Agency p WHERE p.deletedAt IS NULL ")
    List<Agency> findActiveAgencies();
	
}

