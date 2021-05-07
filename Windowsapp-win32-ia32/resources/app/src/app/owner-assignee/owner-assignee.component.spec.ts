import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAssigneeComponent } from './owner-assignee.component';

describe('OwnerAssigneeComponent', () => {
  let component: OwnerAssigneeComponent;
  let fixture: ComponentFixture<OwnerAssigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAssigneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAssigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
