import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cpf } from '../shared/models';
import { CpfService } from '../shared/services';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {
  cpfForm: FormGroup;
  cpf: Cpf = new Cpf();

  constructor(private router: Router, private fb: FormBuilder, private cpfService: CpfService)
  {
    this.cpfForm = this.fb.group({
      'number': ['', Validators.required],
      'blocked': [true, Validators.required]
    });
  }

  createCpf(values: Object) {
    (<any>Object).assign(this.cpf, values);
  }

  submitForm(){
    this.createCpf(this.cpfForm.value);
    this.cpfService.save(this.cpf).subscribe(    
      cpf => {
        this.router.navigateByUrl('/detail/' + cpf.number);
            },
      err => {
        console.log(err);
      }
      )
  }

  ngOnInit() {
  }

}
