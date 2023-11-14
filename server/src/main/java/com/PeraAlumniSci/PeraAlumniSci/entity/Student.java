package com.PeraAlumniSci.PeraAlumniSci.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "student")
public class Student {

    @Id
    private Integer regNo;
    private String fName;
    private String lName;
    private String nameInitials;
    private String gender;
    private Integer batch;
    private String emailPersonal;
    private boolean isUpdated;
    private String contactNo;
    private String nic;

    private String degree; //CS, DS, Stat
    private boolean isOpentoWork;

    //Linkes for Accounts
    private String linkedin;
    private String github;
    private String reseachGate;
    private String fb;



}
