import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent{

  data: any = {};
  base = [
   {id: "EUR", name: "Euro"},
   {id: "USD", name: "US Dollar"},
   {id: "BRL", name: "Brazil Real"},
   {id: "GBP", name: "Great Britain Pound"}
  ];
  selectedValue = null;
  private apiUrl = 'http://api.fixer.io/latest?base='+ (this.selectedValue !== null) ? this.selectedValue : 'USD';

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
  // lineChart
  public lineChartData:Array<any> = [
    {data: [], label: ''}
  ];
  public lineChartLabels:Array<any> = []; // legend (days/month)
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
