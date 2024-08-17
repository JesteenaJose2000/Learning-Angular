import { Component, OnInit } from '@angular/core';
import { DataproductstoreService } from '../dataproductstore.service';

@Component({
  selector: 'app-productstore',
  templateUrl: './productstore.component.html',
  styleUrls: ['./productstore.component.css']
})
export class ProductstoreComponent implements OnInit {
  products:any[]=[];
  constructor(private dataservice:DataproductstoreService) { 
    this.dataservice.getproducts().subscribe((data:any)=>
    this.products=data
    )
  }

  ngOnInit(): void {
  }

}
