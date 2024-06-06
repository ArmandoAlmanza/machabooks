package com.machabooks.bookstore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.machabooks.bookstore.models.Rol;
import com.machabooks.bookstore.models.User;
import com.machabooks.bookstore.models.DTO.UserDTO;
import com.machabooks.bookstore.repositories.RolRepository;
import com.machabooks.bookstore.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private RolRepository rolRepository;

	@Transactional(readOnly = true)
	public List<User> findAll() {
		return (List<User>) repository.findAll();
	}

	@Transactional(readOnly = true)
	public List<UserDTO> findAllDto() {
		List<User> users = (List<User>) repository.findAll();
		List<UserDTO> userDTOs = users.stream().map(
				user -> {
					UserDTO userDTO = new UserDTO();
					userDTO.setEmail(user.getEmail());
					userDTO.setName(user.getFirstName() + " " + user.getLastName());
					userDTO.setDebt(user.getDebt());
					userDTO.setRol(user.getRoles());
					return userDTO;
				}).collect(Collectors.toList());
		return userDTOs;
	}

	@Transactional(readOnly = true)
	public ResponseEntity<?> findByEmail(String email) {
		Optional<User> userOptional = repository.findByEmail(email);
		UserDTO userDTO = new UserDTO();
		if (!userOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		userDTO.setEmail(email);
		userDTO.setName(userOptional.get().getFirstName() + " " + userOptional.get().getLastName());
		userDTO.setDebt(userOptional.get().getDebt());
		userDTO.setRol(userOptional.get().getRoles());
		return new ResponseEntity<>(userDTO, HttpStatus.OK);
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
