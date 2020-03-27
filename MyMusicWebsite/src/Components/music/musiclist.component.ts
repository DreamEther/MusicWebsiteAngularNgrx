import {Component, OnInit} from "@angular/core";
import{Observable, from, interval} from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms'



@Component({
selector: 'music-list',
templateUrl: './musiclist.component.html',
styleUrls: ['./musiclist.component.less']
})

export class MusicList implements OnInit{

    isPlaying: boolean = false;
    searchDetails: FormGroup
    employeeList: [''];

    constructor()
    {
       
        // this.foo(new Promise((resolve, reject) => resolve(1)));
        this.sayHello();
        this.add(1)(3); // have to call it like this in order to input a parameter for the inner function. p
        // this.logTutorialCallback;
        this.resolveAfter2Seconds();
        
    }



    ngOnInit(){
        this.searchDetails = new FormGroup({
            artistName: new FormControl(),
            songName: new FormControl()
        });
    }

    //Fat Arrow Practice. The below line is in 'curried' format.

    add = x => y => console.log(x + y);
    
    // This is the same as the above function without the use of fat arrow syntax
    add2 = function(params:any) {
        return function y(param: any){
            console.log(params + param)
            return params + param; 
        }
    }


    title = "My Music List";
    timeOnPage = 0;

    timer = new Observable(function(observer)
    {
      
    });
    
    tick = setInterval(() => {
        if(this.isPlaying === true)
        {
        this.timeOnPage++;
        }
        else{
            clearInterval();
        }
    }, 1000)
    
    sayHello = () => console.log("hello");

    toggleTimer = () =>
    {
        this.isPlaying = !this.isPlaying;
    }
  
    onSubmit = (): void => console.log("This is the value of our searchDetails!:" + this.searchDetails.value)

    onSubmitNoFatArrow(): void {
        console.log(this.searchDetails.value)
    } ;

    //first promise
    makeRequest = (location) => {
      return new Promise((resolve, reject) =>
      {
        console.log(`Making a request to ${location}`)
      
        if (location === "Chase Bank")
        {
          resolve('Chase bank says welcome')
        }
        else{
          reject('This is not Chase Bank')
        }
      })
    }

    // second promise
    processRequest = (response) => {
      return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve('Extra information' + response)
      })
    }

    //calling them by chaining
    call = this.makeRequest('Chase Bank').then(response => {
      console.log('response received')
       return this.processRequest(response)
    }).then(processedResponse => 
      {
        console.log(processedResponse)
      })

      //using async and await to call promises
      //have to use try catch block to catch errors 
      async callasync()
      {
        try{
          let response = await this.makeRequest('Wells Fargo Bank')
          console.log('Response received')
          let processedResponse = this.processRequest(response)
          console.log(processedResponse)
        }
        catch(error){
          console.log(error);
        }
      
      }

      callAsyncMethod = this.callasync()




    // Typical Promise format
    resolveAfter2Seconds = () => {    
        return new Promise((resolve, reject) => {
            let toggle = 2;
            if(toggle ===1)
            {
          setTimeout(() => {
            resolve('ayoooo');
          }, 2000)} else
          { reject('promise rejected');
        }
        }).then((message) => {console.log("this is in the then " + message)}, function(message) {console.log("this is the error ", message)})

        // .then(message => {console.log("this is in the then " + message)}, function(message) {console.log("this is the error ", message)})  // just another valid way to write this without the extra two parentheses

        // .catch((message) => {console.log("this is the catch message " + message)}); // this is the traditional way to catch errors in a promise. The above works too though
      }

      
      displayDate = fetch('./test.json')
        .then((data) => {
          console.log(data.json()); // JSON data parsed by `response.json()` call
        });

      //Callback
      watchTutorialCallback(callback, errorCallback) { // both of these params are callback functions 
        let userLeft = false
        let userWatchingCatMeme = false
      
        if (userLeft) {
          errorCallback({
            name: 'User Left', 
            message: ':('
          })
        } else if (userWatchingCatMeme) {
          errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat' 
          })
        } else {
          callback('Thumbs up and Subscribe')
        }
      }
      
      logTutorialCallback = this.watchTutorialCallback((message) => {
        console.log('Success ' + message)
      }, error => {
        console.log(error.name + ' ' + error.message)
      })

      //Promise (solves the mind fuck of callbacks: aka we don't need them anymore)
     watchTutorialPromise = () => {
        let userLeft = false
        let userWatchingCatMeme = false
        let resolveCondtionOne = false;
        let resolveConditionTwo = true;
        return new Promise((resolve, reject) => {
          if (userLeft) {
            reject({
              name: 'User Left', 
              message: ':('
            })
          } else if (userWatchingCatMeme) {
            reject({
              name: 'User Watching Cat Meme',
              message: 'WebDevSimplified < Cat' 
            })
          } else if (resolveCondtionOne){
            resolve('Resolve Condition One is true!')
          }
          else {
              resolve('Resolve Condition Two is true!')
          }
        }).then((resolveFurther) => {alert(resolveFurther); return resolveFurther + 'Concating second then action'})
      }
      
      
      logTutorialPromise = this.watchTutorialPromise().then(message => {
        console.log('Success' + message)
      }).catch(error => {
        console.log(error.name + ' ' + error.message)
      })
      
      recordVideoOne = new Promise((resolve, reject) => {
        resolve('Video 1 Recorded')
      })
      
      recordVideoTwo = new Promise((resolve, reject) => {
        resolve('Video 2 Recorded')
      })
      
      recordVideoThree = new Promise((resolve, reject) => {
        resolve('Video 3 Recorded')
      })
      
     videoPromises =  Promise.all([
        this.recordVideoOne,
        this.recordVideoTwo,
        this.recordVideoThree
      ]).then(messages => {
        console.log(messages)
      })
      
      
      
     

    //   foo<T>(bar: PromiseLike<T>): void {
    //     bar.then(alert)
    // }
    

      
     
}