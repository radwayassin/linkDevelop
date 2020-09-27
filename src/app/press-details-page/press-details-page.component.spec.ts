import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressDetailsPageComponent } from './press-details-page.component';

describe('PressDetailsPageComponent', () => {
  let component: PressDetailsPageComponent;
  let fixture: ComponentFixture<PressDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
