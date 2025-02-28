import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-comm',
  standalone: true,
  imports: [],
  templateUrl: './child-comm.component.html',
  styleUrl: './child-comm.component.scss'
})
export class ChildCommComponent {

  private _counter: number = 1;

  // @Input() counter: number = 0;

  @Input()
  
  get counterval(): number { return this._counter; }
  set counterval(val: number) {
    this._counter = val || 0;
    if (val > 25) this._counter = val % 25;
  }

}
