package com.garage.sam.backend.Controller;

import com.garage.sam.backend.Model.User;
import com.garage.sam.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public Collection<User> getUsers() {
        return this.userService.getUsers();
    }

    @PostMapping("/getUser")
    public User getUser(@RequestBody User user) {
        String username = user.getUsername();
        return this.userService.getUser(username);
    }

    @PostMapping("/postUser")
    public int postUser(@RequestBody User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        String email = user.getEmail();
        String phone = user.getPhone();
        String preferedMethod = user.getPreferedMethod();
        if((username == null) || (password == null)) {
            return 403;
        }
        if((email == null) && (phone == null)) {
            return 403;
        }
        return this.userService.postUser(user);
    }
}
