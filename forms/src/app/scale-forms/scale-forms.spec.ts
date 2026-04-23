import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleForms } from './scale-forms';

describe('ScaleForms', () => {
  let component: ScaleForms;
  let fixture: ComponentFixture<ScaleForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleForms],
    }).compileComponents();

    fixture = TestBed.createComponent(ScaleForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
