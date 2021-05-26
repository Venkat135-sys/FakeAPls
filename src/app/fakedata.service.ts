import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {Post} from '../app/models/posts.model'



@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private http:HttpClient) { }

  getData():Observable<Post[]>{
   return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/users')
  }

 getinfo():Observable<any>{
   return this.http.get<any>('https://reqres.in/api/unknown');
 }



}
