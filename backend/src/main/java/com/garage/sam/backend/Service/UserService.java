package com.garage.sam.backend.Service;

import com.garage.sam.backend.Repository.UserRepository;
import com.garage.sam.backend.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Collection<User> getUsers() {
        // Returns all users in the database.
        return this.userRepository.findAll();
    }

    public User getUser(String username, String password) {
        // Returns User based on username and password, null if no such user exists.

        User user = this.userRepository.findByUsername(username);
        if(user == null) {
            return null;
        }
        if(this.passwordEncoder.matches(password, user.getPassword())){
            return user;
        }
        return null;
    }

    public User getUserOverview(String username) {
        // Returns a user object with the password field set to null, meant to provide information about user that is not sensitive.
        User user = this.userRepository.findByUsername(username);
        if(user == null) {
            return null;
        }
        user.setPassword(null);
        return user;
    }

    public int postUser(User user) {
        // Adds user to the database.

       String username = user.getUsername();
       if(this.userRepository.findByUsername(username) != null) {
           return 400;
       }
       user.setPassword(this.passwordEncoder.encode(user.getPassword()));
       this.userRepository.save(user);
       return 201;
    }

    public int updatePassword(String username, String oldPassword, String newPassword) {
        // Updates a user's password.

        User user = this.userRepository.findByUsername(username);
        if(user == null) {
            return 404;
        }
        if(!this.passwordEncoder.matches(oldPassword, user.getPassword())) {
            return 400;
        }
        user.setPassword(this.passwordEncoder.encode(newPassword));
        this.userRepository.save(user);
        return 200;
    }

    public int updateContact(String username, String email, String phone, String preferedMethod) {
        // Updates a user's contact information.

        User user = this.userRepository.findByUsername(username);
        if(user == null) {
            return 403;
        }
        user.setEmail(email);
        user.setPhone(phone);
        user.setPreferedMethod(preferedMethod);
        this.userRepository.save(user);
        return 200;
    }
}
