import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EIDComponent } from './eid.component';

describe('EIDComponent', () => {
  let component: EIDComponent;
  let fixture: ComponentFixture<EIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
