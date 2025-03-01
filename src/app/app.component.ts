import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForInputComponent } from "./for-input/for-input.component";
import { ChildCommComponent } from "./child-comm/child-comm.component";
import { ForOutputComponent } from "./for-output/for-output.component";
import { DynamicComponentComponent } from "./dynamic-component/dynamic-component.component";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ForInputComponent, FormsModule, ChildCommComponent, ForOutputComponent, DynamicComponentComponent, StructuralDirectivesComponent, PipesComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form';

  counter = 10;

  childCounter = 0;
  childCounterNumber: number | undefined;

  formData = {
    fName: ""
    , lName: ""
    , address: ""
    , city: ""
    , state: ""
    , zip: ""
  }

  onSubmit() {
    alert(`First name: ${this.formData.fName}`
      + `\nLast Name: ${this.formData.lName}`
      + `\nAddress: ${this.formData.address}`
      + `\nCity: ${this.formData.city}`
      + `\nState: ${this.formData.state}`
      + `\nZip: ${this.formData.zip}`
    );
  }
  

  inc() {
    this.counter++;
  }

  incChild() {
    this.childCounter++;
  }

  get(val:number) {
    this.childCounterNumber = val;
  }

  reset() {
    this.childCounterNumber = 0;
    this.childCounter = 0;
  }
}
