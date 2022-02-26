import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBlogService } from 'src/app/api-blog.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.page.html',
  styleUrls: ['./posts-details.page.scss'],
})
export class PostsDetailsPage implements OnInit {

  public respuesta:any;

  constructor(private route:ActivatedRoute, private ApiBlogService:ApiBlogService) { }


  ngOnInit(): void {

    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap;
      this.cargarData(params.id)
    })
  }

  cargarData(id:string){
   
    this.ApiBlogService.get('http://127.0.0.1:8002/api/posts/'+id)
    .subscribe(respuesta => {
      this.respuesta = respuesta;

    })

  }
 
}



