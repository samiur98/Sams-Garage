package com.garage.sam.backend.Service;

import com.garage.sam.backend.Model.Car;
import com.garage.sam.backend.Repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class ListingService {

    @Autowired
    private CarRepository carRepository;

    public Collection getListings() {
        return this.carRepository.findAll();
    }

    public Car getListing(String id) {
        Optional<Car> carOptional = this.carRepository.findById(id);
        if(!carOptional.isPresent()) {
            return null;
        } else {
            return carOptional.get();
        }
    }

    public Collection getListingByUsername(String username) {
        return this.carRepository.findByUsername(username);
    }

    public Collection getListingByTitle(String title) {
        return this.carRepository.findByTitle(title);
    }

    public int postListing(Car car) {
        String username = car.getUsername();
        String title = car.getTitle();
        Integer mileage = car.getMileage();
        Integer price = car.getPrice();
        Integer year = car.getYear();

        if((username == null) || (title == null) || (mileage == null) ||
                (price == null) || (year == null)) {
            return 403;
        }
        this.carRepository.save(car);
        return 201;
    }

    public int deleteListing(String id) {
        this.carRepository.deleteById(id);
        return 201;
    }

}
