import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOutputComponent } from './for-output.component';

describe('ForOutputComponent', () => {
  let component: ForOutputComponent;
  let fixture: ComponentFixture<ForOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
