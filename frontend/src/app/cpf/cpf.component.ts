import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private cpfService: CpfService)
  {
    this.cpfForm = this.fb.group({
      'cpf': ['', Validators.required],
      'blocked': [{value: true, disabled: true}, , Validators.required]
    });
  }

  submitForm(){
    let info = this.cpfForm.value;
    console.log(info);
  }
  ngOnInit() {
  }

}
