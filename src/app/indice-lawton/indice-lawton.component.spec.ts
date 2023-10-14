import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceLawtonComponent } from './indice-lawton.component';

describe('IndiceLawtonComponent', () => {
  let component: IndiceLawtonComponent;
  let fixture: ComponentFixture<IndiceLawtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceLawtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceLawtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
