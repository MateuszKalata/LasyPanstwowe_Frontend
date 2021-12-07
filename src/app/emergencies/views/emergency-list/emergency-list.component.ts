import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {IShowEmergencyList} from '../../presenters/interfaces/show-emergency-list.interface';
import {EmergencyPresenter} from '../../presenters/emergency.presenter';
import {IEmergencyViews} from '../interfaces/emergency-views.interface';
import {XEmergencyNotificationList} from '../../../models/emergency-notification-list.model';
import {XEmergencyNotification} from '../../../models/emergency-notification.model';
import {XForestry} from '../../../models/forestry.model';
import {InjectorService} from '../../../injector.service';

@Component({
  selector: 'gmp-emergency-list',
  templateUrl: './emergency-list.component.html',
  styleUrls: ['./emergency-list.component.scss'],
})
export class EmergencyListComponent implements IEmergencyViews, OnInit {
  public displayedColumns: string[] = ['emergency_id', 'emergency_status', 'emergency_type', 'actions'];
  public emergencyDataSource: MatTableDataSource<XEmergencyNotification> = new MatTableDataSource<XEmergencyNotification>([]);

  private readonly emergencyPresenter: IShowEmergencyList;

  constructor(private changeDetector: ChangeDetectorRef,
              private injector: InjectorService) {
    this.emergencyPresenter = new EmergencyPresenter(this);
    this.injector._emergencyPresenter = this.emergencyPresenter;
  }

  public ngOnInit(): void {
    this.emergencyPresenter.onEmergencyListClicked();
  }

  public showEmergencyList(notifications: XEmergencyNotificationList): void {
    this.emergencyDataSource = new MatTableDataSource<XEmergencyNotification>(notifications.notifications);
    this.changeDetector.detectChanges();
  }

}
