import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditColorDialogComponent } from './add-edit-color-dialog.component';

describe('AddEditColorDialogComponent', () => {
  let component: AddEditColorDialogComponent;
  let fixture: ComponentFixture<AddEditColorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditColorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditColorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
