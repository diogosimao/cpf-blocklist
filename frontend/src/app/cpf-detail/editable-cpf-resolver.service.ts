import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from
'@angular/router';
import { Observable } from 'rxjs/Rx';
import { Cpf, CpfService } from '../shared';

@Injectable()
export class EditableCpfResolver implements Resolve<Cpf> {
    constructor(private cpfService: CpfService, private router: Router){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.cpfService.get(route.params['slug']).map( cpf => { return cpf }).catch((err) => this.router.navigateByUrl('/'));
    }
}
