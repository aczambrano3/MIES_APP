import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaYesavageComponent } from './escala-yesavage.component';

describe('EscalaYesavageComponent', () => {
  let component: EscalaYesavageComponent;
  let fixture: ComponentFixture<EscalaYesavageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaYesavageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaYesavageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
