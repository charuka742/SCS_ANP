package com.PeraAlumniSci.PeraAlumniSci.serviceImpl;

import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import com.PeraAlumniSci.PeraAlumniSci.dto.LoginRequest;
import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import com.PeraAlumniSci.PeraAlumniSci.repository.AlumniRepository;
import com.PeraAlumniSci.PeraAlumniSci.repository.StudentRepository;
import com.PeraAlumniSci.PeraAlumniSci.service.AuthService;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private AlumniRepository alumniRepository;
    @Autowired
    private StudentRepository studentRepository;

    public boolean passwordMatch(String enteredPassword, String storedPassword){
        if(enteredPassword.equals(storedPassword)){
            return true;
        }
        return false;
    }
    @Override
    public ResponseEntity<?> login(LoginRequest loginData) {
        Map<String, Object> map=new LinkedHashMap<>();
        try{
            Alumni alumni=alumniRepository.getAlumniByEmail(loginData.getEmail());
            if(alumni!=null && alumniRepository.existsById(alumni.getRegNo())){
                boolean isMatch = passwordMatch(loginData.getPassword(), alumni.getPassword());
                if(isMatch){
                    map.put("status", HttpStatus.OK);
                    map.put("message","Login successful");
                    map.put("role","ALUMNI");
                    map.put("data",alumni);
                    return new ResponseEntity<>(map, HttpStatus.OK);
                }
                else{
                    map.put("status", HttpStatus.UNAUTHORIZED);
                    map.put("message", "Incorrect password");
                    return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
                }
            }

            Student stu =studentRepository.getStudentByEmail(loginData.getEmail());
            if(stu !=null && studentRepository.existsById(stu.getRegNo())){
                boolean isMatch = passwordMatch(loginData.getPassword(), stu.getPassword());
                if(isMatch){
                    map.put("status", HttpStatus.OK);
                    map.put("message","Login successful");
                    map.put("role","STUDENT");
                    map.put("data",stu);
                    return new ResponseEntity<>(map, HttpStatus.OK);
                }
                else{
                    map.put("status", HttpStatus.UNAUTHORIZED);
                    map.put("message", "Incorrect password");
                    return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
                }
            }

            map.put("status", HttpStatus.NOT_FOUND);
            map.put("message","Invalid email");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        catch (Exception e){
            map.put("status", HttpStatus.BAD_REQUEST);
            map.put("message",e.getMessage());
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
    }
}
