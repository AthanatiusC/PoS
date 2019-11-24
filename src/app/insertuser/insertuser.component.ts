import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertuser',
  templateUrl: './insertuser.component.html',
  styleUrls: ['./insertuser.component.scss']
})
export class InsertuserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Save() {
    this.router.navigate(["master"])
  }

}
// TODO Create Automated Barcode Generator
// TODO Create Product Code Generator
