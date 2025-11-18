import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorHomePageComponent } from './auditor-home-page.component';

describe('AuditorHomePageComponent', () => {
  let component: AuditorHomePageComponent;
  let fixture: ComponentFixture<AuditorHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
