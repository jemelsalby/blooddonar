import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedonar',
  templateUrl: './deletedonar.component.html',
  styleUrls: ['./deletedonar.component.css']
})
export class DeletedonarComponent implements OnInit {

  constructor() { }
  idDonar=""
  readValue=()=>{
    let data={
      "idDonar":this.idDonar
  
    
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
