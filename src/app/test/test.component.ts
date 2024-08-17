import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-test',
  template: `
  <h1 style="color:red ;">Heading</h1>
  <h1 [style.color]="newcolor">Heading</h1>
  <h1 [style.color]="haserror ? 'red' : 'green'">Heading</h1>
  <h1 [ngStyle]='customstyle'>Custom style</h1>
 `
  ,
  styles: [`
  .text-danger{
    color:red
  }
  .text-success{
    color:green
  }
  `]
})
export class TestComponent implements OnInit {
  name = "welcome guest"
  message=''
  haserror=false
  newcolor="#999"

  customstyle={
    color:'red',
    fontSize:'36px',
    backgroundColor:'blue'
  }
  // imagePath="https://cdn2.downdetector.com/static/uploads/logo/"
  // imageName="Google-new_19.png"
  // image="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
  // isdisabled=false

  constructor() { }

  ngOnInit(): void {
  }

  // sayhello(){
  //   return this.name
  // }
  onbuttonclick(event: any) {
    this.name = "welcome paul"
    console.log(event);
  }

  loginhandler(myInput:any){
    console.log(myInput.value)
  }
  keyhandler(text:any){
    this.message=text
  }

}

// <h1>hello</h1>
//   <h1>hello {{name}}</h1>
//   <h1>{{'hello '+name}}</h1>
//   <h1>hai {{name.toUpperCase()}}</h1>
//   <h1>{{name.length}}</h1>
//   <h1>{{sayhello()}}</h1>

// <img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png" width="200px">
// <img [src]=image width="200px"/>
// <img src="{{image}}" width="200px"/>
// <img src="{{imagePath + imageName}}" width="200px"/><br>
// <button disabled=true>button</button>
// <button disabled={{isdisabled}}>button</button>
// <button [disabled]=isdisabled>button</button>


// <button (click)=onbuttonclick($event)>click me</button>
// <h1>{{name}}</h1>
// <button (dblclick)=onbuttonclick($event)>click me</button>
// <h1>{{name}}</h1>
// <input type="text" value="" class="inputClass" #myInput>
// <button (click)="loginhandler(myInput)">Login</button><br><br>
// <textarea rows="3" cols="100" #mytext (keypress)="keyhandler(mytext.value)"></textarea>
// <p>{{message}}</p>




// classbinding
// <h1 class="text-success">Heading</h1>
// <h1 [class.text-danger]="haserror">Heading</h1>
// <input type="text" class="form-control" [class.is-invalid]="haserror">
// <small class="text-danger" [class.d-none]="!haserror">this is required</small>



// <h1>{{name}}</h1>
// <input type="text" [(ngModel)]=name>