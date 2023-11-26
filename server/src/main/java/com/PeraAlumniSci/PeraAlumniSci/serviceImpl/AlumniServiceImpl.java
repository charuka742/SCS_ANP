package com.PeraAlumniSci.PeraAlumniSci.serviceImpl;

import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import com.PeraAlumniSci.PeraAlumniSci.dto.RegisterDTO;
import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.exception.ResourceNotFoundException;
import com.PeraAlumniSci.PeraAlumniSci.repository.AlumniRepository;
import com.PeraAlumniSci.PeraAlumniSci.service.AlumniService;
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

    public String passwordEncryption(String password){
        return password;
    }

    @Override
    public ResponseEntity<?> addAlumini(RegisterDTO aluminiData) {
        Map<String, Object> map=new LinkedHashMap<>();
        try{
            Alumni aluminiUser = modelMapper.map(aluminiData, Alumni.class);
            String hashedPw = passwordEncryption(aluminiUser.getPassword());
            aluminiUser.setPassword(hashedPw);
            aluminiUser.setFName(aluminiData.getFName());
            aluminiUser.setLName(aluminiData.getLName());
            if(alumniRepository.existsById(aluminiData.getRegNo())){
                if(aluminiUser.isUpdated()){
                    map.put("status", HttpStatus.UNAUTHORIZED);
                    map.put("message", "Already registered.");
                    return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
                }
                aluminiUser.setUpdated(true);
            }
            Alumni savedAlumini = alumniRepository.save(aluminiUser);
            AlumniDto savedDto= modelMapper.map(savedAlumini, new TypeToken<AlumniDto>(){}.getType());
            map.put("status", HttpStatus.OK);
            map.put("message","Alumni sved");
            map.put("data",savedDto);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        catch (Exception e){
            map.put("status", HttpStatus.BAD_REQUEST);
            map.put("message",e.getMessage());
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getAlumniDetailsByDegreeAndBach(String degree, int batch) {
        Map<String, Object> map=new LinkedHashMap<>();
        try{
            List<Alumni> list=alumniRepository.getAlumniDetailsByDegreeAndBach(degree, batch);
            if (list != null && !list.isEmpty()){
                map.put("status", HttpStatus.OK);
                map.put("message", "Alumni details found");
                map.put("data", list);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.put("status", HttpStatus.NOT_FOUND);
                map.put("message", "No alumni details found for the given degree and batch");
                return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception e){
            map.put("status", HttpStatus.BAD_REQUEST);
            map.put("message",e.getMessage());
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
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
