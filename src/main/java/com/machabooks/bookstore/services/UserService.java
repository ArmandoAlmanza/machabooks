package com.machabooks.bookstore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.machabooks.bookstore.models.Rol;
import com.machabooks.bookstore.models.User;
import com.machabooks.bookstore.repositories.RolRepository;
import com.machabooks.bookstore.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private RolRepository rolRepository;

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
		Optional<Rol> rol = rolRepository.findByName("USER");
		List<Rol> roles = new ArrayList<>();

		rol.ifPresent(roles::add);

		user.setRoles(roles);

		repository.save(user);
		return ResponseEntity.ok().body("Created");
	}

}
