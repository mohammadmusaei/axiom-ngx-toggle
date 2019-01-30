import { Component, OnInit, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: '[ax-toggle]',
  templateUrl: './axiom-toggle.component.html',
  styleUrls: ['./axiom-toggle.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AxiomToggleComponent implements OnInit {

  constructor(private _renderer : Renderer2,private _element : ElementRef) { }

  ngOnInit() {
    var parent = this._element.nativeElement.parentElement;
    this._renderer.addClass(this._element.nativeElement, "checkbox");
    //create wrapper
    var wrapper = this._renderer.createElement("div");
    this._renderer.addClass(wrapper, "button");
    this._renderer.addClass(wrapper, "r");
    this._renderer.addClass(wrapper, "checkbox-button");
    this._renderer.appendChild(wrapper, this._element.nativeElement);
    //add siblings
    var ks = this._renderer.createElement("div");
    this._renderer.addClass(ks, "ax-toggle-button");
    var layer = this._renderer.createElement("div");
    this._renderer.addClass(layer, "ax-toggle-layer");
    this._renderer.appendChild(wrapper, ks);
    this._renderer.appendChild(wrapper, layer);

    this._renderer.insertBefore(parent, wrapper, parent.firstElementChild);
  }

}
