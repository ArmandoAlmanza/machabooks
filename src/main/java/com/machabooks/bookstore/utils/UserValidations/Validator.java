package com.machabooks.bookstore.utils.UserValidations;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

public class Validator {
	public ResponseEntity<?> validation(BindingResult result) {
		Map<String, String> errors = new HashMap<>();
		result.getFieldErrors()
				.forEach(error -> errors.put(error.getField(),
						"Field " + error.getField() + " " + error.getDefaultMessage()));
		return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
	}
}