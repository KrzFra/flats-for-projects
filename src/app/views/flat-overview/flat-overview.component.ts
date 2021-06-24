import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from 'src/app/core/interfaces/flat.interface';
import { FlatServiceService } from './../../core/services/flat-service/flat-service.service';

@Component({
  selector: 'app-flat-overview',
  templateUrl: './flat-overview.component.html',
  styleUrls: ['./flat-overview.component.scss'],
})
export class FlatOverviewComponent {
  @HostBinding() class = 'app-flat-overview';

  flats$: Observable<Flat[]> = this.flatService.getFlats();

  constructor(private flatService: FlatServiceService) {}
}
