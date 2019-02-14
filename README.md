# Axiom ngx-toggle

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

## License

[MIT](http://opensource.org/licenses/MIT)
