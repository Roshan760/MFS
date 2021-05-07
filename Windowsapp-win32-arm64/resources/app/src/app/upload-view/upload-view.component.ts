import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-view',
  template: `
    <input type="file"
           id="file"
           (change)="handleFileInput($event.target)">
    <button (click)="upload()" mat-raised-button color="primary">Upload</button>
    `
})
export class UploadViewComponent implements OnInit {
  constructor( private _snackBar: MatSnackBar,
    private _dialog: MatDialog,) { }

  ngOnInit(): void {
  }


  handleFileInput(event:any){
    let file = event[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file,"UTF-8");
    fileReader.onload = (e) => {
      //@ts-ignore
      let temp:any = fileReader.result.toString();
      let data=new ArrayBuffer(temp.length)
      let blob = new Blob([new Uint8Array(data)], {type: file.type });
      localStorage['icon']=blob;
      console.log(blob);
        // let temp:any = fileReader.result.toString();
        // console.log(temp)
        // this.view = JSON.parse(temp);
        // console.log(this.view);
    }
    fileReader.readAsDataURL(file)
    fileReader.onerror = (error) => {
        this._snackBar.open("Error!!","ok")
    }
}
upload(){
  this._dialog.closeAll();
  this._snackBar.open("Uploaded Successfully","ok");
}
}
