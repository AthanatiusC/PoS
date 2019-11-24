import { Component, OnInit } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-po-s',
  templateUrl: './po-s.component.html',
  styleUrls: ['./po-s.component.scss']
})
export class PoSComponent implements OnInit {
  products: any = []
  carts: any = []
  recievedmoney:any
  productid:any
  price: any
  total: Number = 0
  message: any
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.GetAllProduct()
    this.GetAllCarts()
  }

  Finish() {
    let exchange = this.recievedmoney-Number(this.total)
    if (exchange < 0) {
      this.message = "Not enough Money"
      this.router.navigate(['dashboard']).then(() => { this.router.navigate(['masterconfig']); });
    } else {
      this.message = "Transaction Successfull!"
      this.AddTransaction()
    }

  }

  onAddUnit(value) {
    console.log("UNIT")

    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/unit', JSON.stringify({
        "name": value
      }), option).subscribe(x => {
        console.log(x + " Create Unit Success")
      })
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['masterconfig']); });
  }

  AddCart(event) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/carts', JSON.stringify({
        "product_id":event.target.productid.value,"qty":Number(event.target.qty.value),"discount":Number(event.target.discount.value),"user_id":sessionStorage.getItem('id')
      }), option).subscribe(x => {
        console.log(x + " Create Cart Success")
      })
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['PoS']); });
    document.getElementById("close").click()
  }

  AddTransaction() {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/transaction', JSON.stringify({
        "history":this.carts,"money":Number(this.recievedmoney),"exchange":Number(this.recievedmoney)-Number(this.total),"user_id":sessionStorage.getItem("id")
      }), option).subscribe(x => {
        console.log(x + " Create Cart Success")
      })
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['PoS']); });
    // document.getElementById("close").click()
  }

  download() {
    location.href = "http://localhost:3030/export"
  }

  onClick(val) {
    this.productid = val
  }

  async GetAllProduct() {
    await this.http.get("http://localhost:3030/products").toPromise().then(res => {
      this.products = res
    })
    console.log(this.products)
  }

  async GetProduct() {
    await this.http.get("http://localhost:3030/products").toPromise().then(res => {
      this.products = res
    })
    console.log(this.products)
  }

  async GetAllCarts() {
    await this.http.get("http://localhost:3030/carts").toPromise().then(res => {
      this.carts = res
    })
    this.carts.forEach(data => {
      this.total = this.total+data.total
      console.log(this.total)
      // this.total = this.total +Number(data.total)
    });
  }
}
