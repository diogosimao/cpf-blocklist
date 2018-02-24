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
      'number': '',
      'blocked': true,
    });
    //this.cpfForm.valueChanges.subscribe(value => this.updateCpf(value));
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {cpf: Cpf}) => {
        if (data.cpf) {
          this.cpf = data.cpf;
          this.cpfForm.patchValue(data.cpf);
        }
      }
      );
  }

  updateCpf(values: Object) {
    (<any>Object).assign(this.cpf, values);
  }

  submitForm(){
    this.updateCpf(this.cpfForm.value);
    this.cpfService.save(this.cpf).subscribe(
      cpf => this.router.navigateByUrl('/modify/' + cpf.slug),
      err => {
        console.log(err);
      }
      )
  }

}
