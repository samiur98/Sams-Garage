package com.garage.sam.backend.Model;

public class MetaData {
    private String year;
    private String make;
    private String model;

    public MetaData(Integer String, String make, String model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }

    // Getters

    public String getYear() {
        return this.year;
    }

    public String getMake() {
        return this.make;
    }

    public String getModel() {
        return this.model;
    }

    // Setters

    public void setYear(String year) {
        this.year = year;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
