import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss'
})
export class StructuralDirectivesComponent {

  isLoggedIn: boolean = true;

  name: string = "guest";

  dark = "";

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  employees: any[] = [
    { id: 100, name: "Ameyaa", location: "Bangalore" }
    , { id: 101, name: "Hari", location: "Bangalore" }
    , { id: 102, name: "Gokul", location: "Bangalore" }
    , { id: 103, name: "Tilak", location: "Bangalore" }
    , { id: 104, name: "Vageesh", location: "Bangalore" }
  ]

  changeBg() {
    if(this.dark == "" || this.dark == "toTeal") {
      this.dark = "toDark";
    }
    else {
      this.dark = "toTeal";
    }
  }

}
