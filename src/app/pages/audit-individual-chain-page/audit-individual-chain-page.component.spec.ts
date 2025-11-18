import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditIndividualChainPageComponent } from './audit-individual-chain-page.component';

describe('AuditIndividualChainPageComponent', () => {
  let component: AuditIndividualChainPageComponent;
  let fixture: ComponentFixture<AuditIndividualChainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditIndividualChainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditIndividualChainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
