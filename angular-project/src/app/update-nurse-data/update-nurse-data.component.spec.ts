import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNurseDataComponent } from './update-nurse-data.component';

describe('UpdateNurseDataComponent', () => {
  let component: UpdateNurseDataComponent;
  let fixture: ComponentFixture<UpdateNurseDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNurseDataComponent]
    });
    fixture = TestBed.createComponent(UpdateNurseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
