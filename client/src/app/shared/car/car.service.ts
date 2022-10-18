import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from '../../car';

@Injectable({providedIn: 'root'})
export class CarService {
  public API = '//localhost:8080';
  public CAR_API = this.API + '/cars';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.API + '/login', {headers, responseType: 'text' as 'json'});
  }

  public getAll(page: number) {

    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.CAR_API + '/list?page=' + page, {headers});
  }

  public get(name: string) {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.CAR_API + '/search/' + name, {headers});
  }

  public save(car: Car) {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type', 'application/json');
    return this.http.post<Car>(this.CAR_API + '/insert/', car, {headers, responseType: 'text' as 'json'});
  }

  public remove(car: Car) {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type', 'application/json');
    // @ts-ignore
    return this.http.delete<Car>(this.CAR_API + '/delete/', car, {headers, responseType: 'text' as 'json'});
  }
}
