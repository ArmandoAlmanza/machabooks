package com.machabooks.bookstore.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.machabooks.bookstore.models.Rol;

public interface RolRepository extends CrudRepository<Rol,Long>{

	Optional<Rol> findByName(String name);
}
