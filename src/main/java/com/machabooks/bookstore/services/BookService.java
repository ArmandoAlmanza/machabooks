package com.machabooks.bookstore.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository repository;

	public List<Books> findAll() {
		return (List<Books>) repository.findAll();
	}

	public ResponseEntity<?> findBySku(String sku) {
		Optional<Books> bookDb = repository.findBySku(sku);
		if (!bookDb.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(bookDb.get());
	}
}
