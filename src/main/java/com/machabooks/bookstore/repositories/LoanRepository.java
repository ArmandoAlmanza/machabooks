package com.machabooks.bookstore.repositories;

import org.springframework.data.repository.CrudRepository;

import com.machabooks.bookstore.models.Loan;

public interface LoanRepository extends CrudRepository<Loan, Long> {

}
