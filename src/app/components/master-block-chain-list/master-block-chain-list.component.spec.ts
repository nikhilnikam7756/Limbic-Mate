import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBLockChainListComponent } from './master-block-chain-list.component';

describe('MasterBLockChainListComponent', () => {
  let component: MasterBLockChainListComponent;
  let fixture: ComponentFixture<MasterBLockChainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterBLockChainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBLockChainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
