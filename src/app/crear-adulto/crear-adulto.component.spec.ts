import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdultoComponent } from './crear-adulto.component';

describe('CrearAdultoComponent', () => {
  let component: CrearAdultoComponent;
  let fixture: ComponentFixture<CrearAdultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAdultoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
