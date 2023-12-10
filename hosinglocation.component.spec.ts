import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosinglocationComponent } from './hosinglocation.component';

describe('HosinglocationComponent', () => {
  let component: HosinglocationComponent;
  let fixture: ComponentFixture<HosinglocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosinglocationComponent]
    });
    fixture = TestBed.createComponent(HosinglocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
