import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //https://cors-everywhere.herokuapp.com/
  readonly APIUrl = "http://arya007-001-site1.htempurl.com/api";
  //https://cors-everywhere.herokuapp.com/
  readonly PhotoUrl = "http://arya007-001-site1.htempurl.com/Photos/";
  constructor(private http:HttpClient) { }
  getSportList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Sport');
  }

  addSport(val:any){
    return this.http.post(this.APIUrl+'/Sport',val);
  }

  updateSport(val:any){
    return this.http.put(this.APIUrl+'/Sport',val);
  }

  deleteSport(val:any){
    return this.http.delete(this.APIUrl+'/Sport/'+val);
  }

  getPlayerList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Player');
  }

  addPlayer(val:any){
    return this.http.post(this.APIUrl+'/Player',val);
  }

  updatePlayer(val:any){
    return this.http.put(this.APIUrl+'/Player',val);
  }

  deletePlayer(val:any){
    return this.http.delete(this.APIUrl+'/Player/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Player/SaveFile',val);
  }

  getAllSportNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Player/GetAllSportNames');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/Users',val);
  }

  getAllUsers():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Users/GetAllUsers');
  }
  
}

