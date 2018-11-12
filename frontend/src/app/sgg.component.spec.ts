import { TestBed, async } from '@angular/core/testing';
import { SggComponent } from './sgg.component';
describe('SggComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SggComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SggComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'style-guide-generator'`, async(() => {
    const fixture = TestBed.createComponent(SggComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('style-guide-generator');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SggComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to style-guide-generator!');
  }));
});
