package com.PeraAlumniSci.PeraAlumniSci.controller;

import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import com.PeraAlumniSci.PeraAlumniSci.dto.RegisterDTO;
import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.repository.AlumniRepository;
import com.PeraAlumniSci.PeraAlumniSci.service.AlumniService;
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
@RequestMapping("/api/v1")
public class AlumniController {

    @Autowired
    private AlumniService alumniService;

    @Autowired
    private AlumniRepository alumniRepository;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/alumni/upload")
    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file){
        if (ExcelHelper.checkExcelFormat(file)){
            //true
            this.alumniService.save(file);

            return ResponseEntity.ok(Map.of("message","File Uploaded and Saved to the DataBase."));

        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please Upload Excel File Only");
    }

//    not working
    @PutMapping("/alumni/{alumId}")
    public ResponseEntity<AlumniDto> updateAlumi(@RequestBody AlumniDto alumniDto, @PathVariable Integer alumId){
        AlumniDto updatedAlumni = this.alumniService.updateAlumni(alumniDto, alumId);
        return ResponseEntity.ok(updatedAlumni);
    }

    @GetMapping("/alumnis")
    public  ResponseEntity<List<AlumniDto>> getAllAlumni(){
        return ResponseEntity.ok(this.alumniService.getAllAlumni());
    }

    @GetMapping("/alumni/{alumId}")
    public ResponseEntity<AlumniDto> getAlumniById(@PathVariable Integer alumId){
        return ResponseEntity.ok(this.alumniService.getAlumniById(alumId));
    }


    //need to modify this so that it returns the dto & as well as it prop should be given as the path variable.
    @GetMapping("/alumniByBatch")
    public ResponseEntity<?> getAlumniByBatch(@RequestParam(value = "batch", required = false) Integer batch){
        List<Alumni> alumniList = alumniRepository.findAlumniByBatch(batch);

        List<AlumniDto> alumniDtoList = alumniList.stream()
                .map(alumni -> modelMapper.map(alumni, AlumniDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<>(alumniDtoList,HttpStatus.OK);
    }

    @GetMapping("/alumniByDegree")
    public ResponseEntity<?> getAlumniByDegree(@RequestParam(value = "degree", required = false) String degree){
        List<Alumni> alumniList = alumniRepository.findAlumniByDegree(degree);

        List<AlumniDto> alumniDtoList = alumniList.stream()
                .map(alumni -> modelMapper.map(alumni, AlumniDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<>(alumniDtoList,HttpStatus.OK);
    }

    @PostMapping("/add-alumini")
    public ResponseEntity<?> addAlumini(@RequestBody RegisterDTO aluminiData){
        return alumniService.addAlumini(aluminiData);
    }

    @GetMapping("/get-alumni-details-degree-batch/{degree}/{batch}")
    public ResponseEntity<?> getAlumniDetailsByDegreeAndBach(@PathVariable String degree, @PathVariable int batch){
        return alumniService.getAlumniDetailsByDegreeAndBach(degree, batch);
    }



}
