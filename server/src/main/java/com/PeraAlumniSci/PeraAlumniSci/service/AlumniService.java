package com.PeraAlumniSci.PeraAlumniSci.service;


import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import com.PeraAlumniSci.PeraAlumniSci.dto.RegisterDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface AlumniService {


    public AlumniDto updateAlumni(AlumniDto alumniDto, Integer aluId);
    public AlumniDto getAlumniById(Integer aluId);
    public List<AlumniDto> getAllAlumni();
    public void save(MultipartFile file);

    ResponseEntity<?> addAlumini(RegisterDTO aluminiData);

    ResponseEntity<?> getAlumniDetailsByDegreeAndBach(String degree, int batch);
}


