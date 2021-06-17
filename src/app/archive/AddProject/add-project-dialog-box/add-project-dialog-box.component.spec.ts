import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectDialogBoxComponent } from './add-project-dialog-box.component';

describe('AddProjectDialogBoxComponent', () => {
  let component: AddProjectDialogBoxComponent;
  let fixture: ComponentFixture<AddProjectDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
