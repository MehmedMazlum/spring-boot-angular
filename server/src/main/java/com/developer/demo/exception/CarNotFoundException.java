package com.developer.demo.exception;

public class CarNotFoundException extends Exception {
    public CarNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
