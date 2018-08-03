import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwatchInputSectionComponent } from './color-swatch-input-section.component';

describe('ColorSwatchInputSectionComponent', () => {
  let component: ColorSwatchInputSectionComponent;
  let fixture: ComponentFixture<ColorSwatchInputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSwatchInputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwatchInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
