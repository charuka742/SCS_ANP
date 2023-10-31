package com.PeraAlumniSci.PeraAlumniSci.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class StudentDto {

    private Integer regNo;
    private String fName;
    private String lName;
    private String nameInitials;
    //private String gender;
    private Integer batch;
    private String emailPersonal;
    private boolean isUpdated;
    private String contactNo;
    private String nic;

//    @Enumerated
//    private DegreeType degree;
    private boolean isOpentoWork;

    //Linkes for Accounts
    private String linkedin;
    private String github;
    private String reseachGate;
    private String fb;

}
