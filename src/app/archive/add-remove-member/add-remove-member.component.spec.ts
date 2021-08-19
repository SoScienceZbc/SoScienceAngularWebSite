import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveMemberComponent } from './add-remove-member.component';

describe('AddRemoveMemberComponent', () => {
  let component: AddRemoveMemberComponent;
  let fixture: ComponentFixture<AddRemoveMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
