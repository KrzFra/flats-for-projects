import { Component, OnInit } from '@angular/core';
import { Flat } from './core/interfaces/flat.interface';
import { FlatServiceService } from './core/services/flat-service/flat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  flats: Flat[] = [];

  constructor(private flatService: FlatServiceService) {}

  ngOnInit(): void {
    this.flatService.getFlats().subscribe((flats) => {
      this.flats = flats;
    });
  }
}
