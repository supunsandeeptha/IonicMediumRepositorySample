import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 name:any;
 showResponse;

  constructor(private HttpClient : HttpClient) {} //injecting the http client to the constructor

send(){

  let sendName = {
    name:this.name
  }
  
  this.HttpClient.post('http://localhost:9000/send',sendName).subscribe(
    response =>{
        console.log(response); //logging the response
        let x = response;
        this.showResponse = response;
        alert(x);


    }
  )


}

 
}
