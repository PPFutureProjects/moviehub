import { WelcomeComponent } from './welcome.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WelcomeComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // should check for the welcome text and ignore
  // the material-specific component tags throwing error
  // using NO_ERRORS_SCHEMA for shallow test focusing on the component only.

  it('should contain the welcome header text', () => {
    let de = fixture.debugElement.query(By.css('.welcome-text'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('Honoring all the wonderful women');
  });
});
