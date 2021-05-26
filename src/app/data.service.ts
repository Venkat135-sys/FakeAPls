import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

 

  getBiryanidata():Observable<Recipe[]>{

   return this.hc.get<Recipe[]>("assets/biryani.json")
    
  }


}
