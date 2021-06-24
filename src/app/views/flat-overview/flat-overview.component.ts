import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from 'src/app/core/interfaces/flat.interface';
import { FlatServiceService } from './../../core/services/flat-service/flat-service.service';

@Component({
  selector: 'app-flat-overview',
  templateUrl: './flat-overview.component.html',
  styleUrls: ['./flat-overview.component.scss'],
})
export class FlatOverviewComponent implements OnInit {
  @HostBinding() class = 'app-flat-overview';

  flats: Flat[] = [];

  constructor(private flatService: FlatServiceService) {}

  ngOnInit() {
    this.flatService.getFlats().subscribe((flats) => (this.flats = flats));
  }

  deleteFlat(id: string): void {
    this.flatService.deleteFlat(id).subscribe(() => {
      this.flatService.getFlats().subscribe((flats) => {
        this.flats = flats;
      });
    });
  }
}
