import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Cpf, CpfService } from '../shared';


@Component({
  selector: 'app-cpf-detail',
  templateUrl: './cpf-detail.component.html',
  styleUrls: ['./cpf-detail.component.css']
})
export class CpfDetailComponent implements OnInit {
  cpf: Cpf = new Cpf();
  cpfForm: FormGroup;

  constructor(
    private cpfService: CpfService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    )
  {
    this.cpfForm = this.fb.group({
      'slug':'',
      'number': '',
      'blocked': true,
    });
    //this.cpfForm.valueChanges.subscribe(value => this.updateCpf(value));
  }

  ngOnInit() {
    this.route.data.subscribe(value => this.updateCpf(value.cpf));
  }

  updateCpf(values: Object) {
    if (values)
    {
      (<any>Object).assign(this.cpf, values);
      this.cpfForm.patchValue(values);
    }
  }

  submitForm(){
    this.updateCpf(this.cpfForm.value);
    this.cpfService.save(this.cpf).subscribe(
      cpf => this.router.navigateByUrl('/detail/' + cpf.number),
      err => {
        console.log(err);
      }
      )
  }

}
