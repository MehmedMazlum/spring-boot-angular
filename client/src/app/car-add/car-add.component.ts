import {Component, OnInit} from '@angular/core';
import {CarService} from '../shared/car/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../car';


@Component({
  selector: 'app-add-list',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  public API = '//localhost:8080';
  car: Car;

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {
    this.car = new Car();
  }

  ngOnInit() {
    // this.saveCar(this.name, this.photo);
  }

  saveCar() {
    this.carService.save(this.car).subscribe(
      result => {
        this.gotoUserList();
      },
      (error) => {
        console.log('Car Not Add');
        alert('Car Not Add');
      }
    );
  }


  gotoUserList() {
    this.router.navigate(['/cars-list']);
  }
}

