import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerSwitchComponent } from './color-picker-switch.component';

describe('ColorPickerSwitchComponent', () => {
  let component: ColorPickerSwitchComponent;
  let fixture: ComponentFixture<ColorPickerSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
