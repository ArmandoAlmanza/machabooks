package com.machabooks.bookstore.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.services.BookService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/books")
public class BooksController {
	@Autowired
	private BookService service;

	@GetMapping()
	public List<Books> getAll() {
		return service.findAll();
	}

}
