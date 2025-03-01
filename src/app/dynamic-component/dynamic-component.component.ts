import { Component } from '@angular/core';
import { CheckBioComponent } from './check-bio/check-bio.component';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [CheckBioComponent],
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.scss'
})
export class DynamicComponentComponent {

  user = {name:"Admin", "isAdmin":false}
  isValid = false;

  adminLogin() {
    this.user.isAdmin = true;
    this.isValid = true;
  }

  userLogin() {
    this.user.isAdmin = false;
    this.isValid = true;
  }

}
