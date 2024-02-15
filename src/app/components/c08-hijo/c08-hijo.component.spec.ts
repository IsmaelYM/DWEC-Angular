import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C08HijoComponent } from './c08-hijo.component';

describe('C08HijoComponent', () => {
  let component: C08HijoComponent;
  let fixture: ComponentFixture<C08HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C08HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C08HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
