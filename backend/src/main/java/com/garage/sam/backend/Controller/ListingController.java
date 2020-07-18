package com.garage.sam.backend.Controller;

import com.garage.sam.backend.Model.Car;
import com.garage.sam.backend.Service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/listings")
public class ListingController {
    @Autowired
    private ListingService listingService;

    @GetMapping
    public Collection getListings() {
        return this.listingService.getListings();
    }

    @GetMapping("/getById")
    public Car getListing(@RequestParam String id) {
        return this.listingService.getListing(id);
    }

    @GetMapping("/getByUsername")
    public Collection getListingById(@RequestParam String username) {
        return this.listingService.getListingByUsername(username);
    }

    @GetMapping("/getByTitle")
    public Collection getListingByTitle(@RequestParam String title) {
        return this.listingService.getListingByTitle(title);
    }

    @PostMapping("/postListing")
    public int postListing(@RequestBody Car car) {
        return this.listingService.postListing(car);
    }

    @DeleteMapping("/deleteListing")
    public int deleteListing(@RequestParam String id) {
        return this.listingService.deleteListing(id);
    }
}
