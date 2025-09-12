import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbesseOrdersComponent } from './abesse-orders.component';

describe('AbesseOrdersComponent', () => {
  let component: AbesseOrdersComponent;
  let fixture: ComponentFixture<AbesseOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbesseOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbesseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
