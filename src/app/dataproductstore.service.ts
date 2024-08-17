import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataproductstoreService {

  constructor(private http:HttpClient) { }
  getproducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}
