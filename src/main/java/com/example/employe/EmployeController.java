package com.example.employe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeController {
    

    @RequestMapping("/")
    public String bonjour(){
        return "<h1> Bonjour </h1>";
    }

    
    @RequestMapping("/get")
    @GetMapping
    public String get() {
        return "Requête get";
    }

    @RequestMapping("/post")
    @GetMapping
    public String post() {
        return "Requête post";
    }
}
