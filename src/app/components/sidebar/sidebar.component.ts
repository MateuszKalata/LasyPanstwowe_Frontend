import {Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

import {filter} from 'rxjs/operators';

import {TabConfigurationModel} from '../../models/tab-configuration.model';

@Component({
  selector: 'gmp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  public tabsConfig: TabConfigurationModel[] = [
    {
      label: 'Strona główna',
      url: 'welcome',
      active: false,
    },
    {
      label: 'Leśnictwa',
      url: 'forestries',
      active: false,
    },
    {
      label: 'Nieprzypisane czujniki',
      url: 'sensors',
      active: false,
    },
    {
      label: 'Sytuacje kryzysowe',
      url: 'emergencies',
      active: false,
    },
  ];

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          const url: string = event.url.substr(1, event.url.length - 1);
          const activeTab: TabConfigurationModel | undefined = this.tabsConfig.find(link => link.url === url);
          if (activeTab) {
            this.tabsConfig.forEach(link => {
              link.active = false;
            });
            activeTab.active = true;
          }
        }
      });
  }

  public redirect(link: TabConfigurationModel): void {
    this.tabsConfig.forEach(tc => {
      tc.active = false;
    });
    link.active = true;
    this.router.navigate([link.url]);
  }
}
