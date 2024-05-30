package com.machabooks.bookstore.repositories;

import org.springframework.data.repository.CrudRepository;

import com.machabooks.bookstore.models.Books;

public interface BookRepository extends CrudRepository<Books, String> {
}
