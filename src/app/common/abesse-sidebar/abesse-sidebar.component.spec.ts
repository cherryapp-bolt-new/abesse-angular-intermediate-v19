import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbesseSidebarComponent } from './abesse-sidebar.component';

describe('AbesseSidebarComponent', () => {
  let component: AbesseSidebarComponent;
  let fixture: ComponentFixture<AbesseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbesseSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbesseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
