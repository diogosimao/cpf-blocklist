import { Component, OnInit } from '@angular/core';
import { Cpf } from '../cpf';

@Component({
  selector: 'app-cpf-detail',
  templateUrl: './cpf-detail.component.html',
  styleUrls: ['./cpf-detail.component.css']
})
export class CpfDetailComponent implements OnInit {
  cpf: Cpf = {
    slug: "08f656af-f6d0-46f4-8da6-89e6bede3725",
    number: 11505733333,
    status: true
  };

  constructor()
  {

  }

  ngOnInit() {
  }

}
