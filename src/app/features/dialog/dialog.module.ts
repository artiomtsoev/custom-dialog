import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InsertionDirective } from "../../directives/inserction.derictive";
import { DialogComponent } from './dialog-component/dialog.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DialogComponent,
        InsertionDirective,
    ],
})
export class DialogModule {
}