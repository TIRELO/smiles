import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutPageComponent} from './about-page.component';
import {AboutPageRoutingModule} from './about-page-routing.module';

@NgModule({
    imports: [CommonModule, AboutPageRoutingModule],
    declarations: [AboutPageComponent]
})
export class AboutPageModule {}
