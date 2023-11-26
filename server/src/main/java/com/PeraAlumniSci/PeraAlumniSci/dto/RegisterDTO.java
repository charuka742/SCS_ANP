package com.PeraAlumniSci.PeraAlumniSci.dto;

import lombok.Data;

@Data
public class RegisterDTO {
    private Integer regNo;
    private String fName;
    private String lName;
    private String emailPersonal;
    private String contactNo;
    private String password;
}
