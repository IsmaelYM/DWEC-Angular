import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C08PadreComponent } from './c08-padre.component';

describe('C08PadreComponent', () => {
  let component: C08PadreComponent;
  let fixture: ComponentFixture<C08PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C08PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C08PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
