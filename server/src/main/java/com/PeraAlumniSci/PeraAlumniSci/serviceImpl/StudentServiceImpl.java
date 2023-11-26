package com.PeraAlumniSci.PeraAlumniSci.serviceImpl;

import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import com.PeraAlumniSci.PeraAlumniSci.dto.RegisterDTO;
import com.PeraAlumniSci.PeraAlumniSci.dto.StudentDto;
import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import com.PeraAlumniSci.PeraAlumniSci.exception.ResourceNotFoundException;
import com.PeraAlumniSci.PeraAlumniSci.repository.StudentRepository;
import com.PeraAlumniSci.PeraAlumniSci.service.StudentService;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    public ModelMapper modelMapper;

    public String passwordEncryption(String password){
        return password;
    }

    @Override
    public void save(MultipartFile file){
        try{

            List<Student> studentList = ExcelHelper.convertExcelToListOfStudents(file.getInputStream());
            this.studentRepository.saveAll(studentList);
        }catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public ResponseEntity<?> addStudent(RegisterDTO aluminiData) {
        Map<String, Object> map=new LinkedHashMap<>();
        try{
            Student stu = modelMapper.map(aluminiData, Student.class);
            String hashedPw = passwordEncryption(stu.getPassword());
            stu.setPassword(hashedPw);
            stu.setFName(aluminiData.getFName());
            stu.setLName(aluminiData.getLName());
            if(studentRepository.existsById(aluminiData.getRegNo())){
                if(stu.isUpdated()){
                    map.put("status", HttpStatus.UNAUTHORIZED);
                    map.put("message", "Already registered.");
                    return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
                }
                stu.setUpdated(true);
            }
            Student savedStudent = studentRepository.save(stu);
            StudentDto savedStu= modelMapper.map(savedStudent, new TypeToken<StudentDto>(){}.getType());
            map.put("status", HttpStatus.OK);
            map.put("message","Student Saved");
            map.put("data",savedStu);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        catch (Exception e){
            map.put("status", 400);
            map.put("message",e.getMessage());
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
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
