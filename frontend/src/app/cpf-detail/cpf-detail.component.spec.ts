import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CpfDetailComponent } from './cpf-detail.component';
import { CpfService } from '../shared/services';

describe('CpfDetailComponent', () => {
  let component: CpfDetailComponent;
  let fixture: ComponentFixture<CpfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ CpfDetailComponent ],
      providers: [
        {
          provide: CpfService
        }
      ]
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
