import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatapostService {
  constructor(private http:HttpClient) {
   }

   getposts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
   }
}