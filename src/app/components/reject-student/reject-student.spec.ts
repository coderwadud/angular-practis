import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectStudent } from './reject-student';

describe('RejectStudent', () => {
  let component: RejectStudent;
  let fixture: ComponentFixture<RejectStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
