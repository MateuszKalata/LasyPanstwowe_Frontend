import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import {IEmergencyDetailViews} from '../interfaces/emergency-detail-views.interface';
import {IShowEmergencyDetails} from '../../presenters/interfaces/show-emergency-details.interface';
import {IResolveEmergency} from '../../presenters/interfaces/resolve-emergency.interface';
import {MessageDialogComponent} from '../../../components/message-dialog/message-dialog.component';
import {EmergencyDetailsPresenter} from '../../presenters/emergency-details.presenter';
import {XEmergencyMeasurement} from '../../../models/emergency-measurement.model';
import {XEmergencyNotification} from '../../../models/emergency-notification.model';
import {EmergencyStatusEnum} from '../../enums/emergency-status.enum';

@Component({
  selector: 'gmp-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.scss'],
})
export class EmergencyDetailsComponent implements OnInit, IEmergencyDetailViews {
  public emergencyDetails: XEmergencyNotification | undefined;
  public emergencyPresenter: IShowEmergencyDetails & IResolveEmergency;
  public emergencyId: number | undefined;
  public measurementsDataSource: MatTableDataSource<XEmergencyMeasurement> = new MatTableDataSource<XEmergencyMeasurement>([]);
  public measurementsColumns: string[] = ['value', 'timestamp'];
  public EmergencyStatusEnum: typeof EmergencyStatusEnum = EmergencyStatusEnum;

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

  public showEmergencyDetails(details: XEmergencyNotification): void {
    this.emergencyDetails = details;
    this.measurementsDataSource = new MatTableDataSource(details.measurements);
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
