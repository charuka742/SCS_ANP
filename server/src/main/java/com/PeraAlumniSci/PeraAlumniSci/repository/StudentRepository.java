package com.PeraAlumniSci.PeraAlumniSci.repository;

import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {


    @Query(value = "SELECT s from Student as s" + " WHERE :batch is NULL or s.batch = :batch")
    public List<Student> findStudentByBatch(@Param("batch") Integer batch);

    @Query(value = "SELECT s FROM Student as s" + " WHERE :degree is NULL or s.degree = :degree")
    public List<Student> findStudentByDegree(@Param("degree") String degree);

}
