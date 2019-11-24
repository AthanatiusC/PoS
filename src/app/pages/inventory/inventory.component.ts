import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  products: any = []
  currency: any = []
  category: any = []
  unit: any = []
  
  modelid:any
  modelname:any
  modelcategory:any
  modelstock :any
  modelcurrency:any
  modelbuyprice:any
  modelsellprice:any
  modelunit:any
  modeldescription:any

  deleteid:any
  constructor(private api:ApiService,private http:HttpClient,private router:Router ) { }

  ngOnInit() {
    this.GetAllProducts()
    this.GetAllCategory()
    this.GetAllCurrency()
    this.GetAllProducts()
    this.GetAllUnit()
  }

  onClick(val) {
    this.deleteid = val
  }

  edit() {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin","*")
    header.append("Access-Control-Allow-Methods","*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/products/'+this.modelid, JSON.stringify({
        "name": this.modelname,
        "price": this.modelsellprice,
        "stock": this.modelstock,
        "classification": this.modelcategory,
        "Curr": this.modelcurrency,
        "sellprice": this.modelsellprice,
        "buyprice": this.modelbuyprice,
        "unit": this.modelunit,
        "description": this.modeldescription,
    }),option).subscribe(x => {
      console.log(x+" Update Success")
    })
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['inventory']);}); 
  }

  add() {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin","*")
    header.append("Access-Control-Allow-Methods","*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/products', JSON.stringify({
        "name": this.modelname,
        "price": this.modelsellprice,
        "stock": this.modelstock,
        "classification": this.modelcategory,
        "Curr": this.modelcurrency,
        "sellprice": this.modelsellprice,
        "buyprice": this.modelbuyprice,
        "unit": this.modelunit,
        "description": this.modeldescription,
    }),option).subscribe(x => {
      console.log(x+" Create Success")
    })
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['inventory']);}); 
  }

  async GetAllProducts(){
    await this.http.get("http://localhost:3030/products").toPromise().then(res => {
      this.products = res
    })
    console.log(this.products)
  }

  async GetAllCurrency(){
    await this.http.get("http://localhost:3030/currency").toPromise().then(res => {
      this.currency = res
    })
    console.log(this.currency)
  }

  async GetAllCategory(){
    await this.http.get("http://localhost:3030/category").toPromise().then(res => {
      this.category = res
    })
    console.log(this.category)
  }

  async GetAllUnit(){
    await this.http.get("http://localhost:3030/unit").toPromise().then(res => {
      this.unit = res
    })
    console.log(this.unit)
  }

  DeleteProducts(){
    this.http.get("http://localhost:3030/products/delete/"+this.deleteid).toPromise().then(res => {
      console.log(res)
    })
    console.log(this.products)
    this.router.navigate(['dashboard']).then(() => { this.router.navigate(['inventory']); });
    document.getElementById('close2').click()
  }

  EditProducts(product) {
    this.modelid = product._id
    this.modelname = product.name
    this.modelcategory = product.classification
    this.modelstock = product.stock
    this.modelcurrency = product.currency
    this.modelbuyprice = product.buyprice
    this.modelsellprice = product.sellprice
    this.modelunit = product.unit
    this.modeldescription = product.description
    window.scroll(0,0)
  }

  clear() {
    this.modelid =""
    this.modelname ="" 
    this.modelcategory =""
    this.modelstock ="" 
    this.modelcurrency =""
    this.modelbuyprice =""
    this.modelsellprice =""
    this.modelunit =""
    this.modeldescription ="" 
  }
}
