import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMediaFileComponent } from './display-media-file.component';

describe('DisplayMediaFileComponent', () => {
  let component: DisplayMediaFileComponent;
  let fixture: ComponentFixture<DisplayMediaFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMediaFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMediaFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
