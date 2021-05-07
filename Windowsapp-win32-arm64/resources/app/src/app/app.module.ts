import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { UpdatetableComponent } from './updatetable/updatetable.component';
import { NotesComponent } from './notes/notes.component';
import { OwnerAssigneeComponent } from './owner-assignee/owner-assignee.component';
import { UploadViewComponent } from './upload-view/upload-view.component';
import { SharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeTableComponent,
    BasicSearchComponent,
    UpdatetableComponent,
    NotesComponent,
    OwnerAssigneeComponent,
    UploadViewComponent
  ],
  imports: [
    NgxElectronModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
