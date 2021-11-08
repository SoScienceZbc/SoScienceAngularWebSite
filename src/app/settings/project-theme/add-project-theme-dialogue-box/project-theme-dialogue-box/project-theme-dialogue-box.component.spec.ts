import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThemeDialogueBoxComponent } from './project-theme-dialogue-box.component';

describe('ProjectThemeDialogueBoxComponent', () => {
  let component: ProjectThemeDialogueBoxComponent;
  let fixture: ComponentFixture<ProjectThemeDialogueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectThemeDialogueBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectThemeDialogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
