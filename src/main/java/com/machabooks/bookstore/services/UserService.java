package com.machabooks.bookstore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
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

		Optional<User> userEmail = repository.findByEmail(user.getEmail());
		Optional<User> userId = repository.findById(user.getId());

		if (userEmail.isPresent() || userId.isPresent()) {
			return new ResponseEntity<>("The user with this id and email already exists", HttpStatus.BAD_REQUEST);
		}

		rol.ifPresent(roles::add);

		user.setRoles(roles);

		repository.save(user);
		return ResponseEntity.ok().body("Created");
	}

	public ResponseEntity<?> addAuthor(String email) {
		Optional<User> userDB = repository.findByEmail(email);

		if (!userDB.isPresent()) {
			return new ResponseEntity<>("User not founded", HttpStatus.NOT_FOUND);
		}
		User userUpdated = userDB.get();

		List<Rol> currentUserRoles = userUpdated.getRoles();
		currentUserRoles.add(rolRepository.findByName("AUTHOR").get());

		userUpdated.setRoles(currentUserRoles);

		repository.save(userUpdated);

		return ResponseEntity.ok().body("Author added");
	}

	public ResponseEntity<?> update(String email, User user) {
		Optional<User> userDB = repository.findByEmail(email);
		if (!userDB.isPresent()) {
			return new ResponseEntity<>("User not founded", HttpStatus.NOT_FOUND);
		}
		User userUpdated = userDB.get();

		userUpdated.setId(user.getId());
		userUpdated.setFirstName(user.getFirstName());
		userUpdated.setLastName(user.getLastName());
		userUpdated.setId(user.getId());
		userUpdated.setPassword(user.getPassword());

		repository.save(userUpdated);
		return new ResponseEntity<>("User Updated " + userUpdated, HttpStatus.CREATED);
	}

	public ResponseEntity<?> delete(String email) {
		Optional<User> userDB = repository.findByEmail(email);
		if (!userDB.isPresent()) {
			return new ResponseEntity<>("User not founded", HttpStatus.NOT_FOUND);
		}
		repository.delete(userDB.get());
		return ResponseEntity.ok().body("User deleted succesfully");
	}

}
