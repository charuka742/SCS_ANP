package com.PeraAlumniSci.PeraAlumniSci.controller;

import com.PeraAlumniSci.PeraAlumniSci.dto.StudentDto;
import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import com.PeraAlumniSci.PeraAlumniSci.repository.StudentRepository;
import com.PeraAlumniSci.PeraAlumniSci.service.StudentService;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/student/upload")
    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file){
        if (ExcelHelper.checkExcelFormat(file)){
            //true
            this.studentService.save(file);

            return ResponseEntity.ok(Map.of("message","File Uploaded and Saved to the DataBase."));

        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please Upload Excel File Only");
    }

    @PutMapping("/student/{studId}")
    public ResponseEntity<StudentDto> updateStudent(@RequestBody StudentDto studDto,@PathVariable Integer studId){
        StudentDto updatedStudent = this.studentService.updateStudent(studDto, studId);
        return ResponseEntity.ok(updatedStudent);
    }

    @GetMapping("/students")
    public ResponseEntity<List<StudentDto>> getAllStudents(){
        return ResponseEntity.ok(this.studentService.getAllStudents());
    }
    @GetMapping("/students/{studId}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable Integer studId){
        return ResponseEntity.ok(this.studentService.getStudentById(studId));
    }


    @GetMapping("/studentByBatch")
    public ResponseEntity<?> getStudentByBatch(@RequestParam(value = "batch", required = false) Integer batch){
        List<Student> studentList = studentRepository.findStudentByBatch(batch);

        List<StudentDto> studentDtoList = studentList.stream()
                .map(student -> modelMapper.map(student, StudentDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<>(studentDtoList,HttpStatus.OK);
    }

    @GetMapping("/studentByDegree")
    public ResponseEntity<?> getStudentByDegree(@RequestParam(value = "degree", required = false) String degree){
        List<Student> studentList = studentRepository.findStudentByDegree(degree);

        List<StudentDto> studentDtoList = studentList.stream()
                .map(student -> modelMapper.map(student, StudentDto.class))
                .collect(Collectors.toList());
        return new ResponseEntity<>(studentDtoList,HttpStatus.OK);
    }


}
