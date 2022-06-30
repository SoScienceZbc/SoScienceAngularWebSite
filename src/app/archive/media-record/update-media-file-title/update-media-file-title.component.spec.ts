import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMediaFileTitleComponent } from './update-media-file-title.component';

describe('UpdateMediaFileTitleComponent', () => {
  let component: UpdateMediaFileTitleComponent;
  let fixture: ComponentFixture<UpdateMediaFileTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMediaFileTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMediaFileTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
