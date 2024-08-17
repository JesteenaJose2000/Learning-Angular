import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employees :any[];

  constructor(private dataservice:DataService) { 
    //let dataservice=new DataService
    this.employees=dataservice.getemployee()
  }

  ngOnInit(): void {
  }

}
