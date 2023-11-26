package com.PeraAlumniSci.PeraAlumniSci.service;

import com.PeraAlumniSci.PeraAlumniSci.dto.LoginRequest;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> login(LoginRequest loginData);
}
