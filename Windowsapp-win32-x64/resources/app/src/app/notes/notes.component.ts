import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
const ELEMENT_DATA= [
  {
    Country: "India",
    TaskType: "India",
    Subject:"eee",
    Location:"Delhi",
    ServiceRequest: 'Hydrogen',
    Customer: 1.0079,
    Task: 'H',
    description: `Hydrogen is a chemical element with Task H and atomic number 1. With a standard
        atomic Customer of 1.008, hydrogen is the lightest element on the periodic table.`
  }
];
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NotesComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Details', 'Notes', 'DateEntered', 'User','NoteSource','NoteType','Visibility'];
  expandedElement:null;
  constructor() { }

  ngOnInit(): void {
  }

}
