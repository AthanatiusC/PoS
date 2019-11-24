import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSComponent } from './po-s.component';

describe('PoSComponent', () => {
  let component: PoSComponent;
  let fixture: ComponentFixture<PoSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
