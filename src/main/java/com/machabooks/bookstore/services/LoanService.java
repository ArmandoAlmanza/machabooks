package com.machabooks.bookstore.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.machabooks.bookstore.models.Books;
import com.machabooks.bookstore.models.Loan;
import com.machabooks.bookstore.models.User;
import com.machabooks.bookstore.models.DTO.LoanDto;
import com.machabooks.bookstore.repositories.BookRepository;
import com.machabooks.bookstore.repositories.LoanRepository;
import com.machabooks.bookstore.repositories.UserRepository;

@Service
public class LoanService {
	@Autowired
	private LoanRepository loanRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BookRepository bookRepository;

	@Transactional(readOnly = true)
	public List<Loan> findAll() {
		return (List<Loan>) loanRepository.findAll();
	}

	@Transactional(readOnly = true)
	public ResponseEntity<?> findByUser(String email) {
		Optional<User> user = userRepository.findByEmail(email);
		if (!user.isPresent()) {
			return new ResponseEntity<>("The user wasn't found", HttpStatus.NOT_FOUND);
		}
		List<Loan> optionalLoan = loanRepository.findByUser(user.get());

		List<LoanDto> loans = optionalLoan.stream().map(singleLoan -> {
			LoanDto loanDto = new LoanDto();
			loanDto.setBook(singleLoan.getBook());
			loanDto.setUser(user.get());
			loanDto.setBorrowDate(singleLoan.getBorrowDate());
			loanDto.setDeliverDate(singleLoan.getDeliverDate());
			return loanDto;
		}).collect(Collectors.toList());

		return new ResponseEntity<>(loans, HttpStatus.OK);
	}

	public ResponseEntity<?> create(String email, String sku) {
		Optional<Books> book = bookRepository.findBySku(sku);
		Optional<User> user = userRepository.findByEmail(email);
		if (!book.isPresent()) {
			return new ResponseEntity<>("Book wasn't found", HttpStatus.NOT_FOUND);
		}
		if (!user.isPresent()) {
			return new ResponseEntity<>("The wasn't found", HttpStatus.NOT_FOUND);
		}
		if (book.get().getStock() <= 0) {
			return new ResponseEntity<>("Sorry we don't have copies of that book", HttpStatus.BAD_REQUEST);
		}
		if (user.get().getDebt() > 800) {
			return new ResponseEntity<>("The user already have a debt of " + user.get().getDebt(),
					HttpStatus.BAD_REQUEST);
		}

		Loan loan = new Loan();
		loan.setBook(book.get());
		loan.setUser(user.get());
		loanRepository.save(loan);

		book.get().setStock(book.get().getStock() - 1);

		return new ResponseEntity<>("Congrats! you can take the book with you, remember to get it back at "
				+ String.valueOf(LocalDate.now().plusDays(15)), HttpStatus.OK);
	}
}
