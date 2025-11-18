import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorNavBarComponent } from './auditor-nav-bar.component';

describe('AuditorNavBarComponent', () => {
  let component: AuditorNavBarComponent;
  let fixture: ComponentFixture<AuditorNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
