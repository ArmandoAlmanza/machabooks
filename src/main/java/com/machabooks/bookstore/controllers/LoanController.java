package com.machabooks.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.machabooks.bookstore.models.Loan;
import com.machabooks.bookstore.repositories.LoanRepository;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/loans")
public class LoanController {
	@Autowired
	private LoanRepository repository;

	@GetMapping()
	public List<Loan> findAll() {
		return (List<Loan>) repository.findAll();
	}

}
