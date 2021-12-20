import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';

import {TranslateService} from '@ngx-translate/core';
import {IEmergencyNotification} from './emergencies/views/interfaces/emergency-notification.interface';
import {XEmergencyNotification} from './models/emergency-notification.model';
import {MessageDialogComponent} from './components/message-dialog/message-dialog.component';
import {EmergencyPresenter} from './emergencies/presenters/emergency.presenter';
import {IShowEmergencyList} from './emergencies/presenters/interfaces/show-emergency-list.interface';
import {EmergencyTypeEnum} from './emergencies/enums/emergency-type.enum';

@Component({
  selector: 'gmp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, IEmergencyNotification {
  public title: string = 'gump-app';
  public emergencyPresenter: IShowEmergencyList;

  constructor(translate: TranslateService, private dialog: MatDialog) {
    translate.addLangs(['pl']);
    translate.setDefaultLang('pl');
    translate.use('pl');
    this.emergencyPresenter = new EmergencyPresenter(undefined, this);
  }

  public ngOnInit(): void {

  }

  public showEmergencyNotification(notifications: XEmergencyNotification[]): void {
    notifications.forEach(notification => {
      const dialogRef: MatDialogRef<MessageDialogComponent> =
        this.dialog.open(MessageDialogComponent);
      if (notification.sensor.type === EmergencyTypeEnum.FIRE || notification.sensor.type === EmergencyTypeEnum.TEMPERATURE) {
        dialogRef.componentInstance.message = 'Nowa sytuacja kryzysowa - pożar';
      } else if (notification.sensor.type === EmergencyTypeEnum.WIND) {
        dialogRef.componentInstance.message = 'Nowa sytuacja kryzysowa - wichura';
      } else {
        dialogRef.componentInstance.message = 'Nowa sytuacja kryzysowa, nieznany typ sytuacji: - ' + notification.sensor.type;
      }
    });
  }
}
