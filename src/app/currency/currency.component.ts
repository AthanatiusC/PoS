import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currency: any = []
  unit: any = []

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.GetAllCurrency()
    this.GetAllUnit()
    sessionStorage.setItem("config","Currency & Units")
  }

  onAddCurrency(value) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/currency', JSON.stringify({
        "name": value
      }), option)
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['masterconfig']); });
  }

  onAddUnit(value) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/unit', JSON.stringify({
        "name": value
      }), option)
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['masterconfig']); });
  }

  async GetAllCurrency() {
    await this.http.get("http://localhost:3030/currency").toPromise().then(res => {
      this.currency = res
    })
  }
  
  async GetAllUnit() {
    await this.http.get("http://localhost:3030/unit").toPromise().then(res => {
      this.unit = res
    })
  }

  DeleteCurrency(id) {
    this.http.get("http://localhost:3030/currency/delete/"+id).toPromise()
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['masterconfig']); });
  }

  DeleteUnit(id) {
    this.http.get("http://localhost:3030/unit/delete/"+id).toPromise()
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['masterconfig']); });
  }
}
