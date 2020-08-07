package com.garage.sam.backend.Repository;

import com.garage.sam.backend.Model.Car;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CarRepository extends MongoRepository<Car, String> {
    List findByUsername(String username);
    List findByMetaData(String metaData);
}
