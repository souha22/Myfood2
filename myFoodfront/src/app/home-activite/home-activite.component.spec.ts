import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActiviteComponent } from './home-activite.component';

describe('HomeActiviteComponent', () => {
  let component: HomeActiviteComponent;
  let fixture: ComponentFixture<HomeActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
