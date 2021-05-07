import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HomeTableComponent } from '../home-table/home-table.component';
import { UploadViewComponent } from '../upload-view/upload-view.component';
import { DomSanitizer } from "@angular/platform-browser";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'test', weight: 1.0079, symbol: '2-mar'},
  {position: 2, name: 'test', weight: 4.0026, symbol: '2-mar'},
  {position: 3, name: 'test', weight: 6.941, symbol: '2-mar'},
  {position: 4, name: 'test', weight: 9.0122, symbol: '2-mar'},
  {position: 5, name: 'test', weight: 10.811, symbol: '2-mar'},
];
@Component({
  selector: 'app-updatetable',
  templateUrl: './updatetable.component.html',
  styleUrls: ['./updatetable.component.css']
})
export class UpdatetableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  fileUrl: any;
  constructor(private dialogRef: MatDialogRef<HomeTableComponent>,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog) { }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  AddAttachment(){
      this.dialog.open(UploadViewComponent,{
        data: ""
      });
  }
  // DownloadAttachment(){
  //   let blob=localStorage.getItem('icon')
  //   console.log(blob)
  //   this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //     window.URL.createObjectURL(blob[0])
  //   );
  // }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }

}
