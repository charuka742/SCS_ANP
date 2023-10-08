package com.PeraAlumniSci.PeraAlumniSci.controller;

import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import com.PeraAlumniSci.PeraAlumniSci.service.StudentService;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/student/upload")
    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file){
        if (ExcelHelper.checkExcelFormat(file)){
            //true
            this.studentService.save(file);

            return ResponseEntity.ok(Map.of("message","File Uploaded and Saved to the DataBase."));

        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please Upload Excel File Only");
    }

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return this.studentService.getAllStudents();
    }


}
