import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  
  name='JOhn smith'
  person={'id':1,name:'john',email:'j@gmail.com'}
  currentDate=new Date()

  employees=[
  {'code':'Emp101','name':'MARK','gender':'M','salary':5000,'dob':'12/5/2000'},
  {'code':'Emp102','name':'Watson','gender':'M','salary':5000,'dob':'5/10/2000'},
  {'code':'Emp103','name':'MaRy','gender':'F','salary':5000,'dob':'1/5/2000'},
  {'code':'Emp104','name':'John','gender':'M','salary':5000,'dob':'2/5/2000'},
  ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
