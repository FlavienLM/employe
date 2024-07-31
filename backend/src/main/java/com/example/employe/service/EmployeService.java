package com.example.employe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employe.repository.EmployeRepository;

@Service
public class EmployeService {
    private EmployeRepository employeRepository;

    @Autowired
    public EmployeService(EmployeRepository employeRepository){

    }
}
