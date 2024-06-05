package com.machabooks.bookstore.models.DTO;

import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookDto {
	private String title;
	private LocalDate pubDate;
	private Integer stock;
	private String email;
	private List<String> genres;
}
