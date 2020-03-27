import { Component, Input} from '@angular/core';
import {of, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyMusicWebsite';
  receivedMessageFromCustomer = '';
 

  getMessage(message) {
      console.log(message)
    }
    
  constructor()
  {
    this.person.sayLater();
    this.personFatArrow.sayLater();
 
  }

  person = {
    name: "jake",
    sayLater: function() {
      let self = this;
      setTimeout(function(){
        console.log(self.name);
      }, 1000);
    }
  };

  personFatArrow = {
    name: "bake",
    sayLater: function()

    {
      setTimeout(() => console.log(this.name), 1000);
    }
  }
  
  myObs = Observable.create(function(tiny) {
    tiny.next("1");
    tiny.next("5");
    tiny.complete();
  });

  myObs1 = Observable.create((observer) => {
    observer.next("1");
    observer.next("5");
    observer.complete();
  });

  logMessage(input)
  {
    console.log(input);
  }

  subscribe = this.myObs.subscribe(val => console.log(val));
  subscribe1 = this.myObs1.subscribe(val => console.log(val));
}


