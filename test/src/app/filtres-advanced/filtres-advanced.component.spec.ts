import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltresAdvancedComponent } from './filtres-advanced.component';

describe('FiltresAdvancedComponent', () => {
  let component: FiltresAdvancedComponent;
  let fixture: ComponentFixture<FiltresAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltresAdvancedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltresAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
