package com.machabooks.bookstore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.models.Genre;
import com.machabooks.bookstore.models.User;
import com.machabooks.bookstore.repositories.BookRepository;
import com.machabooks.bookstore.repositories.GenreRepository;
import com.machabooks.bookstore.repositories.UserRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository repository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private GenreRepository genreRepository;

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

	public ResponseEntity<?> findByAuthor(String email) {
		Optional<User> author = userRepository.findByEmail(email);
		if (!author.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		Optional<Books> book = repository.findByAuthor(author.get());

		if (!book.isPresent()) {
			return new ResponseEntity<>("Sorry We don't have any book from that author", HttpStatus.NOT_FOUND);
		}

		return ResponseEntity.ok().body(book.get());
	}

	public ResponseEntity<?> create(Books book) {
		Optional<Genre> currentGenre = genreRepository.findByName(book.getGenres());
		List<Genre> genres = new ArrayList<>();

		currentGenre.ifPresent(genres::add);
		return new ResponseEntity<>("Book added succesfully", HttpStatus.CREATED);
	}
}
