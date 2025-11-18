import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorsListComponent } from './auditors-list.component';

describe('AuditorsListComponent', () => {
  let component: AuditorsListComponent;
  let fixture: ComponentFixture<AuditorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
