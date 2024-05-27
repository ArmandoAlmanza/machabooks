package com.machabooks.bookstore.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping(value = { "/", "/home" })
public class AppController {

	@GetMapping("")
	public String greetings() {
		// TODO: add all the routes
		return "Welcome to Machabooks, you can use one of these routes \n/books";
	}

}
