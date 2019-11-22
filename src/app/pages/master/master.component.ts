import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['insertuser'])
  }

}
