package com.example.demo.repositories;

import com.example.demo.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DriverRepository extends JpaRepository<Driver, String> {
    // Custom query method to find drivers with no actual delivery
    List<Driver> findByActualBusIsNull();
}
