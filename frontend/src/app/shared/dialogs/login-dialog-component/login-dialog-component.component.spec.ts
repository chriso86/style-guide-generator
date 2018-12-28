import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogComponentComponent } from './login-dialog-component.component';

describe('LoginDialogComponentComponent', () => {
  let component: LoginDialogComponentComponent;
  let fixture: ComponentFixture<LoginDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
