import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api = 'http://localhost:3000/profiles'

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get(this.api);
  }

  save(profile: any){
    return this.http.post<any>(this.api, profile);
  }
}
