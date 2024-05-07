import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBasicPcComponent } from './buy-basic-pc.component';

describe('BuyBasicPcComponent', () => {
  let component: BuyBasicPcComponent;
  let fixture: ComponentFixture<BuyBasicPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyBasicPcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyBasicPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
