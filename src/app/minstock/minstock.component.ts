import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minstock',
  templateUrl: './minstock.component.html',
  styleUrls: ['./minstock.component.scss']
})
export class MinstockComponent implements OnInit {

  ppn:any = []
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.GetAllPpn()
    sessionStorage.setItem('config','MinStock & Ppn')
  }

  
  onAddPpn(value) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/unit', JSON.stringify({
        "Ppn": value
      }), option)
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['masterconfig']); });
  }

  async GetAllPpn() {
    await this.http.get("http://localhost:3030/minstock").toPromise().then(res => {
      this.ppn = res
    })
  }
  

}
