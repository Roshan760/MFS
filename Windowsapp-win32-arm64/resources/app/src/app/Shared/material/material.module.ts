import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//angular material module starts
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from "@angular/material/card";
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

// import { MatMomentDateModule } from "@angular/material-moment-adapter";
//angular material module ends

let matModules = [
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatListModule,
  MatSortModule,
  MatDialogModule,
  MatCardModule,
  MatStepperModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatChipsModule,
  MatTabsModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules],
  exports: [...matModules]
})
export class MaterialModule { }
