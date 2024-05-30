package com.machabooks.bookstore.models;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "books")
public class Books {
	@NotBlank
	@Size(min = 30, max = 40)
	@Id
	private String sku;

	@NotBlank
	@Size(max = 250)
	@Column(name = "title")
	private String title;

	@Column(name = "publication_date")
	private LocalDate pubDate;

	@Column(name = "stock")
	private Integer stock;

	@ManyToMany
	@JoinTable(name = "book_genre", joinColumns = @JoinColumn(name = "book_sku"), inverseJoinColumns = @JoinColumn(name = "genre_id"))
	private List<Genre> genres;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "author")
	@JsonBackReference
	private User author;

	@PrePersist
	public void prePersist() {
		stock = 0;
		pubDate = LocalDate.now();
	}

}
