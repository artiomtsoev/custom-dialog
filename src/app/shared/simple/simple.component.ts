import { Component, Input } from '@angular/core';
import { DialogConfig } from '../../features/dialog/dialog-config';
import { DialogRef } from '../../features/dialog/dialog-ref';

@Component({
  selector: 'simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent  {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  public onClose(): void {
    this.dialog.close('onClose value');
  }
}
