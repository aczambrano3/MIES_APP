import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMinimentalComponent } from './test-minimental.component';

describe('TestMinimentalComponent', () => {
  let component: TestMinimentalComponent;
  let fixture: ComponentFixture<TestMinimentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMinimentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMinimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
