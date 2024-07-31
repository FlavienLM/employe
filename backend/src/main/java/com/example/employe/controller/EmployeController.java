package com.example.employe.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.employe.model.EmployeModel;
import com.example.employe.repository.EmployeRepository;

import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class EmployeController {
    @Autowired
    private EmployeRepository employeRepository;


    @GetMapping("/employe/{id}")
    public EmployeModel getEmployes (@PathVariable Long id) {
        return this.employeRepository.findById(id).orElse(null);
    }

    @GetMapping("/employe")
    public List<EmployeModel> getEmployeById () {
        return this.employeRepository.findAll();
    }

    @PostMapping("/employe")
    public EmployeModel newEmploye (@RequestBody EmployeModel employeInfo) {
        return this.employeRepository.save(employeInfo);
    }


    @SuppressWarnings("null")
    @PutMapping("/employe/{id}")
    public void updateEmploye(@PathVariable Long id, @RequestBody EmployeModel employeInfo){
        EmployeModel employe = this.employeRepository.findById(id).orElse(null);
        if(employe != null){
            employe.setEmail(employeInfo.getEmail());
            employe.setNom(employeInfo.getNom());
            employe.setPrenom(employeInfo.getPrenom());
        }
        this.employeRepository.save(employe);
    }

    @DeleteMapping("/employe/{id}")
    public void deleteEmploye(@PathVariable Long id) {
        employeRepository.deleteById(id);
    }
    
}
