import { Component } from '@angular/core';

@Component({
  selector: 'app-for-input',
  standalone: true,
  imports: [],
  templateUrl: './for-input.component.html',
  styleUrl: './for-input.component.scss'
})
export class ForInputComponent {

  message: string = "";
  handleClick(event: Event) {
    this.message = (event.target as HTMLInputElement).value;
  }

}
