package com.machabooks.bookstore.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.models.DTO.BookDto;
import com.machabooks.bookstore.services.BookService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

	@PostMapping()
	public ResponseEntity<?> create(@RequestBody BookDto book, @PathVariable MultipartFile file) {
		return service.create(book, file);
	}

	@PostMapping("/{sku}/cover")
	public ResponseEntity<?> addCover(@PathVariable String sku, @PathVariable MultipartFile file) {
		return service.addCover(sku, file);
	}

}
