package com.PeraAlumniSci.PeraAlumniSci.repository;

import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlumniRepository extends JpaRepository<Alumni, Integer> {

    @Query(value = "SELECT a FROM Alumni as a" + " WHERE :batch is NULL or a.batch = :batch")
    public  List<Alumni> findAlumniByBatch(@Param("batch") Integer batch);

    @Query(value = "SELECT a FROM Alumni as a" + " WHERE :degree is NULL or a.degree = :degree")
    public List<Alumni> findAlumniByDegree(@Param("degree") String degree);
}
