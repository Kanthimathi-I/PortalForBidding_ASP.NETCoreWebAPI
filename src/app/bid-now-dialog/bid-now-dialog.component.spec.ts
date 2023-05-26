import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidNowDialogComponent } from './bid-now-dialog.component';

describe('BidNowDialogComponent', () => {
  let component: BidNowDialogComponent;
  let fixture: ComponentFixture<BidNowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidNowDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidNowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
