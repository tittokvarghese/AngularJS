import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
public bookdetails:any=[
{title:"10174", author:"Tony Thomas",publisher:"MCA LE",image:"ic_propic3.png",dept:"Computer"},
{title:"10179",author:"Teena mol",publisher:"MCA REG",image:"ic_propic2.png",dept:"Computer"},
{title:"10170",author:"Arun Sabu",publisher:"Mtech",image:"ic_propic4.png",dept:"Business"}];
  
selbook:any;
addbook(data:any){
  this.selbook=data;

  }
constructor() { }

  ngOnInit() {
  }

}
