package com.example.employe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employe.model.EmployeModel;

@Repository
public interface EmployeRepository extends JpaRepository<EmployeModel, Long> {
    // You can add custom queries here if needed
    List<EmployeModel> findById(long id);

}   