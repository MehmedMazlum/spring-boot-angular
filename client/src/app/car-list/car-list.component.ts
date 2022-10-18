import {Component, OnInit} from '@angular/core';
import {CarService} from '../shared/car/car.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  private cars: Array<any>;
  private page = 0;
  private pages: Array<any>;

  constructor(private carService: CarService) {
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getallCars();
  }

  ngOnInit() {
    this.getallCars();
  }

  getallCars() {
    this.carService.getAll(this.page).subscribe(
      data => {
        this.cars = data['cars'];
        this.pages = new Array(data['totalPages']);
      },
      (error) => {
        console.log('Car NotFound');
        alert('Car NotFound');
      }
    );
  }
}

