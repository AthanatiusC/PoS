import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigMasterComponent } from '../pages/config-master/config-master.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: any = []
  roles:any =[]

  constructor(private http:HttpClient,private router:Router,private master:ConfigMasterComponent) { }

  ngOnInit() {
    this.GetAllCategory()
    this.GetAllRoles()
    sessionStorage.setItem("config","Category & Roles")
  }

  onAddCategory(value) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin","*")
    header.append("Access-Control-Allow-Methods","*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/category', JSON.stringify({
        "name": value
    }),option)
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['masterconfig']);}); 
    document.getElementById('close').click()
    this.master.selection = "Category"
  }

  onAddRole(value) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin","*")
    header.append("Access-Control-Allow-Methods","*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/category', JSON.stringify({
        "name": value
    }),option)
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['masterconfig']);}); 
    document.getElementById('close').click()
    this.master.selection = "Category"
  }

  DeleteCategory(id) {
    this.http.get("http://localhost:3030/category/delete/"+id).toPromise().then(res => {
      this.category = res
    })
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['masterconfig']);}); 
  }

  DeleteRole(id) {
    this.http.get("http://localhost:3030/role/delete/"+id).toPromise().then(res => {
      this.category = res
    })
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['masterconfig']);}); 
  }

  async GetAllCategory(){
    await this.http.get("http://localhost:3030/category").toPromise().then(res => {
      this.category = res
    })
  }

  async GetAllRoles(){
    await this.http.get("http://localhost:3030/roles").toPromise().then(res => {
      this.roles = res
    })
  }

}
