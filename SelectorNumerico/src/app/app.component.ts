import { Component, ViewChild } from '@angular/core';
import { SelectorNumericoComponent } from './components/selector-numerico/selector-numerico.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selector2') selector2: SelectorNumericoComponent;
  @ViewChild('selector3') selector3: SelectorNumericoComponent;  

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }

  fijarSelector3(valor:number) {
    this.selector3.fijar(valor);
  }
}
