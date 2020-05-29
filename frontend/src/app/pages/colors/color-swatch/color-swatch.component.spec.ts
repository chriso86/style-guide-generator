import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwatchComponent } from './color-swatch.component';

describe('ColorSwatchComponent', () => {
  let component: ColorSwatchComponent;
  let fixture: ComponentFixture<ColorSwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
