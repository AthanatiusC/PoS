import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users'
import { Observable } from 'rxjs';  
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  uri = "http://localhost:3030/users"
  
  
  constructor(private http: HttpClient,private router:Router) {}
  
  IsLoggedIn: boolean
  private data: any
  public user:Users
  public isloading:boolean

  ngOnInit() {
    this.IsLoggedIn = this.ReAuth()
  }

  ReAuth():boolean {
    if (sessionStorage.length >0) {
      let header = new HttpHeaders
      header.append("Access-Control-Allow-Origin","*")
      header.append("Access-Control-Allow-Origin","GET, PUT, POST")
      header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      let option = { headers: header };
      this.data = this.http.post<Users>(
        this.uri + '/auth',  
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

  Auth(username:string,password:string) :Observable<Users> {
    let header = new HttpHeaders
    header.append("Access-Control-Allow-Origin","*")
    header.append("Access-Control-Allow-Origin","GET, PUT, POST")
    header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let option = { headers: header };
    this.data  = this.http.post<Users>(
      this.uri + '/auth',  
      JSON.stringify({ "username": username, "password": password }),
      option);
    this.user = this.data
    return this.data
  }

  VerifyAuth() {

  }

  GetAllUser():Observable<Users[]> {
    return this.http.get<Users[]>(this.uri)
  }

}
