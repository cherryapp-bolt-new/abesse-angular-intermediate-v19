import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbesseDashboardComponent } from './abesse-dashboard.component';

describe('AbesseDashboardComponent', () => {
  let component: AbesseDashboardComponent;
  let fixture: ComponentFixture<AbesseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbesseDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbesseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
