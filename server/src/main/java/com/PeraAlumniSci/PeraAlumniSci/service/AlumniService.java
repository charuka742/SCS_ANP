package com.PeraAlumniSci.PeraAlumniSci.service;


import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface AlumniService {


    AlumniDto updateAlumni(AlumniDto alumniDto, Integer aluId);
    AlumniDto getAlumniById(Integer aluId);
    List<AlumniDto> getAllAlumni();
    void save(MultipartFile file);
}


