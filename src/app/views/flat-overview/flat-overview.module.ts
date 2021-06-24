import { FlatCardModule } from './../../shared/components/flat-card/flat-card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlatOverviewRoutingModule } from './flat-overview-routing.module';
import { FlatOverviewComponent } from './flat-overview.component';

@NgModule({
  declarations: [FlatOverviewComponent],
  imports: [CommonModule, FlatCardModule, FlatOverviewRoutingModule],
})
export class AppFlatOverviewModule {}
