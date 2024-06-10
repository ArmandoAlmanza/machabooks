package com.machabooks.bookstore.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.machabooks.bookstore.models.Genre;

public interface GenreRepository extends CrudRepository<Genre, Long> {

	Optional<Genre> findByName(String name);
}