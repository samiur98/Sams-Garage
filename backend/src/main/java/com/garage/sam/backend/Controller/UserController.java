package com.garage.sam.backend.Controller;

import com.garage.sam.backend.Model.PasswordChange;
import com.garage.sam.backend.Model.User;
import com.garage.sam.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;
    private static final String corsOrigin = "http://localhost:3000";

    @GetMapping
    public Collection<User> getUsers() {
        return this.userService.getUsers();
    }

    @PostMapping("/getUser")
    @CrossOrigin("*")
    public User getUser(@RequestBody User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        if((username == null) || (password == null)) {
            return null;
        }
        return this.userService.getUser(username, password);
    }

    @CrossOrigin("*")
    @PostMapping("/postUser")
    public int postUser(@RequestBody User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        String email = user.getEmail();
        String phone = user.getPhone();

        if((username == null) || (password == null)) {
            return 403;
        }
        if((email == null) && (phone == null)) {
            return 403;
        }
        return this.userService.postUser(user);
    }

    @PostMapping("/updatePassword")
    public int updatePassword(@RequestBody PasswordChange passwordChange) {
        String username = passwordChange.getUsername();
        String oldPassword = passwordChange.getOldPassword();
        String newPassword = passwordChange.getNewPassword();
        if((username == null) || (oldPassword == null) || (newPassword == null)) {
            return 403;
        }
        return this.userService.updatePassword(username, oldPassword, newPassword);
    }

    @PostMapping("/updateContact")
    public int updateContact(@RequestBody User user) {

        String username = user.getUsername();
        String email = user.getEmail();
        String phone = user.getPhone();
        String preferedMethod = user.getPreferedMethod();

        if(username == null) {
            return 403;
        }
        if((email == null) && (phone == null)) {
           return 403;
        }
        if(preferedMethod == null) {
           return 403;
        }
        return this.userService.updateContact(username, email, phone, preferedMethod);
    }
}
