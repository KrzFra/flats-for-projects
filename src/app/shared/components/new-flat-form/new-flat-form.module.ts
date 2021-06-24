import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewFlatFormComponent } from './new-flat-form.component';

@NgModule({
  declarations: [NewFlatFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [NewFlatFormComponent],
})
export class NewFlatFormModule {}
