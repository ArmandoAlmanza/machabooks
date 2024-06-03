package com.machabooks.bookstore.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "loans")
public class Loan {
	@Id
	private Long id;

	@Column(name = "start_date")
	private LocalDate borrowDate;

	@Column(name = "end_date")
	private LocalDate deliverDate;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	@JsonBackReference
	private User user;

	@ManyToOne
	@JoinColumn(name = "book_sku", nullable = false)
	@JsonBackReference
	private Books book;

	@PrePersist
	public void prePersist() {
		borrowDate = LocalDate.now();
		deliverDate = LocalDate.now().plusDays(15);
	}

}
