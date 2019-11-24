import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinstockComponent } from './minstock.component';

describe('MinstockComponent', () => {
  let component: MinstockComponent;
  let fixture: ComponentFixture<MinstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
