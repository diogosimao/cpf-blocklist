import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cpf } from '../cpf';
import { CpfService } from '../cpf.service';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {
  cpfForm: FormGroup;

  constructor(private cpfService: CpfService, private fb: FormBuilder)
  {
    this.cpfForm = this.fb.group({
      'cpf': ['', Validators.required],
      'blocked': [true, Validators.required]
    });
  }

  submitForm(){
    let info = this.cpfForm.value;
    console.log(info);
  }
  ngOnInit() {
  }

}
