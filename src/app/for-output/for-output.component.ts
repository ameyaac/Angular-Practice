import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-for-output',
  standalone: true,
  imports: [],
  templateUrl: './for-output.component.html',
  styleUrl: './for-output.component.scss'
})
export class ForOutputComponent {

  @Input() counterFromParent: number = 0;

  @Output() counterEventFromParent = new EventEmitter<number>();

  passCounterToParent() {
    this.counterEventFromParent.emit(this.counterFromParent);
  }

}
