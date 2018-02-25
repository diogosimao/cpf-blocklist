import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfService } from '../shared';

@Component({
  selector: 'app-cpf-search',
  templateUrl: './cpf-search.component.html',
  styleUrls: ['./cpf-search.component.css']
})
export class CpfSearchComponent implements OnInit {
  cpfSearchForm: FormGroup;
  number: number;

  constructor(private router: Router, private fb: FormBuilder, private cpfService: CpfService)
  {
    this.cpfSearchForm = this.fb.group({
      'number': ['', Validators.required]
    });
  }

  submitForm(){
        this.router.navigateByUrl('/detail/' + this.cpfSearchForm.value.number);
    }

  ngOnInit() {
  }

}
