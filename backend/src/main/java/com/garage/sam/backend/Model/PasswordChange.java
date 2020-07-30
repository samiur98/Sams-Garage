package com.garage.sam.backend.Model;

public class PasswordChange {
    private String username;
    private String oldPassword;
    private String newPassword;
    public PasswordChange(String username, String oldPassword, String newPassword) {
        this.username = username;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }

    // Getters

    public String getUsername() {
        return this.username;
    }

    public String getOldPassword() {
        return this.oldPassword;
    }

    public String getNewPassword() {
        return this.newPassword;
    }

    // Setters

    public void setUsername(String username) {
        this.username = username;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
