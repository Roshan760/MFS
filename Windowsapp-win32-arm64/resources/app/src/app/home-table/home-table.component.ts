import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

//import {MatTableModule,MatHeaderCellDef,MatHeaderRowDef} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
import { UpdatetableComponent } from '../updatetable/updatetable.component';
import { IpcRenderer } from 'electron';
declare const launchCode: any;
@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HomeTableComponent implements OnInit {
  ipc!: IpcRenderer;
  test=[];
  dataSource=[];
  constructor(private _dialog:MatDialog,private ref:ChangeDetectorRef) {
    
  }
  expandedElement: null;
  columnsToDisplay=['contract_number', 'customer_name', 'task_number','task_status','scheduled_start_date','scheduled_end_date','country_name','Update','Launch_ART'];
  ngOnInit(): void {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;

      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
    this.ipc.send('Fetch',"test");
    this.ipc.on('other-custom-signal',(event,data)=>{
      console.log(data)
      this.test=data;
      console.log("test data inside home: ",this.test)
      this.dataSource= this.test;
      this.ref.detectChanges();
      console.log("Inside home table",this.dataSource);
  })



  }
  // parameterInitialize() {
  //   let columnNames = Object.keys(this.test);
  //   console.log("columnName: ",columnNames)
  //   this.columnsToDisplay=columnNames
  // }
  click(){
    this.ipc.send('Insert',"test")
  }
  fetch(){
    this.ipc.send('Fetch',"test")
  }
  update(){
    let dialogRef  = this._dialog.open(UpdatetableComponent,{
      data :{},
      width:"800px",
      height:"600px"

  });
  }
  launch(){
    launchCode();
  }
//   launch(){
//     var child = require('child_process').execFile;
// var executablePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
// var parameters = ["--incognito"];

// child(executablePath, parameters, function(err, data) {
//      console.log(err)
//      console.log(data.toString());
//   });
// }
}
