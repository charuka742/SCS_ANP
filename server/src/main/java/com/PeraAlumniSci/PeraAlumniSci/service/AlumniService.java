package com.PeraAlumniSci.PeraAlumniSci.service;

import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.repository.AlumniRepository;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class AlumniService {

    @Autowired
    private AlumniRepository alumniRepository;

    public void save(MultipartFile file){

        try{

            List<Alumni> alumniList = ExcelHelper.convertExcelToListOfAlumnis(file.getInputStream());
            this.alumniRepository.saveAll(alumniList);
        }catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Alumni> getAllAlumnis(){
        return this.alumniRepository.findAll();
    }
}
