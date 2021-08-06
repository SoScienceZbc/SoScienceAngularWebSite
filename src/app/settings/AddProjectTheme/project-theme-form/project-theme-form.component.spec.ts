import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThemeFormComponent } from './project-theme-form.component';

describe('ProjectThemeFormComponent', () => {
  let component: ProjectThemeFormComponent;
  let fixture: ComponentFixture<ProjectThemeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectThemeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectThemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
