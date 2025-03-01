import { Component } from '@angular/core';
import { CustomServiceService } from '../custom-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  items: string[] = [];
  newItem: string = '';

  constructor(private customService: CustomServiceService) {}

  pushItem() {
    this.customService.servicePushItem(this.newItem.trim());
    this.items = this.customService.serviceGetItems();
  }

  popItem() {
    this.customService.servicePopItem();
    this.items = this.customService.serviceGetItems();
  }

}
