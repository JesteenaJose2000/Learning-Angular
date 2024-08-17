import { Component, OnInit } from '@angular/core';
import { DatapostService } from '../datapost.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    posts :any[]=[]
  constructor(private datapostservice:DatapostService) {
    this.datapostservice.getposts().subscribe((data:any)=>
    this.posts=data
    )
   }

  ngOnInit(): void {
  }

}
