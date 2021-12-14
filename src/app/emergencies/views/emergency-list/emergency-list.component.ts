import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {IShowEmergencyList} from '../../presenters/interfaces/show-emergency-list.interface';
import {EmergencyPresenter} from '../../presenters/emergency.presenter';
import {IEmergencyViews} from '../interfaces/emergency-views.interface';
import {XEmergencyNotification} from '../../../models/emergency-notification.model';
import {EmergencyStatusEnum} from '../../enums/emergency-status.enum';
import {EmergencyTypeEnum} from '../../enums/emergency-type.enum';

@Component({
  selector: 'gmp-emergency-list',
  templateUrl: './emergency-list.component.html',
  styleUrls: ['./emergency-list.component.scss'],
})
export class EmergencyListComponent implements IEmergencyViews, OnInit {
  public filterValue: string = 'all';
  public EmergencyStatusEnum: typeof EmergencyStatusEnum = EmergencyStatusEnum;
  public displayedColumns: string[] = ['emergency_id', 'emergency_status', 'emergency_type', 'actions'];
  public emergencyDataSource: MatTableDataSource<XEmergencyNotification> = new MatTableDataSource<XEmergencyNotification>([]);
  public EmergencyTypeEnum: typeof EmergencyTypeEnum = EmergencyTypeEnum;

  private emergencyPresenter: IShowEmergencyList | undefined;

  constructor() {
    this.emergencyPresenter = new EmergencyPresenter(this);
  }

  public ngOnInit(): void {
    this.emergencyPresenter?.onEmergencyListClicked();
  }

  public showEmergencyList(notifications: XEmergencyNotification[]): void {
    notifications = notifications.sort((a, b) => a.emergency_id - b.emergency_id);
    this.emergencyDataSource = new MatTableDataSource<XEmergencyNotification>(notifications);
    this.emergencyDataSource.filterPredicate = (data, filter: string): boolean => {
      return data.emergency_status.toString().includes(filter);
    };
    this.onFilterSelected(this.filterValue);
  }

  public onFilterSelected(value: any): void {
    if (value === 'all') {
      this.emergencyDataSource.filter = '';
    } else {
      this.emergencyDataSource.filter = value;
    }
  }

}
