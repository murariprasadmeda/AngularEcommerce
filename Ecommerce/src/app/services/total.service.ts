import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  baseUrl=""
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }



}
