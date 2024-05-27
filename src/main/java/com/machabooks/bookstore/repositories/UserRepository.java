package com.machabooks.bookstore.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.machabooks.bookstore.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
	Optional<User> findByEmail(String email);
}
