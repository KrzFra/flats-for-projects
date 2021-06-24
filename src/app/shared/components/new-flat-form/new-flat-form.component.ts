import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { Address } from 'src/app/core/interfaces/address.interface';
import { Flat } from 'src/app/core/interfaces/flat.interface';
import { FlatServiceService } from './../../../core/services/flat-service/flat-service.service';

@Component({
  selector: 'app-new-flat-form',
  templateUrl: './new-flat-form.component.html',
  styleUrls: ['./new-flat-form.component.scss'],
})
export class NewFlatFormComponent {
  @HostBinding() class = 'app-new-flat-form';

  @Output() close = new EventEmitter<void>();

  newFlat: Partial<Flat> = {};
  address: Partial<Address> = {};

  constructor(private flatService: FlatServiceService) {}

  onClick_sendButton() {
    const thisFlat: Partial<Flat> = this.newFlat;
    thisFlat.address = this.address as Address;

    this.flatService.postFlat(thisFlat as Flat).subscribe(() => {
      this.close.next();
    });
  }
}
