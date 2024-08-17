import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  display=true
  isloggedin=true

  number=4
  numberstring="Two"

  names=['mark','john','watson','paul']

  // employees=[
  //   {'id':1,'name':'john','email':'j@gmail.com'},
  //   {'id':2,'name':'mark','email':'m@gmail.com'},
  //   {'id':3,'name':'watson','email':'w@gmail.com'},
  //   {'id':4,'name':'paul','email':'p@gmail.com'},
  //   {'id':5,'name':'ragel','email':'r@gmail.com'}
  // ]

  employees :any[] =[]
  
  constructor() { 
    this.employees=[
        {'id':1,'name':'john','email':'j@gmail.com'},
        {'id':2,'name':'mark','email':'m@gmail.com'},
        {'id':3,'name':'watson','email':'w@gmail.com'},
        {'id':4,'name':'paul','email':'p@gmail.com'},
        {'id':5,'name':'ragel','email':'r@gmail.com'}
      ]
  }

  onrefreshing(){
    this.employees=[
      {'id':1,'name':'john','email':'j@gmail.com'},
      {'id':2,'name':'mark','email':'m@gmail.com'},
      {'id':3,'name':'watson','email':'w@gmail.com'},
      {'id':4,'name':'paul','email':'p@gmail.com'},
      {'id':5,'name':'ragel','email':'r@gmail.com'},
      {'id':6,'name':'albert','email':'a@gmail.com'}
    ]
  }

  trackById(employee:any){
    return employee.id
  }

  ngOnInit(): void {
  }

}
