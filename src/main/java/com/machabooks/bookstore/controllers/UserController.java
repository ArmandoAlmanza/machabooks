package com.machabooks.bookstore.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.machabooks.bookstore.models.User;
import com.machabooks.bookstore.services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping()
	public List<User> userList() {
		return service.findAll();
	}

	@PostMapping()
	public ResponseEntity<?> create(@RequestBody User user) {
		return service.create(user);
	}

	@PutMapping("/{email}")
	public ResponseEntity<?> updateUser(@PathVariable String email, @RequestBody User user) {
		return service.update(email, user);
	}

	@PutMapping("/{email}/author")
	public ResponseEntity<?> addAuthor(@PathVariable String email) {
		return service.addAuthor(email);
	}

	@DeleteMapping("/{email}")
	public ResponseEntity<?> delete(@PathVariable String email) {
		return service.delete(email);
	}

}
