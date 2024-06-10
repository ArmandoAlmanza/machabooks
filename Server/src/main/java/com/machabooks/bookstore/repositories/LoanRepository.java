package com.machabooks.bookstore.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.machabooks.bookstore.models.Loan;
import com.machabooks.bookstore.models.User;

public interface LoanRepository extends CrudRepository<Loan, Long> {
	public List<Loan> findByUser(User user);
}
