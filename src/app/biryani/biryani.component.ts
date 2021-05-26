import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent implements OnInit {

  biryani:Recipe[]=[]
  constructor(private dsobj:DataService){}

  ngOnInit(){
   this.dsobj.getBiryanidata().subscribe(
     ds=>{
       this.biryani = ds;
     },
     err=>{
       console.log(err)
     }
     
   )
  }

  
  
}
