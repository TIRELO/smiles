import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { StatModule } from '../shared';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NewsRoutingModule,
        StatModule
    ],
    declarations: [
        NewsComponent
    ]
})
export class NewsModule {}
