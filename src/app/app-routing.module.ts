import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { MithtruePageModule } from './mithtrue-page/mithtrue-page.module';
import { SmilePageModule } from './smile-page/smile-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';
import { NotFoundModule } from './not-found/not-found.module';

export function loadDashboardModule () { return DashboardModule; }
export function loadMithtruePageModule () { return MithtruePageModule; }
export function loadSmilePageModule () { return SmilePageModule; }
export function loadAboutPageModule () { return AboutPageModule; }
export function loadContactPageModule () { return ContactPageModule; }
export function loadNotFoundModule () { return NotFoundModule; }

const routes: Routes = [
    { path: '', loadChildren: loadDashboardModule },
    { path: 'mith-true', loadChildren: loadMithtruePageModule },
    { path: 'smile', loadChildren: loadSmilePageModule },
    { path: 'about', loadChildren: loadAboutPageModule },
    { path: 'contact', loadChildren: loadContactPageModule },
    { path: 'not-found', loadChildren: loadNotFoundModule },
    { path: '**', redirectTo: 'not-found' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
