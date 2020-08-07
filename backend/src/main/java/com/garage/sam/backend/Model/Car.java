package com.garage.sam.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "listings")
public class Car {
    @Id
    private String id;
    private String title;
    private String metaData;
    private Integer price;
    private Integer mileage;
    private Integer doors;
    private String transmission;
    private Integer seats;
    private String color;
    private String username;

    public Car(String title, String metaData, Integer price, Integer mileage, Integer doors,
               String transmission, Integer seats, String color, String username) {
        this.title = title;
        this.metaData = metaData; // "[year] [make] [model]"
        this.price = price;
        this.mileage = mileage;
        this.doors = doors;
        this.transmission = transmission;
        this.seats = seats;
        this.color = color;
        this.username = username;
    }

    // Getters

    public String getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getMetaData() {
        return this.metaData;
    }

    public Integer getPrice() {
        return this.price;
    }


    public Integer getMileage() {
        return this.mileage;
    }

    public Integer getDoors() {
        return this.doors;
    }

    public String getTransmission() {
        return this.transmission;
    }

    public Integer getSeats() {
        return this.seats;
    }

    public String getColor() {
        return this.color;
    }

    public String getUsername() {
        return this.username;
    }

    // Setters

    public void setTitle(String title) {
        this.title = title;
    }

    public void setMetaData(String metaData) {
        this.metaData = metaData;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public void setMileage(Integer mileage) {
        this.mileage = mileage;
    }

    public void setDoors(Integer doors) {
        this.doors = doors;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
