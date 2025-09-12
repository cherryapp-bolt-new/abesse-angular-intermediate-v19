import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaEditorComponent } from './cinema-editor.component';

describe('CinemaEditorComponent', () => {
  let component: CinemaEditorComponent;
  let fixture: ComponentFixture<CinemaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
