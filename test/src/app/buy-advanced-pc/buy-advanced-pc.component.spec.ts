import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAdvancedPcComponent } from './buy-advanced-pc.component';

describe('BuyAdvancedPcComponent', () => {
  let component: BuyAdvancedPcComponent;
  let fixture: ComponentFixture<BuyAdvancedPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyAdvancedPcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyAdvancedPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
