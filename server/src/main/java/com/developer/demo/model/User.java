package com.developer.demo.model;

import com.developer.demo.model.Role;
import lombok.*;

import java.util.*;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id @GeneratedValue
    private Long id;

    private String username;
    private String password;
    private boolean enabled;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    public Long getId() {
        return id;
    }

    public User(String username, String password, boolean enabled) {
        this.username = username;
        this.password = password;
        this.enabled = enabled;
    }

// remaining getters and setters are not shown for brevity
}
