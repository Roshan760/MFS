import { Component, OnInit } from '@angular/core';
declare const launchCode: any;
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  callFun(){
    launchCode();
  }
}
