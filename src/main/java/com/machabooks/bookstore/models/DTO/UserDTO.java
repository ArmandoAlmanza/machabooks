package com.machabooks.bookstore.models.DTO;

import java.util.List;

import com.machabooks.bookstore.models.Rol;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDTO {
	private String name;
	private String email;
	private Double debt;
	private List<Rol> rol;
}
