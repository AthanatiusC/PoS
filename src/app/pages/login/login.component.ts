import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service'
import { Users } from '../../users'
import { Observable } from 'rxjs'
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: any
  password:any
  users: Observable<Users>
  loading:boolean = false 
  loggedin: boolean
  isloading: boolean
  buttonText:string = "Sign in"
  constructor(private api: ApiService,private router:Router ) {}

  ngOnInit() {
    this.loggedin =this.api.ReAuth()
    if (this.loggedin == true) {
      this.router.navigate(['dashboard'])
    }
  }
  ngOnDestroy() {
  }

  onClick() {
    this.isloading = true
    this.buttonText = "Loading.."
  }

  onSubmit(event) {
    console.log("Test")
    this.isloading = true
    this.email = event.target.email.value
    this.password = event.target.password.value 
    this.users = this.api.Auth(this.email,this.password)
    this.users.subscribe(
      res => {
        let data = res
        if (data != null) {
          sessionStorage.setItem("id",data._id.toString())
          sessionStorage.setItem("username",data.username)
          sessionStorage.setItem("password",event.target.password.value)
          sessionStorage.setItem("role",data.role)
          sessionStorage.setItem("name", data.name)
          sessionStorage.setItem("isloggedin", true.toString())
          if (event.target.checkbox.checked) {
            sessionStorage.setItem("auto-login", true.toString())
          } else {
            sessionStorage.setItem("auto-login", false.toString())
          }
          this.router.navigate(['/dashboard'])
        } else {
          this.api.IsLoggedIn = false
        }
      },
      err => {
        console.log(err)
      }
    )
    this.isloading = false
  }
}
