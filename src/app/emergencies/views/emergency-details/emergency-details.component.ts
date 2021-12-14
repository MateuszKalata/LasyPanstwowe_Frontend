import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import {IEmergencyDetailViews} from '../interfaces/emergency-detail-views.interface';
import {XEmergencyNotificationDetails} from '../../../models/emergency-notification-details.model';
import {IShowEmergencyDetails} from '../../presenters/interfaces/show-emergency-details.interface';
import {IResolveEmergency} from '../../presenters/interfaces/resolve-emergency.interface';
import {MessageDialogComponent} from '../../../components/message-dialog/message-dialog.component';
import {EmergencyDetailsPresenter} from '../../presenters/emergency-details.presenter';
import { EmergencyTypeEnum } from '../../enums/emergency-type.enum';

@Component({
  selector: 'gmp-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.scss'],
})
export class EmergencyDetailsComponent implements OnInit, IEmergencyDetailViews {
  public emergencyDetails: XEmergencyNotificationDetails | undefined;
  public emergencyPresenter: IShowEmergencyDetails & IResolveEmergency;
  public emergencyId: number | undefined;
  public measurementsDataSource: MatTableDataSource<XEmergencyNotificationDetails> = new MatTableDataSource<XEmergencyNotificationDetails>([]);
  public measurementsColumns: string[] = ['emergency_value', 'emergency_timestamp'];
  public EmergencyTypeEnum: typeof EmergencyTypeEnum = EmergencyTypeEnum;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
    this.emergencyPresenter = new EmergencyDetailsPresenter(this);
  }

  public ngOnInit(): void {
    this.emergencyId = this.activatedRoute.snapshot.params.id;
    this.emergencyPresenter.onEmergencyDetailsClicked(this.emergencyId ?? 0);
  }

  public showEmergencyAlreadyResolvedMsg(): void {
    const dialogRef: MatDialogRef<MessageDialogComponent> =
      this.dialog.open(MessageDialogComponent);
    dialogRef.componentInstance.message = 'Błąd! Sytuacja kryzysowa jest już rozwiązana.';
  }

  public showEmergencyDetails(details: XEmergencyNotificationDetails): void {
    this.emergencyDetails = details;
    this.measurementsDataSource = new MatTableDataSource([details]);
  }

  public showEmergencySuccessfullyResolvedMsg(): void {
    const dialogRef: MatDialogRef<MessageDialogComponent> =
      this.dialog.open(MessageDialogComponent);
    dialogRef.componentInstance.message = 'Pomyślnie rozwiązano sytuację kryzysową.';
  }

  public onResolveEmergencyClicked(): void {
    this.emergencyPresenter.onResolveEmergencyClicked(this.emergencyId ?? 0);
  }

}
