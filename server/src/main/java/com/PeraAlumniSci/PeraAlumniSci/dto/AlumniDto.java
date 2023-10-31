package com.PeraAlumniSci.PeraAlumniSci.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AlumniDto {

    private Integer regNo;
    private String fName;
    private String lName;
    private String nameInitials;
//    private String gender;
    private Integer batch;
    private String emailPersonal;
    private boolean isProfileUpdated;
    private String contactNo;
    private String nic;

    //modified
    private String currentCountry;
    private boolean isAtHigherStudies;
    //@Enumerated
    //private DegreeType degree;


    //Linkes for Accounts
    private String linkedin;
    private String github;
    private String reseachGate;
    private String fb;

}
