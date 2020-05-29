import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewItemComponent } from './add-new-item.component';

describe('ColorSwatchInputSectionComponent', () => {
  let component: AddNewItemComponent;
  let fixture: ComponentFixture<AddNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
