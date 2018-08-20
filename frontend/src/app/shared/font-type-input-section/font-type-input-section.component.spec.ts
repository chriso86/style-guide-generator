import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontTypeInputSectionComponent } from './font-type-input-section.component';

describe('FontTypeInputSectionComponent', () => {
  let component: FontTypeInputSectionComponent;
  let fixture: ComponentFixture<FontTypeInputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontTypeInputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontTypeInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
