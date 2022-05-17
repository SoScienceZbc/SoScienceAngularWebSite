import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitelComponent } from './add-titel.component';

describe('AddTitelComponent', () => {
  let component: AddTitelComponent;
  let fixture: ComponentFixture<AddTitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTitelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
