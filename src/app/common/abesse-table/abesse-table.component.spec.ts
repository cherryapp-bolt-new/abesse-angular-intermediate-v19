import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbesseTableComponent } from './abesse-table.component';

describe('AbesseTableComponent', () => {
  let component: AbesseTableComponent;
  let fixture: ComponentFixture<AbesseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbesseTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbesseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
