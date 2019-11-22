import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/master', title: 'Master',  icon:'ni-archive-2 text-orange', class: '' },
    { path: '/masterconfig', title: 'Master Config',  icon:'ni-archive-2 text-orange', class: '' },
    { path: '/inventory', title: 'Inventory',  icon:'ni-box-2 text-green', class: '' },
    { path: '/pos', title: 'Point of Sale',  icon:'ni-cart text-purple', class: '' },
    { path: '/statistic', title: 'Statistic',  icon:'ni-chart-bar-32 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/icons', title: 'Icon',  icon:'ni-planet text-blue', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  private islogged:boolean

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.length! > 0) {
      if (sessionStorage.getItem("isloggedin") == "true") {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
      }
      else if(this.islogged == false)  {
        console.log("Unauthorized")
        this.router.navigate(['/login'])
      }
    } else {
      console.log("Unauthorized")
        this.router.navigate(['/login'])
    }
  }
  onClick() {
    sessionStorage.clear()
    this.router.navigate(["/login"])
  }
}
