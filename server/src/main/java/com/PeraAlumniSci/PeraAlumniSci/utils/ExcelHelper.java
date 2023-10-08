package com.PeraAlumniSci.PeraAlumniSci.utils;

import com.PeraAlumniSci.PeraAlumniSci.entity.Student;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ExcelHelper {

    //check the file whether it is excel type
    public static boolean checkExcelFormat(MultipartFile file) {
        String contentType = file.getContentType();


        return contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }

    public static List<Student> convertExcelToListOfStudents(InputStream is)  {

        List<Student> studentList = new ArrayList<>();

        try {
            XSSFWorkbook workboot = new XSSFWorkbook(is);
            XSSFSheet sheet = workboot.getSheet("data17");

            int rowNumber = 0;

            Iterator<Row> iterator = sheet.iterator();

            while (iterator.hasNext()) {

                Row row = iterator.next();
                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }

                Iterator<Cell> cells = row.iterator();
                int cid = 0;

                Student s = new Student();

                while (cells.hasNext()) {
                    Cell cell = cells.next();

                    switch (cell.getCellType()) {
                        case STRING:
                            switch (cid) {
                                case 1:
                                    s.setFName((String) cell.getStringCellValue());
                                    break;
                                case 2:
                                    s.setLName((String) cell.getStringCellValue());
                                    break;
                                case 3:
                                    s.setNameInitials((String) cell.getStringCellValue());
                                    break;
                                case 4:
                                    s.setGender((String) cell.getStringCellValue());
                                    break;
                                //case 05
                                case 6:
                                    s.setEmailPersonal((String) cell.getStringCellValue());
                                    break;
                                //case 07
                                case 8:
                                    s.setContactNo((String) cell.getStringCellValue());
                                    break;
                                case 9:
                                    s.setNic((String) cell.getStringCellValue());
                                    break;
                                case 10:
                                    s.setLinkedin((String) cell.getStringCellValue());
                                    break;
                                case 11:
                                    s.setGithub((String) cell.getStringCellValue());
                                    break;
                                case 12:
                                    s.setReseachGate((String) cell.getStringCellValue());
                                    break;
                                case 13:
                                    s.setFb((String) cell.getStringCellValue());
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case NUMERIC:
                            if (cid == 0) {
                                s.setRegNo((int) cell.getNumericCellValue());
                            } else if (cid == 7) {
                                s.setUpdated(cell.getBooleanCellValue());
                            }else if (cid == 5){
                                s.setBatch((int) cell.getNumericCellValue());
                            }
                            break;

                        default:
                            break;
                    }
                    cid++;
                }
                studentList.add(s);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return studentList;
    }
}