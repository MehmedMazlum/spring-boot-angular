package com.developer.demo.repository;

import com.developer.demo.model.Car;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;


public interface CarRepository  extends PagingAndSortingRepository<Car, Long> {

    List<Car> findAllByName(final String name);

}
