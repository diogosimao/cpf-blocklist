import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CpfDetailComponent } from './cpf-detail.component';
import { EditableCpfResolver } from './editable-cpf-resolver.service';

const editorRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'modify',
        component: CpfDetailComponent
    },
    {
        path: 'editor/:slug',
        component: CpfDetailComponent,
        resolve: {
            cpf: EditableCpfResolver
        }
    }
]);

@NgModule({
    imports: [
        editorRouting,
    ],
    declarations: [
        CpfDetailComponent
    ],
    providers: [
        EditableCpfResolver
    ]
})

export class CpfDetailModule {}