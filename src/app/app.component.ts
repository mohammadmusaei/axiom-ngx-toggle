import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

}
