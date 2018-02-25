import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { Cpf } from '../models';

@Injectable()
export class CpfService {

  constructor( private apiService: ApiService ) { }

  get(number): Observable<Cpf> {
      return this.apiService.get('/cpf/' + number + '/').map(data => data);
  }

  save(cpf): Observable<Cpf> {
      if (cpf.slug) {
          return this.apiService.put('/cpf/' + cpf.number + '/', cpf).map(data => data);
      }
      else {
          return this.apiService.post('/cpf/', cpf).map(data => data);
      }
  }
}
