import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogModule } from './features/dialog/dialog.module';
import { SimpleComponent } from './shared/simple/simple.component';

@NgModule({
  declarations: [
    AppComponent, SimpleComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
