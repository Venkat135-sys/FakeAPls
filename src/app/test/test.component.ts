import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  userdata;
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.fsObj.getinfo().subscribe(
      userData1=>{
        this.userdata=userData1;
        console.log(this.userdata);
      },
      err=>{
        console.log('err: ',err)
      }
    )
    
  }
 

 
 
}
