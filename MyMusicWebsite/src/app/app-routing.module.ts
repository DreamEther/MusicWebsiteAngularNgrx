import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
