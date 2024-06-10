package com.machabooks.bookstore.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "users")
public class User {
	@NotNull
	@Id
	private Long id;

	@NotBlank
	@Size(min = 3, max = 30)
	@Column(name = "first_name")
	private String firstName;

	@NotBlank
	@Size(min = 3, max = 30)
	@Column(name = "last_name")
	private String lastName;

	@NotBlank
	@Email(regexp = "^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+.(com|mx)$")
	@Column(name = "email")
	private String email;

	@NotBlank
	@Size(min = 3, max = 30)
	@Column(name = "password")
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

	@Column(name = "debt")
	private Double debt;

	@Transient
	@JsonProperty(access = Access.WRITE_ONLY)
	private Boolean admin;

	@ManyToMany
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"), uniqueConstraints = {
			@UniqueConstraint(columnNames = { "user_id", "role_id" }) })
	private List<Rol> roles;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "author", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<Books> bookList;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference
	private List<Loan> loans;

	@PrePersist
	public void prePersist() {
		debt = 0.0;
		admin = false;
	}
}
