package com.developer.demo.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "cars")
public class Car {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
    @Column(name = "photo", unique = false, nullable = false, length = 100000)
    private String photo;
}
