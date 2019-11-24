import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users'
import { Observable, zip } from 'rxjs';  
import { Router } from '@angular/router';
import { Profile } from './profile';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  uri = "http://localhost:3030"
  
  
  constructor(private http: HttpClient, private router: Router) { }
  
  IsLoggedIn: boolean
  private data: any
  public user: Users
  public isloading: boolean
  USER: Users[]
  datas = []

  ngOnInit() {
    this.IsLoggedIn = this.ReAuth()
  }

  ReAuth(): boolean {
    if (sessionStorage.length > 0) {
      let header = new HttpHeaders
      header.append("Access-Control-Allow-Origin", "*")
      header.append("Access-Control-Allow-Origin", "GET, PUT, POST")
      header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      let option = { headers: header };
      this.data = this.http.post<Users>(
        this.uri + '/users/auth',
        JSON.stringify({ "username": sessionStorage.getItem("username"), "password": sessionStorage.getItem("password") }),
        option);
      this.data.subscribe(x => {
        if (x != null) {
          this.router.navigate(['dashboard'])
          this.IsLoggedIn = true
        } else if (x == null) {
          // this.router.navigate(['login'])
          this.IsLoggedIn = false
        }
      })
    }
    else {
      this.IsLoggedIn = false
    }
    return this.IsLoggedIn
  }

  Auth(username: string, password: string): Observable<Users> {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Origin", "GET, PUT, POST")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.data = this.http.post<Users>(
      this.uri + '/users/auth',
      JSON.stringify({ "username": username, "password": password }),
      option);
    this.user = this.data
    return this.data
  }

  VerifyAuth() {

  }

  async GetAllUser(){
    let users:any = []
    await this.http.get("http://localhost:3030/users").toPromise().then(res => {
      users = res
    })
    return users
  }

  GetAllInventory() {
    let products = []
    this.http.get(this.uri.concat("/products")).subscribe((res) => {
      let mapped = Object.keys(res).map(key=>({type:key,value:res[key]}))
      mapped.forEach(prod => {
        products.push(prod)
      })
    })
  }

  GetProfile(): Observable<Profile>{
    return this.http.get<Profile>(this.uri+"/profile")
  }

  SaveProfile(ShopName: string, Phone: string, Zip: number, Description: string, ShopAddress: string) {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin","*")
    header.append("Access-Control-Allow-Methods","*")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.data = this.http.post<Profile>(
    this.uri + '/profile',JSON.stringify({"Name": ShopName,"Phone": Phone,"Zip": Number.parseInt(Zip.toString()),"Description": Description,"Address": ShopAddress}),option);
  }

  // GetAllProduct():Observable<Product> {
  //   return this.http.get<Product>(this.uri+"/products")
  // }
}
