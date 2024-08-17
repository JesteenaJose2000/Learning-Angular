import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :any[];

  constructor(private dataservice:DataService) { 
    //let dataservice=new DataService
    this.employees=dataservice.getemployee()
  }

  ngOnInit(): void {
  }

}
