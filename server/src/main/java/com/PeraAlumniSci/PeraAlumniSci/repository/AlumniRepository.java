package com.PeraAlumniSci.PeraAlumniSci.repository;

import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlumniRepository extends JpaRepository<Alumni, Integer> {

}
