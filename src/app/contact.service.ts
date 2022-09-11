import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  api='localhost:3000/'

  constructor(private http:HttpClient) { }
  saveContact(data:any){
    return this.http.post(this.api,data);
  }

}
