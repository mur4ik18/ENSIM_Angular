import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePCComponent } from './choice-pc.component';

describe('ChoicePCComponent', () => {
  let component: ChoicePCComponent;
  let fixture: ComponentFixture<ChoicePCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoicePCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoicePCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
