import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFontTypeDialogComponent } from './add-edit-font-type-dialog.component';

describe('AddEditFontTypeDialogComponent', () => {
  let component: AddEditFontTypeDialogComponent;
  let fixture: ComponentFixture<AddEditFontTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditFontTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFontTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
