import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpCComponent } from './cmp-c.component';

describe('CmpCComponent', () => {
  let component: CmpCComponent;
  let fixture: ComponentFixture<CmpCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
