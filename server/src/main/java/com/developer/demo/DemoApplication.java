package com.developer.demo;

import com.developer.demo.model.Car;
import com.developer.demo.model.Role;
import com.developer.demo.model.User;
import com.developer.demo.repository.CarRepository;
import com.developer.demo.repository.RoleRepository;
import com.developer.demo.repository.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@SpringBootApplication
public class DemoApplication {
    private static final String COMMA_DELIMITER = ",";

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }


    @Bean
    ApplicationRunner init(CarRepository repository, RoleRepository roleRepository, UserRepository userRepository) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        List<Car> cars = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader("src/main/resources/cities.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                Car car = new Car();
                String[] values = line.split(COMMA_DELIMITER);
                car.setName(values[1]);
                String str = values[2];
                car.setPhoto(str);
                cars.add(car);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        Role role_edit = new Role("ROLE_EDIT");
        Role role_read = new Role("ROLE_READ");
        Role role_admin = new Role("ROLE_ADMIN");

        User user_read = new User("john",bCryptPasswordEncoder.encode("1"),true);
        Set<Role> roleSet_read = new HashSet<>();
        roleSet_read.add(role_read);
        user_read.setRoles(roleSet_read);

        User user_admin = new User("sarah",bCryptPasswordEncoder.encode("1"),true);
        Set<Role> roleSet_admin = new HashSet<>();
        roleSet_admin.add(role_admin);
        user_admin.setRoles(roleSet_admin);

        User user_edit = new User("mami",bCryptPasswordEncoder.encode("1"),true);
        Set<Role> roleSet_edit = new HashSet<>();
        roleSet_edit.add(role_edit);
        user_edit.setRoles(roleSet_edit);

        List<User> users = new ArrayList<>();
        users.add(user_read);users.add(user_admin);users.add(user_edit);
        userRepository.saveAll(users);


        return args -> repository.saveAll(cars);
    }
}
