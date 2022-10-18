package com.developer.demo.repository;

import com.developer.demo.model.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoleRepository extends CrudRepository<Role, Long> {
            List<Role> findByName(String name);
}
