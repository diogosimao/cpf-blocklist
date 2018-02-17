import { Component, OnInit } from '@angular/core';
import { Cpf } from '../cpf';
import { CpfService } from '../cpf.service';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {
  cpf: Cpf = {
    slug: "",
    number: 11505733333,
    status: true
  };

  constructor(private cpfService: CpfService)
  {

  }

  ngOnInit() {
  }

}
