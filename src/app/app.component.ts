import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form = new FormGroup({});
  controls = [];
  toggles = [
    {
      model : true,
      theme : "pink",
      mode : "round"
    },
    {
      model : false,
      theme : "yellow",
      mode : "round"
    },
    {
      model : false,
      theme : "indigo",
      mode : "round"
    },
    {
      model : true,
      theme : "brown",
      mode : "round"
    },
    {
      model : true,
      theme : "red",
      mode : "flat"
    },
    {
      model : false,
      theme : "purple",
      mode : "flat"
    }
  ]

  
  ngOnInit(): void {
    [...this.toggles].forEach((toggle,index)=>{
      var fcontrol = new FormControl();
      fcontrol.setValue(true);
      this.controls.push(`_t${index}`);
      this.form.addControl(`_t${index}`,fcontrol);
    });
  }


}
