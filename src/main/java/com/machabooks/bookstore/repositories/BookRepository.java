package com.machabooks.bookstore.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.models.User;

public interface BookRepository extends CrudRepository<Books, String> {
	public Optional<Books> findBySku(String sku);

	public Optional<Books> findByAuthor(User author);
}
