import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCakeComponent } from './ajout-cake.component';

describe('AjoutCakeComponent', () => {
  let component: AjoutCakeComponent;
  let fixture: ComponentFixture<AjoutCakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutCakeComponent]
    });
    fixture = TestBed.createComponent(AjoutCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
