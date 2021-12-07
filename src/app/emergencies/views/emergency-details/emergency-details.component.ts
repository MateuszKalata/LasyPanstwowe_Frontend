import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import {IEmergencyDetailViews} from '../interfaces/emergency-detail-views.interface';
import {XEmergencyNotificationDetails} from '../../../models/emergency-notification-details.model';
import {IShowEmergencyDetails} from '../../presenters/interfaces/show-emergency-details.interface';
import {IResolveEmergency} from '../../presenters/interfaces/resolve-emergency.interface';
import {InjectorService} from '../../../injector.service';
import {MessageDialogComponent} from '../../../components/message-dialog/message-dialog.component';
import {XSensorMeasurement} from '../../../models/sensor-measurement.model';

@Component({
  selector: 'gmp-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.scss'],
})
export class EmergencyDetailsComponent implements OnInit, IEmergencyDetailViews {
  public emergencyDetails: XEmergencyNotificationDetails | undefined;
  public emergencyPresenter: IShowEmergencyDetails & IResolveEmergency;
  public emergencyId: number | undefined;
  public measurementsDataSource: MatTableDataSource<XSensorMeasurement> = new MatTableDataSource<XSensorMeasurement>([]);
  public measurementsColumns: string[] = ['value', 'timestamp'];

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private injector: InjectorService,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
    this.emergencyPresenter = this.injector.emergencyPresenter(this);
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
    this.measurementsDataSource = new MatTableDataSource(details.measurements);
    this.changeDetectorRef.detectChanges();
  }

  public showEmergencySuccessfullyResolvedMsg(): void {
    const dialogRef: MatDialogRef<MessageDialogComponent> =
      this.dialog.open(MessageDialogComponent);
    dialogRef.componentInstance.message = 'Pomyślnie rozwiązano sytuację kryzysową.';
  }

}
