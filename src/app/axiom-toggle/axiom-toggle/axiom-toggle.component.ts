import { Component, OnInit, ViewEncapsulation, Renderer2, ElementRef, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ax-toggle',
  templateUrl: './axiom-toggle.component.html',
  styleUrls: ['./axiom-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AxiomToggleComponent),
      multi: true
    }
  ]
})
export class AxiomToggleComponent implements OnInit, ControlValueAccessor {

  @Input() axMode: 'flat' | 'round';
  @Input() axColor: string;
  @Input() set ngModel(ngModel: boolean) {
    this._ngModel = ngModel;
  }
  get ngModel() {
    return this._ngModel;
  }
  @Output() ngModelChange = new EventEmitter<boolean>();

  private _ngModel: boolean;

  constructor() { }

  ngOnInit() {
    this.axMode = this.axMode || 'round';
  }

  onChange(){
    this.propagateChange(this.ngModel);
  }

  public writeValue(obj: boolean) {
    this.ngModel = obj;
  }

  public registerOnChange(fn: (_: boolean) => void): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public propagateChange = (_: boolean) => { }
  public onTouched = () => { };

}
