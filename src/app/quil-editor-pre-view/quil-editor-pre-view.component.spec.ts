import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuilEditorPreViewComponent } from './quil-editor-pre-view.component';

describe('QuilEditorPreViewComponent', () => {
  let component: QuilEditorPreViewComponent;
  let fixture: ComponentFixture<QuilEditorPreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuilEditorPreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilEditorPreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
