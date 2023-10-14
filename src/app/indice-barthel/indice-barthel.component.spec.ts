import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceBarthelComponent } from './indice-barthel.component';


describe('IndiceBarthelComponent', () => {
  let component: IndiceBarthelComponent;
  let fixture: ComponentFixture<IndiceBarthelComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceBarthelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceBarthelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
