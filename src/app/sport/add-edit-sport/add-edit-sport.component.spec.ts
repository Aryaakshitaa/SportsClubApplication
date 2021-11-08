import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSportComponent } from './add-edit-sport.component';

describe('AddEditSportComponent', () => {
  let component: AddEditSportComponent;
  let fixture: ComponentFixture<AddEditSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
