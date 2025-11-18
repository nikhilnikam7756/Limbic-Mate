import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChainListComponent } from './user-chain-list.component';

describe('UserChainListComponent', () => {
  let component: UserChainListComponent;
  let fixture: ComponentFixture<UserChainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
