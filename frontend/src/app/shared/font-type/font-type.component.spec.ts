import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontTypeComponent } from './font-type.component';

describe('FontTypeComponent', () => {
  let component: FontTypeComponent;
  let fixture: ComponentFixture<FontTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
