import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'customer-list',
    templateUrl: './customerList.component.html',
    styleUrls: ['./customerList.component.less']
})

export class CustomerList implements OnInit{

    ngOnInit(){

    }

    @Input('customerID') id: number;
    @Input() email: string;

    @Output() sendToParent = new EventEmitter<string>();

    age = 10;
    firstName = "John";
    lastName = "Brown";
    displayInput = 'temporary data';
    message = 'sending to parent'
  

    constructor(){
    }

    print()
    {
        this.sendToParent.emit(this.message);
    }

    ReturnStringFatArrow = () => 'JAKE'

    ReturnStringNormally () 
    {
        console.log("Returning string in string interpolation")
    }


    // SetTimeout()) =>
    // {

    // }
}