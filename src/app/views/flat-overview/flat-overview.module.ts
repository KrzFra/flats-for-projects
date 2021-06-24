import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlatCardModule } from './../../shared/components/flat-card/flat-card.module';
import { NewFlatFormModule } from './../../shared/components/new-flat-form/new-flat-form.module';
import { FlatOverviewRoutingModule } from './flat-overview-routing.module';
import { FlatOverviewComponent } from './flat-overview.component';

@NgModule({
  declarations: [FlatOverviewComponent],
  imports: [
    CommonModule,
    FlatCardModule,
    FlatOverviewRoutingModule,
    NewFlatFormModule,
  ],
})
export class AppFlatOverviewModule {}
