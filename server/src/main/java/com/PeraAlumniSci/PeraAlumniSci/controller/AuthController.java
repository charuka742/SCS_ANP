package com.PeraAlumniSci.PeraAlumniSci.controller;

import com.PeraAlumniSci.PeraAlumniSci.dto.LoginRequest;
import com.PeraAlumniSci.PeraAlumniSci.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginData){
        return authService.login(loginData);
    }
}
