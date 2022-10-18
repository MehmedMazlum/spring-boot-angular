package com.developer.demo.controller;

import com.developer.demo.dto.Content;
import com.developer.demo.exception.CarNotAddException;
import com.developer.demo.exception.CarNotFoundException;
import com.developer.demo.model.Car;
import com.developer.demo.repository.CarRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
class CarController {
    private final CarRepository repository;

    public CarController(CarRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/login")
    public String login() {
        return "authenticated succefuly";
    }


    @GetMapping("/cars/list")
    public Content getAllCars(@RequestParam(defaultValue = "0") int page) throws CarNotFoundException {
        Page<Car> carPage = repository.findAll(new PageRequest(page, 40));
        Content content = new Content();
        content.setTotalPages(carPage.getTotalPages());
        content.setCars(carPage.get().collect(Collectors.toList()));
        return content;
    }


    @GetMapping("/cars/search/{name}")
    public Content searchByName(@PathVariable final String name) throws CarNotFoundException {
        List<Car> cars = repository.findAllByName(name);
        if (!CollectionUtils.isEmpty(cars)) {
            Content content = new Content();
            content.setCars(cars);
            return content;
        } else {
            throw new CarNotFoundException("car not found");
        }
    }

    @PostMapping("/cars/insert")
    public void insertCar(@RequestBody final Car car) throws CarNotAddException {
        try {
            if (Objects.nonNull(car) && Objects.nonNull(car.getPhoto()) && Objects.nonNull(car.getPhoto())) {
                repository.save(car);
            } else throw new CarNotAddException("car not add");
        } catch (Exception exception) {
            throw new CarNotAddException("car not add");
        }

    }

    @DeleteMapping("/cars/delete")
    public void deleteCar(@RequestBody final Car car) throws CarNotFoundException {
        try {
            if (Objects.nonNull(car.getPhoto()) && Objects.nonNull(car.getPhoto())) {
                repository.delete(car);
            } else throw new CarNotFoundException("car not found");
        } catch (Exception exception) {
            throw new CarNotFoundException("car not found");
        }
    }
}
