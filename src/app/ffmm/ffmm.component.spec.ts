import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfmmComponent } from './ffmm.component';

describe('FfmmComponent', () => {
  let component: FfmmComponent;
  let fixture: ComponentFixture<FfmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
