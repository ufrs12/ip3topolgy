import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankelementsComponent } from './bankelements.component';

describe('BankelementsComponent', () => {
  let component: BankelementsComponent;
  let fixture: ComponentFixture<BankelementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankelementsComponent]
    });
    fixture = TestBed.createComponent(BankelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
