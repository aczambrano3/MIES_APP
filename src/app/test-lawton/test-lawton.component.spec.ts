import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLawtonComponent } from './test-lawton.component';

describe('TestLawtonComponent', () => {
  let component: TestLawtonComponent;
  let fixture: ComponentFixture<TestLawtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLawtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLawtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
