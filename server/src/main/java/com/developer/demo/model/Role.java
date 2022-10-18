package com.developer.demo.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "roles")
@Data
@Getter
@Setter
@NoArgsConstructor
public class Role {
    @Id @GeneratedValue
    private Integer id;

    private String name;
    public Integer getId() {
        return id;
    }

    public Role(String name) {
        this.name = name;
    }
// remaining getters and setters
}
