import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfDetailComponent } from './cpf-detail.component';

describe('CpfDetailComponent', () => {
  let component: CpfDetailComponent;
  let fixture: ComponentFixture<CpfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
