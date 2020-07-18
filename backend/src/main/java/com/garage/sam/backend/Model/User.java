package com.garage.sam.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;
    private String phone;
    private String preferedMethod;
    private List listing;

    public User(String username, String password, String email,
                String phone, String preferedMethod) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.preferedMethod = preferedMethod;
    }

    // Getters

    public String getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPhone() {
        return this.phone;
    }

    public String getPreferedMethod() {
        return this.preferedMethod;
    }

    public List getListing() {
        return this.listing;
    }

    // Setters

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setPreferedMethod(String preferedMethod) {
        this.preferedMethod = preferedMethod;
    }

    public void setListing(List listing) {
        this.listing = listing;
    }
}
