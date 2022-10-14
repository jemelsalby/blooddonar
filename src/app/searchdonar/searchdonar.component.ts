import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonar',
  templateUrl: './searchdonar.component.html',
  styleUrls: ['./searchdonar.component.css']
})
export class SearchdonarComponent implements OnInit {

  constructor() { }
  bloodgroup=""
  readValue=()=>{
    let data={
      "bloodgroup":this.bloodgroup
  
    
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
