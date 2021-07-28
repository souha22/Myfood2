import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecetteComponent } from './home-recette.component';

describe('HomeRecetteComponent', () => {
  let component: HomeRecetteComponent;
  let fixture: ComponentFixture<HomeRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
