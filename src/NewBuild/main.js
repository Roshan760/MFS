(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\INFRKX\Downloads\Angular-sqlite_NM\Angular-sqlite_NM\src\main.ts */"zUnb");


/***/ }),

/***/ "5YKp":
/*!******************************************************!*\
  !*** ./src/app/updatetable/updatetable.component.ts ***!
  \******************************************************/
/*! exports provided: UpdatetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatetableComponent", function() { return UpdatetableComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-view/upload-view.component */ "Ex8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _owner_assignee_owner_assignee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../owner-assignee/owner-assignee.component */ "WUPa");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../notes/notes.component */ "TEms");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");














function UpdatetableComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UpdatetableComponent_th_34_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return $event ? ctx_r12.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected())("aria-label", ctx_r0.checkboxLabel());
} }
function UpdatetableComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdatetableComponent_td_35_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function UpdatetableComponent_td_35_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const row_r14 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return $event ? ctx_r16.selection.toggle(row_r14) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r14))("aria-label", ctx_r1.checkboxLabel(row_r14));
} }
function UpdatetableComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " File Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatetableComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r18.position, " ");
} }
function UpdatetableComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatetableComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r19.name, " ");
} }
function UpdatetableComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatetableComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r20.weight, " ");
} }
function UpdatetableComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Last Updated By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatetableComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r21.symbol, " ");
} }
function UpdatetableComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 23);
} }
function UpdatetableComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdatetableComponent_tr_49_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const row_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.selection.toggle(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const ELEMENT_DATA = [
    { position: 1, name: 'test', weight: 1.0079, symbol: '2-mar' },
    { position: 2, name: 'test', weight: 4.0026, symbol: '2-mar' },
    { position: 3, name: 'test', weight: 6.941, symbol: '2-mar' },
    { position: 4, name: 'test', weight: 9.0122, symbol: '2-mar' },
    { position: 5, name: 'test', weight: 10.811, symbol: '2-mar' },
];
class UpdatetableComponent {
    constructor(dialogRef, sanitizer, dialog) {
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
    }
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
    AddAttachment() {
        this.dialog.open(_upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_2__["UploadViewComponent"], {
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
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    ngOnInit() {
    }
    onClose() {
        this.dialogRef.close();
    }
}
UpdatetableComponent.ɵfac = function UpdatetableComponent_Factory(t) { return new (t || UpdatetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
UpdatetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdatetableComponent, selectors: [["app-updatetable"]], decls: 54, vars: 3, consts: [[1, "row"], [1, "app-toolbar"], [1, "example-spacer"], ["mat-raised-button", "", 1, "Search"], ["mat-raised-button", "", 1, "Search", "ml-2", 3, "click"], ["hideToggle", ""], [1, "col-md-12", "header"], [1, "field"], ["mat-raised-button", "", 1, "Search", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function UpdatetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Update Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdatetableComponent_Template_button_click_9_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "keyboard_arrow_right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Show Servive Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Service Request Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdatetableComponent_Template_button_click_26_listener() { return ctx.AddAttachment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Add Attachment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Download\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, UpdatetableComponent_th_34_Template, 2, 3, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, UpdatetableComponent_td_35_Template, 2, 2, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, UpdatetableComponent_th_37_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, UpdatetableComponent_td_38_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, UpdatetableComponent_th_40_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, UpdatetableComponent_td_41_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](42, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, UpdatetableComponent_th_43_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, UpdatetableComponent_td_44_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](45, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, UpdatetableComponent_th_46_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, UpdatetableComponent_td_47_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, UpdatetableComponent_tr_48_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, UpdatetableComponent_tr_49_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "app-owner-assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "app-notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _owner_assignee_owner_assignee_component__WEBPACK_IMPORTED_MODULE_10__["OwnerAssigneeComponent"], _notes_notes_component__WEBPACK_IMPORTED_MODULE_11__["NotesComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n\r\n  text-align: left;\r\n\r\n}\r\nth[_ngcontent-%COMP%]{\r\n  background-color: rgb(184, 180, 180);\r\n  color: white;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  background-color: rgb(89, 91, 247);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InVwZGF0ZXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4uaGVhZGVye1xyXG5cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG50aHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg0LCAxODAsIDE4MCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgOTEsIDI0Nyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ex8t":
/*!******************************************************!*\
  !*** ./src/app/upload-view/upload-view.component.ts ***!
  \******************************************************/
/*! exports provided: UploadViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadViewComponent", function() { return UploadViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class UploadViewComponent {
    constructor(_snackBar, _dialog) {
        this._snackBar = _snackBar;
        this._dialog = _dialog;
    }
    ngOnInit() {
    }
    handleFileInput(event) {
        let file = event[0];
        const fileReader = new FileReader();
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = (e) => {
            //@ts-ignore
            let temp = fileReader.result.toString();
            let data = new ArrayBuffer(temp.length);
            let blob = new Blob([new Uint8Array(data)], { type: file.type });
            localStorage['icon'] = blob;
            console.log(blob);
            // let temp:any = fileReader.result.toString();
            // console.log(temp)
            // this.view = JSON.parse(temp);
            // console.log(this.view);
        };
        fileReader.readAsDataURL(file);
        fileReader.onerror = (error) => {
            this._snackBar.open("Error!!", "ok");
        };
    }
    upload() {
        this._dialog.closeAll();
        this._snackBar.open("Uploaded Successfully", "ok");
    }
}
UploadViewComponent.ɵfac = function UploadViewComponent_Factory(t) { return new (t || UploadViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
UploadViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadViewComponent, selectors: [["app-upload-view"]], decls: 3, vars: 0, consts: [["type", "file", "id", "file", 3, "change"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UploadViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadViewComponent_Template_input_change_0_listener($event) { return ctx.handleFileInput($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadViewComponent_Template_button_click_1_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], encapsulation: 2 });


/***/ }),

/***/ "H8qh":
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/material.module */ "vKPN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]] }); })();


/***/ }),

/***/ "NfFs":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    callFun() {
        launchCode();
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 25, vars: 0, consts: [["role", "navigation", 1, "navbar", "navbar-expand-md", "navbar-light"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "fa", "fa-bars", 2, "color", "whitesmoke"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "example-spacer"], [1, "navbar-nav", "icon-nav"], [1, "nav-item"], ["mat-raised-button", "", 1, "mt-1", "mr-1", 3, "click"], ["routerLink", "/home/contactus", 1, "nav-link"], [1, "nav-link"], [1, "nav-item", 2, "display", "flex"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MFS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_11_listener() { return ctx.callFun(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Synchronize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Prefrences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%]{\r\n  background-image: linear-gradient(to right, rgb(0, 162, 255) , rgb(0, 47, 255));\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  top: 0px;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n  font-family: Roboto Condensed;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  line-height: 21px;\r\n  color: #FFFFFE;\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n  color:#FFFFFE;\r\n  font-family: Roboto Condensed;\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{\r\n  color:#5F6C7B;\r\n  font-family: Roboto Condensed;\r\n}\r\n\r\n\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    cursor: pointer;\r\n  }\r\n\r\n.username[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.hamburger[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  margin-right: 20px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu-icon[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n  \r\n}\r\n\r\n.user-dropdown[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active{\r\n\tbackground-color: #094067 !important;\r\n    border: none !important;\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.user-div[_ngcontent-%COMP%]{\r\n\tmargin : 0 !important;\r\n}\r\n\r\n.header-image[_ngcontent-%COMP%]{\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  margin: 0 20px 0 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtFQUErRTtFQUMvRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztBQUVGO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFOztLQUVHO0FBQ0w7O0FBRUE7Q0FDQyxvQ0FBb0M7SUFDakMsdUJBQXVCO0NBQzFCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigwLCAxNjIsIDI1NSkgLCByZ2IoMCwgNDcsIDI1NSkpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBjb2xvcjogI0ZGRkZGRTtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgY29sb3I6I0ZGRkZGRTtcclxuICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZDtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXJ7XHJcbiAgY29sb3I6IzVGNkM3QjtcclxuICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZDtcclxufVxyXG5cclxuLyogLm5hbWVkLW5hdntcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn0gKi9cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4udXNlcm5hbWV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5uYXYtbGlua3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxvZ291dHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudS1pY29ue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgLyogLm5hbWVkLW5hdntcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH0gKi9cclxufVxyXG5cclxuLnVzZXItZHJvcGRvd24sLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZle1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwOTQwNjcgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXItZGl2e1xyXG5cdG1hcmdpbiA6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1pbWFnZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Qjk/":
/*!********************************************************!*\
  !*** ./src/app/basic-search/basic-search.component.ts ***!
  \********************************************************/
/*! exports provided: BasicSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSearchComponent", function() { return BasicSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function BasicSearchComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicSearchComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.value = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BasicSearchComponent {
    constructor() {
        this.value = 'Clear me';
    }
    ngOnInit() {
    }
}
BasicSearchComponent.ɵfac = function BasicSearchComponent_Factory(t) { return new (t || BasicSearchComponent)(); };
BasicSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicSearchComponent, selectors: [["app-basic-search"]], decls: 13, vars: 1, consts: [[1, "container"], [1, "row"], ["appearance", "outline", 1, "example-form-field"], ["matInput", "", "type", "text"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "col", "buttons"], ["mat-raised-button", "", 1, "Search"], ["mat-raised-button", "", 1, "Search", "ml-2"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function BasicSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BasicSearchComponent_button_7_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Advanced Search\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".example-form-field[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n}\r\n.Search[_ngcontent-%COMP%]{\r\n  color: grey;\r\n  top:10px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWDtBQUNGIiwiZmlsZSI6ImJhc2ljLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG4uU2VhcmNoe1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHRvcDoxMHB4XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header/app-header.component */ "NfFs");
/* harmony import */ var _basic_search_basic_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-search/basic-search.component */ "Qjk/");
/* harmony import */ var _home_table_home_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-table/home-table.component */ "yzNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





//import { BrowserWindow } from 'electron';
//import { ElectronService} from 'ngx-electron';
//const {app, BrowserWindow, ipcMain} = require('electron')
//const electron = require('electron');
//import { } from 'electron';
//const {app} = require('electron')
//const electron = require('electron');
class AppComponent {
    constructor() {
        // title = 'electron-demo';
        // constructor(private _electronService: ElectronService) {
        //electron.ipcRenderer.on('other-custom-signal', (event,arg) => {
        //console.log('Received acknowledged from backend about receipt of our signal.');
        //console.log(event);
        //console.log(arg);   })
        //   console.log('Sending message to backend.');
        //   _electronService.ipcRenderer.send('message', 'hello, are you there?');
        //  }
        //   public playPingPong() {
        //       if(this._electronService.isElectronApp) {
        //           let pong: string = this._electronService.ipcRenderer.sendSync('ping');
        //           console.log(pong);
        //       }
        //   }
        // title = 'electron-demo';
        // constructor(private _electronService: ElectronService) {
        //electron.ipcRenderer.on('other-custom-signal', (event,arg) => {
        //console.log('Received acknowledged from backend about receipt of our signal.');
        //console.log(event);
        //console.log(arg);   })
        //   console.log('Sending message to backend.');
        //   _electronService.ipcRenderer.send('message', 'hello, are you there?');
        //  }
        //   public playPingPong() {
        //       if(this._electronService.isElectronApp) {
        //           let pong: string = this._electronService.ipcRenderer.sendSync('ping');
        //           console.log(pong);
        //       }
        //   }
        this.test = [];
        if (window.require) {
            try {
                this.ipc = window.require('electron').ipcRenderer;
            }
            catch (e) {
                throw e;
            }
        }
        else {
            console.warn('App not running inside Electron!');
        }
        this.ipc.send('Fetch', "test");
        this.ipc.on('other-custom-signal', (event, data) => {
            console.log(data);
            this.test = data;
            console.log("test data : ", this.test);
        });
    }
    ngOnInit() {
        this.ipc.on('other-custom-signal', (event, data) => {
            console.log(data);
            this.test = data;
            console.log("test data : ", this.test);
        });
    }
    click() {
        this.ipc.send('Insert', "test");
    }
    fetch() {
        this.ipc.send('Fetch', "test");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-basic-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-home-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } }, directives: [_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _basic_search_basic_search_component__WEBPACK_IMPORTED_MODULE_2__["BasicSearchComponent"], _home_table_home_table_component__WEBPACK_IMPORTED_MODULE_3__["HomeTableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TEms":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NotesComponent_ng_container_8_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", column_r5, " ");
} }
function NotesComponent_ng_container_8_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " More Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NotesComponent_ng_container_8_td_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NotesComponent_ng_container_8_td_2_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r10[column_r5], " ");
} }
function NotesComponent_ng_container_8_td_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NotesComponent_ng_container_8_td_2_ng_template_2_div_0_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotesComponent_ng_container_8_td_2_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r5 == "Update")("ngIfElse", _r15);
} }
function NotesComponent_ng_container_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotesComponent_ng_container_8_td_2_div_1_Template, 6, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotesComponent_ng_container_8_td_2_ng_template_2_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r5 == "Details")("ngIfElse", _r12);
} }
function NotesComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotesComponent_ng_container_8_th_1_Template, 2, 1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotesComponent_ng_container_8_td_2_Template, 4, 2, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matColumnDef", column_r5);
} }
function NotesComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Full Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Note Text ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r1.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@detailExpand", element_r21 == ctx_r1.expandedElement ? "expanded" : "collapsed");
} }
function NotesComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
} }
function NotesComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotesComponent_tr_12_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const element_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.expandedElement = ctx_r23.expandedElement === element_r22 ? null : element_r22; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-expanded-row", ctx_r3.expandedElement === element_r22);
} }
function NotesComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
const _c0 = function () { return ["expandedDetail"]; };
const ELEMENT_DATA = [
    {
        Country: "India",
        TaskType: "India",
        Subject: "eee",
        Location: "Delhi",
        ServiceRequest: 'Hydrogen',
        Customer: 1.0079,
        Task: 'H',
        description: `Hydrogen is a chemical element with Task H and atomic number 1. With a standard
        atomic Customer of 1.008, hydrogen is the lightest element on the periodic table.`
    }
];
class NotesComponent {
    constructor() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['Details', 'Notes', 'DateEntered', 'User', 'NoteSource', 'NoteType', 'Visibility'];
    }
    ngOnInit() {
    }
}
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(); };
NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotesComponent, selectors: [["app-notes"]], decls: 14, vars: 6, consts: [["hideToggle", ""], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["template1", ""], [1, "arrow"], ["template2", ""], [1, "example-element-detail"], [1, "example-element-description"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Notes History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NotesComponent_ng_container_8_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NotesComponent_td_10_Template, 10, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NotesComponent_tr_11_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NotesComponent_tr_12_Template, 1, 2, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NotesComponent_tr_13_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row[_ngcontent-%COMP%] {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n  background-color: rgb(184, 180, 180);\r\n  color: white;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  background-color: white;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]{\r\n  color: rgb(43, 55, 226);\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n  top: 6px;\r\n  position: relative;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoibm90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTgwLCAxODApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZGVye1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZmllbGR7XHJcbiAgY29sb3I6IHJnYig0MywgNTUsIDIyNik7XHJcbn1cclxuLmFycm93e1xyXG4gIHRvcDogNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG50ZHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ "WUPa":
/*!************************************************************!*\
  !*** ./src/app/owner-assignee/owner-assignee.component.ts ***!
  \************************************************************/
/*! exports provided: OwnerAssigneeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAssigneeComponent", function() { return OwnerAssigneeComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");





function OwnerAssigneeComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OwnerAssigneeComponent_th_9_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r10.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected())("aria-label", ctx_r0.checkboxLabel());
} }
function OwnerAssigneeComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OwnerAssigneeComponent_td_10_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function OwnerAssigneeComponent_td_10_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const row_r12 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r14.selection.toggle(row_r12) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r12))("aria-label", ctx_r1.checkboxLabel(row_r12));
} }
function OwnerAssigneeComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Resource Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OwnerAssigneeComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r16.position, " ");
} }
function OwnerAssigneeComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Resource Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OwnerAssigneeComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.name, " ");
} }
function OwnerAssigneeComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OwnerAssigneeComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.weight, " ");
} }
function OwnerAssigneeComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 17);
} }
function OwnerAssigneeComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OwnerAssigneeComponent_tr_21_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const row_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.selection.toggle(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const ELEMENT_DATA = [
    { position: 1, name: 'test', weight: 1.0079 },
];
class OwnerAssigneeComponent {
    constructor() {
        this.displayedColumns = ['select', 'Resource_Name', 'Resource_Type', 'Status'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
    }
    ngOnInit() {
    }
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
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
OwnerAssigneeComponent.ɵfac = function OwnerAssigneeComponent_Factory(t) { return new (t || OwnerAssigneeComponent)(); };
OwnerAssigneeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OwnerAssigneeComponent, selectors: [["app-owner-assignee"]], decls: 22, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "header"], [1, "field"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Resource_Name"], ["matColumnDef", "Resource_Type"], ["matColumnDef", "Status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function OwnerAssigneeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Owner And Assignee(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OwnerAssigneeComponent_th_9_Template, 2, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OwnerAssigneeComponent_td_10_Template, 2, 2, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OwnerAssigneeComponent_th_12_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OwnerAssigneeComponent_td_13_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, OwnerAssigneeComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OwnerAssigneeComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OwnerAssigneeComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, OwnerAssigneeComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, OwnerAssigneeComponent_tr_20_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OwnerAssigneeComponent_tr_21_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n\r\n  text-align: left;\r\n\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  background-color: rgb(89, 91, 247);\r\n}\r\nth[_ngcontent-%COMP%]{\r\n  background-color: rgb(184, 180, 180);\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm93bmVyLWFzc2lnbmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkIiwiZmlsZSI6Im93bmVyLWFzc2lnbmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhlYWRlcntcclxuXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbn1cclxuLmhlYWRlcntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg5LCA5MSwgMjQ3KTtcclxufVxyXG5cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTgwLCAxODApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "31Lz");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-header/app-header.component */ "NfFs");
/* harmony import */ var _home_table_home_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-table/home-table.component */ "yzNd");
/* harmony import */ var _basic_search_basic_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic-search/basic-search.component */ "Qjk/");
/* harmony import */ var _updatetable_updatetable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./updatetable/updatetable.component */ "5YKp");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notes/notes.component */ "TEms");
/* harmony import */ var _owner_assignee_owner_assignee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./owner-assignee/owner-assignee.component */ "WUPa");
/* harmony import */ var _upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-view/upload-view.component */ "Ex8t");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Shared/shared.module */ "H8qh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            ngx_electron__WEBPACK_IMPORTED_MODULE_2__["NgxElectronModule"],
            _Shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_6__["AppHeaderComponent"],
        _home_table_home_table_component__WEBPACK_IMPORTED_MODULE_7__["HomeTableComponent"],
        _basic_search_basic_search_component__WEBPACK_IMPORTED_MODULE_8__["BasicSearchComponent"],
        _updatetable_updatetable_component__WEBPACK_IMPORTED_MODULE_9__["UpdatetableComponent"],
        _notes_notes_component__WEBPACK_IMPORTED_MODULE_10__["NotesComponent"],
        _owner_assignee_owner_assignee_component__WEBPACK_IMPORTED_MODULE_11__["OwnerAssigneeComponent"],
        _upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_12__["UploadViewComponent"]], imports: [ngx_electron__WEBPACK_IMPORTED_MODULE_2__["NgxElectronModule"],
        _Shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "vKPN":
/*!****************************************************!*\
  !*** ./src/app/Shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");

//angular material module starts




























// import { MatMomentDateModule } from "@angular/material-moment-adapter";
//angular material module ends
let matModules = [
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ...matModules], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"]], exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yzNd":
/*!****************************************************!*\
  !*** ./src/app/home-table/home-table.component.ts ***!
  \****************************************************/
/*! exports provided: HomeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTableComponent", function() { return HomeTableComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _updatetable_updatetable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../updatetable/updatetable.component */ "5YKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function HomeTableComponent_ng_container_7_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", column_r5, " ");
} }
function HomeTableComponent_ng_container_7_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " More Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeTableComponent_ng_container_7_td_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeTableComponent_ng_container_7_td_2_ng_template_2_div_0_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r19.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeTableComponent_ng_container_7_td_2_ng_template_2_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeTableComponent_ng_container_7_td_2_ng_template_2_ng_template_1_div_0_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5); return ctx_r22.launch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeTableComponent_ng_container_7_td_2_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeTableComponent_ng_container_7_td_2_ng_template_2_ng_template_1_div_0_Template, 3, 0, "div", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r5 == "Launch_ART")("ngIfElse", _r17);
} }
function HomeTableComponent_ng_container_7_td_2_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r10[column_r5], " ");
} }
function HomeTableComponent_ng_container_7_td_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeTableComponent_ng_container_7_td_2_ng_template_2_div_0_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeTableComponent_ng_container_7_td_2_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeTableComponent_ng_container_7_td_2_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r5 == "Update")("ngIfElse", _r15);
} }
function HomeTableComponent_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeTableComponent_ng_container_7_td_2_div_1_Template, 6, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeTableComponent_ng_container_7_td_2_ng_template_2_Template, 5, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r5 == "Details")("ngIfElse", _r12);
} }
function HomeTableComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeTableComponent_ng_container_7_th_1_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeTableComponent_ng_container_7_td_2_Template, 4, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matColumnDef", column_r5);
} }
function HomeTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r1.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@detailExpand", element_r29 == ctx_r1.expandedElement ? "expanded" : "collapsed");
} }
function HomeTableComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 22);
} }
function HomeTableComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeTableComponent_tr_11_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const element_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.expandedElement = ctx_r31.expandedElement === element_r30 ? null : element_r30; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("example-expanded-row", ctx_r3.expandedElement === element_r30);
} }
function HomeTableComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return ["expandedDetail"]; };
class HomeTableComponent {
    constructor(_dialog, ref) {
        this._dialog = _dialog;
        this.ref = ref;
        this.test = [];
        this.dataSource = [];
        this.columnsToDisplay = ['contract_number', 'customer_name', 'task_number', 'task_status', 'scheduled_start_date', 'scheduled_end_date', 'country_name', 'Update', 'Launch_ART'];
    }
    ngOnInit() {
        if (window.require) {
            try {
                this.ipc = window.require('electron').ipcRenderer;
            }
            catch (e) {
                throw e;
            }
        }
        else {
            console.warn('App not running inside Electron!');
        }
        this.ipc.send('Fetch', "test");
        this.ipc.on('other-custom-signal', (event, data) => {
            console.log(data);
            this.test = data;
            console.log("test data inside home: ", this.test);
            this.dataSource = this.test;
            this.ref.detectChanges();
            console.log("Inside home table", this.dataSource);
        });
    }
    // parameterInitialize() {
    //   let columnNames = Object.keys(this.test);
    //   console.log("columnName: ",columnNames)
    //   this.columnsToDisplay=columnNames
    // }
    click() {
        this.ipc.send('Insert', "test");
    }
    fetch() {
        this.ipc.send('Fetch', "test");
    }
    update() {
        let dialogRef = this._dialog.open(_updatetable_updatetable_component__WEBPACK_IMPORTED_MODULE_1__["UpdatetableComponent"], {
            data: {},
            width: "800px",
            height: "600px"
        });
    }
    launch() {
        launchCode();
    }
}
HomeTableComponent.ɵfac = function HomeTableComponent_Factory(t) { return new (t || HomeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
HomeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeTableComponent, selectors: [["app-home-table"]], decls: 14, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "header"], [1, "field"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["template1", ""], [1, "arrow"], ["template3", ""], ["template2", ""], [3, "click"], [1, "example-element-detail"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function HomeTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Field Service Technician Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeTableComponent_ng_container_7_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeTableComponent_td_9_Template, 3, 2, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeTableComponent_tr_10_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeTableComponent_tr_11_Template, 1, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeTableComponent_tr_12_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row[_ngcontent-%COMP%] {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n  background-color: rgb(184, 180, 180);\r\n  color: white;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  background-color: white;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]{\r\n  color: rgb(43, 55, 226);\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]{\r\n  top: 6px;\r\n  position: relative;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJob21lLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDE4MCwgMTgwKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWRlcntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmZpZWxke1xyXG4gIGNvbG9yOiByZ2IoNDMsIDU1LCAyMjYpO1xyXG59XHJcbi5hcnJvd3tcclxuICB0b3A6IDZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxudGR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map