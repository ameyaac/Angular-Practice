import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommComponent } from './child-comm.component';

describe('ChildCommComponent', () => {
  let component: ChildCommComponent;
  let fixture: ComponentFixture<ChildCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCommComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
