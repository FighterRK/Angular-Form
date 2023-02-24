import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataViewService {

  public dataShare : any = [];

  getData(){
    return this.dataShare
  }

  addData(value : any){
    return this.dataShare.push(value)
  }

  constructor(public http : HttpClient) { }


  getCountries(){
    return this.http.get('https://restcountries.com/v2/all')
  }
}
