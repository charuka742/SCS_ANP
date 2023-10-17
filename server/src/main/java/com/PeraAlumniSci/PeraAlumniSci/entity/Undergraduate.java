package com.PeraAlumniSci.PeraAlumniSci.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "undergraduate")
public class Undergraduate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer unId;

    @OneToOne
    @JoinColumn(name = "regNo", referencedColumnName = "regNo")
    private Student student;

    private String sciMail;
    private boolean isOpenToWork;

}
