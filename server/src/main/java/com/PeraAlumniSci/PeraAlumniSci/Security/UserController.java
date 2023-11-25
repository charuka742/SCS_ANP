package com.PeraAlumniSci.PeraAlumniSci.Security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {

    @GetMapping("/welcome")
    public String greeting() {
        return "welcome";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
}
