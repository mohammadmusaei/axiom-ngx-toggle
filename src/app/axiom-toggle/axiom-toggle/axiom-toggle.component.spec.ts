import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomToggleComponent } from './axiom-toggle.component';

describe('AxiomToggleComponent', () => {
  let component: AxiomToggleComponent;
  let fixture: ComponentFixture<AxiomToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
