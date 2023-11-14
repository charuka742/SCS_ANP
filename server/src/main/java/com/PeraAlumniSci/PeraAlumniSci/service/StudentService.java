package com.PeraAlumniSci.PeraAlumniSci.service;

import com.PeraAlumniSci.PeraAlumniSci.dto.StudentDto;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface StudentService {


    public StudentDto updateStudent(StudentDto student,Integer studId);
    public StudentDto getStudentById(Integer Id);
    public List<StudentDto> getAllStudents();
    public void save(MultipartFile file);


}
