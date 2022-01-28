import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberCardComponent } from './memeber-card.component';

describe('MemeberCardComponent', () => {
  let component: MemeberCardComponent;
  let fixture: ComponentFixture<MemeberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
