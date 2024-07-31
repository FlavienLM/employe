package com.example.employe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.example.employe.repository")
@EntityScan("com.example.employe.model")
public class EmployeApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeApplication.class, args);
	}

}

