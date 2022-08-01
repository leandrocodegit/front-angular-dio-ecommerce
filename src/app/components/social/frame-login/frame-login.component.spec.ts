import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameLoginComponent } from './frame-login.component';

describe('FrameLoginComponent', () => {
  let component: FrameLoginComponent;
  let fixture: ComponentFixture<FrameLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
