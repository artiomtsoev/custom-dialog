import { Component } from '@angular/core';
import { DialogService } from './features/dialog/sevices/dialog.service';
import { SimpleComponent } from './shared/simple/simple.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialogService: DialogService) {
    const dialogRef = this.dialogService.open(SimpleComponent, {
      data: { someData: 'Some data!' }
    });

    dialogRef.afterClosed.subscribe(closedState => {
      console.log('Dialog closed', closedState);
    });
  }
}
