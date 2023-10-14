import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEscalaYesavageComponent } from './test-escala-yesavage.component';

describe('TestEscalaYesavageComponent', () => {
  let component: TestEscalaYesavageComponent;
  let fixture: ComponentFixture<TestEscalaYesavageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEscalaYesavageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEscalaYesavageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
