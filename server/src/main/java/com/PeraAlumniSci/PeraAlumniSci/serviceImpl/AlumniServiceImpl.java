package com.PeraAlumniSci.PeraAlumniSci.serviceImpl;

import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.exception.ResourceNotFoundException;
import com.PeraAlumniSci.PeraAlumniSci.repository.AlumniRepository;
import com.PeraAlumniSci.PeraAlumniSci.service.AlumniService;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlumniServiceImpl implements AlumniService {

    @Autowired
    private AlumniRepository alumniRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void save(MultipartFile file){
        try{
            List<Alumni> alumniList = ExcelHelper.convertExcelToListOfAlumnis(file.getInputStream());
            this.alumniRepository.saveAll(alumniList);

        }catch(IOException e){
            e.printStackTrace();
        }
    }

    //get All Alumnis
    @Override
    public List<AlumniDto> getAllAlumni(){
        List<Alumni> alumnis = this.alumniRepository.findAll();
        List<AlumniDto> alumniDtos = alumnis.stream().map(alumni -> this.alumniToDto(alumni)).collect(Collectors.toList());
        return alumniDtos;
    }

    //Get Students by ID method
    @Override
    public AlumniDto getAlumniById(Integer id) {
        Alumni alum = this.alumniRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Alumni", "Id", id));

        return this.alumniToDto(alum);

    }

    //Update Alumni method
    @Override
    public AlumniDto updateAlumni(AlumniDto alumni,Integer alumId){
        Alumni alum = this.alumniRepository.findById(alumId).orElseThrow(()-> new ResourceNotFoundException("Alumni", "Id", alumId));

        alum.setEmailPersonal(alumni.getEmailPersonal());
        alum.setFb(alumni.getContactNo());
        alum.setGithub(alumni.getGithub());
        alum.setLinkedin(alumni.getLinkedin());
        alum.setReseachGate(alumni.getReseachGate());
        alum.setAtHigherStudies(alumni.isAtHigherStudies());
        alum.setCurrentCountry(alumni.getCurrentCountry());

        Alumni updatedAlumni = this.alumniRepository.save(alum);
        AlumniDto alumDto = this.alumniToDto(updatedAlumni);
        return alumDto;

    }

    //model mapper methods
    public Alumni dtoToAlumni(AlumniDto alumniDto){
        Alumni alum = this.modelMapper.map(alumniDto, Alumni.class);
        return alum;
    }
    public AlumniDto alumniToDto(Alumni alumni){
        AlumniDto alumniDto = this.modelMapper.map(alumni, AlumniDto.class);
        return alumniDto;
    }
}
