import { Component, OnInit } from '@angular/core';
import { DatapictureService } from '../datapicture.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  pictures :any[]=[];
  constructor(private dataservice:DatapictureService) { 
    this.dataservice.getpictures().subscribe((data:any)=>
    this.pictures=data
    )
  }

  ngOnInit(): void {
  }

}
