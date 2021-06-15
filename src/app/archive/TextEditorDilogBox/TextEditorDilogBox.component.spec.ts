/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextEditorDilogBoxComponent } from './TextEditorDilogBox.component';

describe('TextEditorDilogBoxComponent', () => {
  let component: TextEditorDilogBoxComponent;
  let fixture: ComponentFixture<TextEditorDilogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEditorDilogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorDilogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
