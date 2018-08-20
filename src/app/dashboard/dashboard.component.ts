import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    logo: string;
    mithOrTrueLogo: string;
    smileLogo: string;
    newsLogo: string;

    constructor() {
        this.logo = 'assets/images/logo2.png';
        this.smileLogo = 'assets/images/smile.png';
        this.mithOrTrueLogo = 'assets/images/mitoverdade.png';
        this.newsLogo = 'assets/images/novidades.png';
    }

    ngOnInit() {
    }
}
