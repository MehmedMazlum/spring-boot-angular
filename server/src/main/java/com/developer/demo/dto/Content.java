package com.developer.demo.dto;

import com.developer.demo.model.Car;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Content {

    List<Car> cars = new ArrayList<>();
    int totalPages;


}
