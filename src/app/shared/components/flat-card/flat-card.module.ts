import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatCardComponent } from './flat-card.component';

@NgModule({
  declarations: [FlatCardComponent],
  imports: [CommonModule],
  exports: [FlatCardComponent]
})
export class FlatCardModule {}
