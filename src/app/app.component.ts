import {Component} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'gmp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'gump-app';

  constructor(translate: TranslateService) {
    translate.addLangs(['pl']);
    translate.setDefaultLang('pl');
    translate.use('pl');
  }
}
