import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentDialogBoxComponent } from './add-document-dialog-box.component';

describe('AddDocumentDialogBoxComponent', () => {
  let component: AddDocumentDialogBoxComponent;
  let fixture: ComponentFixture<AddDocumentDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocumentDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocumentDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
