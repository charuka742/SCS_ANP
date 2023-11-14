package com.PeraAlumniSci.PeraAlumniSci.serviceImpl;

import com.PeraAlumniSci.PeraAlumniSci.dto.StudentDto;
import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import com.PeraAlumniSci.PeraAlumniSci.exception.ResourceNotFoundException;
import com.PeraAlumniSci.PeraAlumniSci.repository.StudentRepository;
import com.PeraAlumniSci.PeraAlumniSci.service.StudentService;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    public ModelMapper modelMapper;

    //save method for excel data importing
    @Override
    public void save(MultipartFile file){
        try{

            List<Student> studentList = ExcelHelper.convertExcelToListOfStudents(file.getInputStream());
            this.studentRepository.saveAll(studentList);
        }catch (IOException e) {
            e.printStackTrace();
        }
    }

    //Get All Students method
    @Override
    public List<StudentDto> getAllStudents(){
        List<Student> students = this.studentRepository.findAll();

        List<StudentDto> studentDtos = students.stream().map(student -> this.studentToDto(student)).collect(Collectors.toList());
        return studentDtos;

    }

    //Get Students by ID method
    @Override
    public StudentDto getStudentById(Integer id) {
        Student stud = this.studentRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Student", "Id", id));
        return this.studentToDto(stud);
    }

    //Update Student method
    @Override
    public StudentDto updateStudent(StudentDto student,Integer studId){
        Student stud = this.studentRepository.findById(studId).orElseThrow(()-> new ResourceNotFoundException("Student", "Id", studId));

        stud.setEmailPersonal(student.getEmailPersonal());
        stud.setFb(student.getContactNo());
        stud.setGithub(student.getGithub());
        stud.setLinkedin(student.getLinkedin());
        stud.setReseachGate(student.getReseachGate());
        stud.setOpentoWork(student.isOpentoWork());

        Student updatedStudent = this.studentRepository.save(stud);
        StudentDto studDto = this.studentToDto(updatedStudent);
        return studDto;
    }

    //model mapper methods
    public Student dtoToStudent(StudentDto studentdto){
        Student stud = this.modelMapper.map(studentdto, Student.class);
        return stud;
    }
    public StudentDto studentToDto(Student student){
        StudentDto studDto = this.modelMapper.map(student, StudentDto.class);
        return studDto;
    }
}
