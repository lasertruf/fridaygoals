import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [

  {
    path : ':id',
    component : ImageComponent
  },
  
  {
    path : 'image/:id',
    component : ImageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
