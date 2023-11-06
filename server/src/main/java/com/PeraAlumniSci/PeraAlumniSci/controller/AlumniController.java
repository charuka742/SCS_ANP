package com.PeraAlumniSci.PeraAlumniSci.controller;

import com.PeraAlumniSci.PeraAlumniSci.dto.AlumniDto;
import com.PeraAlumniSci.PeraAlumniSci.entity.Alumni;
import com.PeraAlumniSci.PeraAlumniSci.service.AlumniService;
import com.PeraAlumniSci.PeraAlumniSci.utils.ExcelHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class AlumniController {

    @Autowired
    private AlumniService alumniService;

    @PostMapping("/alumni/upload")
    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file){
        if (ExcelHelper.checkExcelFormat(file)){
            //true
            this.alumniService.save(file);

            return ResponseEntity.ok(Map.of("message","File Uploaded and Saved to the DataBase."));

        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please Upload Excel File Only");
    }

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


}
