import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbesseProductsComponent } from './abesse-products.component';

describe('AbesseProductsComponent', () => {
  let component: AbesseProductsComponent;
  let fixture: ComponentFixture<AbesseProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbesseProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbesseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
