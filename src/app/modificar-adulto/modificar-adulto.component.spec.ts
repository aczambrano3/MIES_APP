import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAdultoComponent } from './modificar-adulto.component';

describe('ModificarAdultoComponent', () => {
  let component: ModificarAdultoComponent;
  let fixture: ComponentFixture<ModificarAdultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAdultoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
