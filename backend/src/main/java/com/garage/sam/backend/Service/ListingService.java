package com.garage.sam.backend.Service;

import com.garage.sam.backend.Model.Car;
import com.garage.sam.backend.Repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ListingService {

    @Autowired
    private CarRepository carRepository;

    public Collection getListings() {
        // Returns all the listings present in the database.

        return this.carRepository.findAll();
    }

    public Car getListing(String id) {
        // Returns a listing by a particular id.

        Optional<Car> carOptional = this.carRepository.findById(id);
        if(!carOptional.isPresent()) {
            return null;
        } else {
            return carOptional.get();
        }
    }

    public Collection getFiveRandomListings() {
        // Returns five random listings from the entire data set.

        Collection<Car> allEntries = this.carRepository.findAll();
        ArrayList<Car> result = new ArrayList<>();
        Random random = new Random();

        while(result.size() < 5) {
            if(allEntries.size() <= 0) {
                break;
            }
            int randomIndex = random.nextInt(allEntries.size());
            Car randomCar = ((List<Car>) allEntries).remove(randomIndex);
            result.add(randomCar);
        }
        return result;
    }

    public Collection getListingByUsername(String username) {
        // Returns all listings of a particular user.

        return this.carRepository.findByUsername(username);
    }

    public Collection getListingByMetaData(String metaData) {
        // Returns all listings based on provided metaData.

        return this.carRepository.findByMetaData(metaData);
    }

    public int postListing(Car car) {
        // Adds a new listing to the database.

        String username = car.getUsername();
        String title = car.getTitle();
        Integer mileage = car.getMileage();
        Integer price = car.getPrice();
        String metaData = car.getMetaData();

        if((username == null) || (title == null) || (mileage == null) ||
                (price == null) || (metaData == null)) {
            return 403;
        }
        this.carRepository.save(car);
        return 201;
    }

    public int deleteListing(String id) {
        // Deletes a listing by Id.
        this.carRepository.deleteById(id);
        return 201;
    }

}
