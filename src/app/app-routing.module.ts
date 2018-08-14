import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MithtruePageModule } from './mithtrue-page/mithtrue-page.module';
import { SmilePageModule } from './smile-page/smile-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';
import { NotFoundModule } from './not-found/not-found.module';

const routes: Routes = [
    { path: '', loadChildren: () => DashboardModule },
    { path: 'mith-true', loadChildren: () => MithtruePageModule },
    { path: 'smile', loadChildren: () => SmilePageModule },
    { path: 'about', loadChildren: () => AboutPageModule },
    { path: 'contact', loadChildren: () => ContactPageModule },
    { path: 'not-found', loadChildren: () => NotFoundModule },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
