import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'gmp-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})
export class MessageDialogComponent {
  public loading: boolean = false;
  public message: string = '';

  constructor(private dialogRef: MatDialogRef<MessageDialogComponent>) {
  }

  public close(): void {
    this.dialogRef.close();
  }
}
