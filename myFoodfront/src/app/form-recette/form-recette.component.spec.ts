import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecetteComponent } from './form-recette.component';

describe('FormRecetteComponent', () => {
  let component: FormRecetteComponent;
  let fixture: ComponentFixture<FormRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
