import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MithtruePageComponent} from './mithtrue-page.component';
import {MithtruePageRoutingModule} from './mithtrue-page-routing.module';

@NgModule({
    imports: [CommonModule, MithtruePageRoutingModule],
    declarations: [MithtruePageComponent]
})
export class MithtruePageModule {}
