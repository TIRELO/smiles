import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MithtruePageComponent} from './mithtrue-page.component';

const routes: Routes = [
    {
        path: '',
        component: MithtruePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MithtruePageRoutingModule {}
