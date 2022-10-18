import {Component, OnInit} from '@angular/core';
import {CarService} from '../shared/car/car.service';


@Component({
  selector: 'app-search-list',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  private cars: Array<any>;
  private page;
  private pages: Array<any>;
  name = '';
  private emptyMessage: boolean;

  constructor(private carService: CarService) {
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getCarByName(name);
  }

  ngOnInit() {
    // this.getCarByName(name);
  }

  getCarByName(name) {
    // @ts-ignore
    this.carService.get(this.name).subscribe(
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

