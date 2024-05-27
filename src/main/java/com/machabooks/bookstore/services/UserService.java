package com.machabooks.bookstore.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;

import com.machabooks.bookstore.models.User;
import com.machabooks.bookstore.repositories.UserRepository;

public class UserService {

	@Autowired
	private UserRepository repository;

	public List<User> findAll() {
		return (List<User>) repository.findAll();
	}

	public User findByEmail(String email) throws NotFoundException {
		Optional<User> userOptional = repository.findByEmail(email);
		if (!userOptional.isPresent()) {
			throw new NotFoundException();
		}
		return userOptional.get();
	}

	public ResponseEntity<?> create(User user) {
		return null;
	}

}
