import { Component, OnInit } from '@angular/core';
import { ApiBlogService } from '../api-blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  public posts:any =[]; 

  constructor(private ApiBlogService: ApiBlogService) { 

  }
  ngOnInit(): void {

    this.cargarData();

  }
  public cargarData(){
    this.ApiBlogService.get('http://127.0.0.1:8002/api/posts')
    .subscribe(respuesta => {
      this.posts = respuesta;
    })
  }
  }


