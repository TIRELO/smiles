import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmilePageRoutingModule} from './smile-page-routing.module';
import {SmilePageComponent} from './smile-page.component';


@NgModule({
    imports: [CommonModule, SmilePageRoutingModule],
    declarations: [SmilePageComponent]
})
export class SmilePageModule {}
