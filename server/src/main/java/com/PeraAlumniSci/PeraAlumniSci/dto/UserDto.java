package com.PeraAlumniSci.PeraAlumniSci.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto
{
        private int userid;
        private String userename;
        private String email;
        private String password;
}