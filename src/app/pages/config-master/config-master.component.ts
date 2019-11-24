import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-master',
  templateUrl: './config-master.component.html',
  styleUrls: ['./config-master.component.scss']
})
export class ConfigMasterComponent implements OnInit {
  public selection:any
options=['Currency & Units','Category & Roles']
  constructor() { }

  ngOnInit() {
    this.selection = sessionStorage.getItem('config')
  }

  onChange(data) {
    this.selection = data
  }
}
