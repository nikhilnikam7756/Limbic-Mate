import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListComponentComponent } from './file-list-component.component';

describe('FileListComponentComponent', () => {
  let component: FileListComponentComponent;
  let fixture: ComponentFixture<FileListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
