# AxiomNgxToggle

### Online Demo

[Usage Demo](http://app.musaei.me/angular/toggle/)

### Installation

##### Install component package from npm :

`npm install axiom-toggle`

##### Import component module :

```typescript
import { AxiomToggleModule } from 'axiom-toggle';

...

@NgModule({
  imports: [
    BrowserModule,
    AxiomToggleModule,
  ], 
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

...

```

### Usage

Use `ngModel`

```html

<ax-toggle [(ngModel)]="model" 
  axMode="round"
  axColor="indigo">
</ax-toggle>

```

Use `ReactiveFroms`

```html

<ax-toggle formControlName="model" 
  axMode="round"
  axColor="indigo">
</ax-toggle>

```

### @Input() Params

| Name | Usage |
| ------ | ------ |
| axMode | round,flat (default=flat) |
| axColor | purple,indigo,pink,red,cyan,green,yellow,amber,orange,brown |

### @Output() Params

| Name | Usage |
| ------ | ------ |
| ngModelChange | Model's change default event |


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

[MIT](http://opensource.org/licenses/MIT)
