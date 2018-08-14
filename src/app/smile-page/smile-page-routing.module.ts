import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmilePageComponent} from './smile-page.component';

const routes: Routes = [
    {
        path: '',
        component: SmilePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmilePageRoutingModule {}
