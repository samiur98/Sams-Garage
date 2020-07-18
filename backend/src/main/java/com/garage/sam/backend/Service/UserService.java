package com.garage.sam.backend.Service;

import com.garage.sam.backend.Repository.UserRepository;
import com.garage.sam.backend.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Collection<User> getUsers() {
        return this.userRepository.findAll();
    }

    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    public int postUser(User user) {
       String username = user.getUsername();
       if(this.userRepository.findByUsername(username) != null) {
           return 403;
       }
       user.setListing(new ArrayList());
       this.userRepository.save(user);
       return 201;
    }


}
