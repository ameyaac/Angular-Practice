import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInputComponent } from './for-input.component';

describe('ForInputComponent', () => {
  let component: ForInputComponent;
  let fixture: ComponentFixture<ForInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
