import { Component, HostBinding, OnInit } from '@angular/core';
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
  displayNewFlatForm = false;

  constructor(private flatService: FlatServiceService) {}

  ngOnInit() {
    this.getFlats();
  }

  deleteFlat(id: string): void {
    this.flatService.deleteFlat(id).subscribe(() => {
      this.getFlats();
    });
  }

  onClose_newFlatForm() {
    this.displayNewFlatForm = false;
    this.getFlats();
  }

  private getFlats() {
    this.flatService.getFlats().subscribe((flats) => (this.flats = flats));
  }
}
