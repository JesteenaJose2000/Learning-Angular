import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatapictureService {

  constructor(private http:HttpClient) { }
  getpictures(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
