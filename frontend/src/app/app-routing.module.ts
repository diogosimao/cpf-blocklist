import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpfComponent } from './cpf/cpf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CpfDetailComponent } from './cpf-detail/cpf-detail.component';
import { EditableCpfResolver } from './cpf-detail/editable-cpf-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/cpf', pathMatch: 'full' },
  { path: 'detail', component: CpfDetailComponent },
  { path: 'detail/:number', component: CpfDetailComponent, resolve: {cpf: EditableCpfResolver}},
  { path: 'cpf', component: CpfComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
          EditableCpfResolver
          ]
})
export class AppRoutingModule {}
