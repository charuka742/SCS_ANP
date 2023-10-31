package com.PeraAlumniSci.PeraAlumniSci.service;

import com.PeraAlumniSci.PeraAlumniSci.dto.StudentDto;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface StudentService {


    StudentDto updateStudent(StudentDto student,Integer studId);
    StudentDto getStudentById(Integer Id);
    List<StudentDto> getAllStudents();

    void save(MultipartFile file);


}
