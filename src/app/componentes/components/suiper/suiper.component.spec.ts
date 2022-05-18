import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiperComponent } from './suiper.component';

describe('SwiperComponent', () => {
  let component: SuiperComponent;
  let fixture: ComponentFixture<SuiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuiperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
