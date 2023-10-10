import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdoctordataComponent } from './edit-doctor-data.component';

describe('EditdoctordataComponent', () => {
  let component: EditdoctordataComponent;
  let fixture: ComponentFixture<EditdoctordataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdoctordataComponent]
    });
    fixture = TestBed.createComponent(EditdoctordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
