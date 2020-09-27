import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressFilterPageComponent } from './press-filter-page.component';

describe('PressFilterPageComponent', () => {
  let component: PressFilterPageComponent;
  let fixture: ComponentFixture<PressFilterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressFilterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
