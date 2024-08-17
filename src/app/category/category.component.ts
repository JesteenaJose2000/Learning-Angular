import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories :any[]=[];
  constructor(private dataservice:GroceryService) {
    this.dataservice.getcategories().subscribe((data: any) => {
      this.categories = data
    })
   }
  ngOnInit(): void {
  }

}
