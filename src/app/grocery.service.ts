import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http:HttpClient) { }
  getcategories(){
    return this.http.get('http://apolis-grocery.herokuapp.com/api/category')
  }
}
