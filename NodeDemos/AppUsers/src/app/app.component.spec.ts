import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppOwnerDetails } from '../app/OwnerDetails/AppOwnerDetails.component';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';  



import { AppDataService } from './shared/services/AppDataService';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent ,AppOwnerDetails
      ],
      imports: [
    BrowserModule,
    RouterTestingModule.withRoutes([
         { path: 'Owner', component:AppOwnerDetails }
        ])
    ,TableModule
    ,FormsModule
    ,ButtonModule
  ],
  providers: [AppDataService],
      schemas :[NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
}));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
  it('should have router outlet', async(() => {
    const compiled=fixture.debugElement.nativeElement;  
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));
    it('should have the OwnerDetails component', async(() => {
    fixture.detectChanges();
    let href = fixture.debugElement.nativeElement.querySelector('a');
    href.click();
    fixture.whenStable().then(() => {
    expect(fixture.nativeElement.querySelector('appOwner')).not.toBe(null);
  })
  }));
});
