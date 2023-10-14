import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModicicarTecnicoComponent } from './modicicar-tecnico.component';

describe('ModicicarTecnicoComponent', () => {
  let component: ModicicarTecnicoComponent;
  let fixture: ComponentFixture<ModicicarTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModicicarTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModicicarTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
