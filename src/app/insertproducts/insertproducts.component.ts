import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-insertproducts',
  templateUrl: './insertproducts.component.html',
  styleUrls: ['./insertproducts.component.scss']
})
export class InsertproductsComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  onInsert(event) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Content-Type", "application/json")
    let option = { headers: header };
    this.http.get("http://localhost:3030/users/delete/"+event,option)
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['master']);}); 
  }

}
