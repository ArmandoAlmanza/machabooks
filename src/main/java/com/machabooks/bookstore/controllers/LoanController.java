package com.machabooks.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.machabooks.bookstore.models.Loan;
import com.machabooks.bookstore.services.LoanService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/loans")
public class LoanController {
	@Autowired
	private LoanService service;

	@GetMapping()
	public List<Loan> findAll() {
		return service.findAll();
	}

	@GetMapping("/{email}")
	public ResponseEntity<?> findByUser(@PathVariable String email) {
		return service.findByUser(email);
	}

	@PostMapping("/borrow/{email}/{sku}")
	public ResponseEntity<?> create(@PathVariable String email, @PathVariable String sku) {
		return service.create(email, sku);
	}

}
