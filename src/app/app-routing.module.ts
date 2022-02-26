import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  }, 
  {
    path: 'posts',
    children:[
      {
        path:'',
        loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
      },
      {
        path: ":id",
        loadChildren: () => import('./posts/posts-details/posts-details.module').then( m => m.PostsDetailsPageModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
