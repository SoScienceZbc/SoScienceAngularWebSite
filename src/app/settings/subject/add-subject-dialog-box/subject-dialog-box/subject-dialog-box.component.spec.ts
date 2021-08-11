import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDialogBoxComponent } from './subject-dialog-box.component';

describe('SubjectDialogBoxComponent', () => {
  let component: SubjectDialogBoxComponent;
  let fixture: ComponentFixture<SubjectDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
