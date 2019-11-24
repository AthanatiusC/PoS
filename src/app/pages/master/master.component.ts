import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Users } from 'src/app/users';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  ShopName:string
  Phone: string
  Zip: number
  Description: string
  Address: string
  users: any = []
  roles: any = []
  id:any
  

  constructor(private router: Router,private api:ApiService,private http:HttpClient) { }

  ngOnInit() {
    this.GetAllUser()
    this.GetAllRole()
    this.api.GetProfile().subscribe(data => {
      this.ShopName = data.Name
      this.Address = data.Address
      this.Description = data.Description
      this.Zip = data.Zip
      this.Phone = data.Phone
    }, err => {
      console.log(err)
    })
  }

  async GetAllUser(){
    await this.http.get("http://localhost:3030/users").toPromise().then(res => {
      this.users = res
    })
    console.log(this.users)
  }
  
  async GetAllRole(){
    await this.http.get("http://localhost:3030/roles").toPromise().then(res => {
      this.roles = res
    })
    console.log(this.roles)
  }
  onSave(event: any) {
    this.api.SaveProfile(event.target.ShopName.value, event.target.Phone.value, event.target.Zip.value, event.target.Description.value, event.target.Address.value)
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['master']);}); 
  }

  onDelete() {
    console.log("deleting",this.id)
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "*")
    header.append("Content-Type", "application/json")
    let option = { headers: header };
    this.http.get("http://localhost:3030/users/delete/"+this.id,option).subscribe(x => {
      console.log(x+" Deleted")
    })
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['master']);}); 
    console.log("Deleted")
    document.getElementById('close2').click()
  }

  onCreate(event) {
    console.log(event.target.name.value,event.target.role.value)
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin","*")
    header.append("Access-Control-Allow-Methods","*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.http.post(
      'http://localhost:3030/users', JSON.stringify({
        "name": event.target.name.value,
        "username": event.target.username.value,
        "password": event.target.password.value,
        "role": event.target.role.value,
        "contact": event.target.contact.value
    }),option).subscribe(x => {
      console.log(x+" Create Success")
    })
    this.router.navigate(['dashboard']).then(() => {this.router.navigate(['master']);}); 
    document.getElementById('close').click()
  }


  click(val) {
    this.id = val
    console.log(this.id)
  }

  navigate() {
    this.router.navigate(['insertuser'])
  }

}
