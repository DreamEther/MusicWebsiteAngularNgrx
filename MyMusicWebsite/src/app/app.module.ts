import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicList } from 'src/Components/music/musiclist.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerList} from 'src/CustomerList/customerList.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicList,
    CustomerList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
