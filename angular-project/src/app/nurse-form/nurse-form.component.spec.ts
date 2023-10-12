import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseFormComponent } from './nurse-form.component';

describe('NurseFormComponent', () => {
  let component: NurseFormComponent;
  let fixture: ComponentFixture<NurseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseFormComponent]
    });
    fixture = TestBed.createComponent(NurseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
