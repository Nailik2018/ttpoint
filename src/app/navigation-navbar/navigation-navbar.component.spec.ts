import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationNavbarComponent } from './navigation-navbar.component';

describe('NavigationNavbarComponent', () => {
  let component: NavigationNavbarComponent;
  let fixture: ComponentFixture<NavigationNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
