import { 
  AfterViewInit, 
  ChangeDetectorRef, 
  Component, 
  ComponentFactoryResolver, 
  ComponentRef, 
  OnDestroy, 
  Type, 
  ViewChild 
} from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from 'src/app/directives/inserction.derictive';
import { DialogRef } from '../dialog-ref';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  @ViewChild(InsertionDirective) insert: InsertionDirective;

  private readonly _onClose = new Subject<any>();

  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;
  public onClose = this._onClose.asObservable();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef
  ) { }

  public ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  public ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  public onOverlayClicked(evt: MouseEvent): void {
    this.dialogRef.close();
  }

  public onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }

  public loadChildComponent(componentType: Type<any>): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insert.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  public close(): void {
    this._onClose.next();
  }
}
