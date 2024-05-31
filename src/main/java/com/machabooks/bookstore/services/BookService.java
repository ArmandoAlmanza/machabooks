package com.machabooks.bookstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
}
