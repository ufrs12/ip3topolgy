import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShemaComponent } from './shema.component';

describe('ShemaComponent', () => {
  let component: ShemaComponent;
  let fixture: ComponentFixture<ShemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShemaComponent]
    });
    fixture = TestBed.createComponent(ShemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
