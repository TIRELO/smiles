import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactPageRoutingModule} from './contact-page-routing.module';
import {ContactPageComponent} from './contact-page.component';

@NgModule({
    imports: [CommonModule, ContactPageRoutingModule],
    declarations: [ContactPageComponent]
})
export class ContactPageModule {}
