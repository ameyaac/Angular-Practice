import { Component } from '@angular/core';
import { TemperatureConverterPipe } from '../temperature-converter.pipe';
import { FormsModule } from '@angular/forms';
import {
  DatePipe,
  LowerCasePipe,
  UpperCasePipe,
  SlicePipe,
  CurrencyPipe,
  PercentPipe,
  DecimalPipe,
} from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    SlicePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
    TemperatureConverterPipe,
    FormsModule
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  presentDate = new Date();

  value: number = 230970100;

  temperature: number = 32;
}
