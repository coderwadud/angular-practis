import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingStudents } from './pending-students';

describe('PendingStudents', () => {
  let component: PendingStudents;
  let fixture: ComponentFixture<PendingStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingStudents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
