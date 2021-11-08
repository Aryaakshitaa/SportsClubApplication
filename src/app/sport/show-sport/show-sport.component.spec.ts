import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSportComponent } from './show-sport.component';

describe('ShowSportComponent', () => {
  let component: ShowSportComponent;
  let fixture: ComponentFixture<ShowSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
