package com.PeraAlumniSci.PeraAlumniSci.service;

import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import com.PeraAlumniSci.PeraAlumniSci.repository.StudentRepository;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void save(MultipartFile file){

        try{

            List<Student> studentList = ExcelHelper.convertExcelToListOfStudents(file.getInputStream());
            this.studentRepository.saveAll(studentList);
        }catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Student> getAllStudents(){
        return this.studentRepository.findAll();
    }
}
