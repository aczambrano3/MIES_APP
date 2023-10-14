import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBarthelComponent } from './test-barthel.component';

describe('TestBarthelComponent', () => {
  let component: TestBarthelComponent;
  let fixture: ComponentFixture<TestBarthelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBarthelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBarthelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
