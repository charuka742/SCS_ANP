package com.PeraAlumniSci.PeraAlumniSci.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "alumni")
public class Alumni {
    @Id
    private Integer alId;

    @OneToOne
    @JoinColumn(name = "regNo", referencedColumnName = "regNo")
    private Student student;

    private String work;
    private String workspace;
    private String workMail;
    private String country;
    private String isAtHigherStudies;
    private String other;

    // Getters and setters...
}