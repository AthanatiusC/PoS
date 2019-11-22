import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMasterComponent } from './config-master.component';

describe('ConfigMasterComponent', () => {
  let component: ConfigMasterComponent;
  let fixture: ComponentFixture<ConfigMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
