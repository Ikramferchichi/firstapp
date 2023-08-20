import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCakeComponent } from './list-cake.component';

describe('ListCakeComponent', () => {
  let component: ListCakeComponent;
  let fixture: ComponentFixture<ListCakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCakeComponent]
    });
    fixture = TestBed.createComponent(ListCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
