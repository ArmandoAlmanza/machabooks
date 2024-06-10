package com.machabooks.bookstore.models.DTO;

import java.time.LocalDate;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.models.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoanDto {
	private LocalDate borrowDate;
	private LocalDate deliverDate;
	private User user;
	private Books book;
}
