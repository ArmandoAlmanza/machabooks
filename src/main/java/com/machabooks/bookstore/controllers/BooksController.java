package com.machabooks.bookstore.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.services.BookService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/books")
public class BooksController {
	@Autowired
	private BookService service;

	@GetMapping()
	public List<Books> getAll() {
		return service.findAll();
	}

	@GetMapping("/{sku}")
	public ResponseEntity<?> findBySku(@PathVariable String sku) {
		return service.findBySku(sku);
	}

	@GetMapping("/author/{email}")
	public ResponseEntity<?> findByAuthor(@PathVariable String email) {
		return service.findByAuthor(email);
	}

}
