import {Component} from '@angular/core';
import {GoogleAnalyticsService} from './shared/services/google-analytics.service';

export interface INavButton {
    url: string;
    text: string;
    icon: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public title = 'My playground';
    public fillerNav: INavButton [] = [
        {
            url: '/',
            text: 'Home',
            icon: 'house',
        },
        {
            url: 'stories',
            text: 'Hsk stories',
            icon: 'book',
        },
        {
            url: 'songs/songs5',
            text: 'Lyrics 5',
            icon: 'speaker',
        },
    ];

    constructor(private googleAnalytics: GoogleAnalyticsService) {
        googleAnalytics.init();
    }

}