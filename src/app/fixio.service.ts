import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FixioService {

  data: any = {};
  base = [
   {id: "EUR", name: "Euro"},
   {id: "USD", name: "US Dollar"},
   {id: "BRL", name: "Brazil Real"},
   {id: "GBP", name: "Great Britain Pound"}
  ];
  selectedValue = 'USD';
  date = new Date();
  day = (this.date.getDate() < 10) ? '0' + this.date.getDate() : this.date.getDate();
  month = (this.date.getMonth() < 10) ? '0' + (this.date.getMonth() + 1) : (this.date.getMonth() + 1);
  // https://api.fixer.io/2017-08-09?base=USD
  private apiUrl = 'https://api.fixer.io/' + this.date.getFullYear() + '-' + this.month + '-' + this.day + '?base=' + this.selectedValue;
  changeBase(selectedValue){
    this.apiUrl = 'https://api.fixer.io/' + this.date.getFullYear() + '-' + this.month + '-' + this.day + '?base=' + this.selectedValue;
  }
  public getApiUrl(){
    return this.apiUrl;
  }
  constructor(private http: Http){
    console.log('conectando ' + this.apiUrl);
    this.getContract();
    this.getData();
    console.log("conectado");
  }
  getData(){
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }
  getContract(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

}
