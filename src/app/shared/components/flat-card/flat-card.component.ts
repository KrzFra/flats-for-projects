import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { Flat } from 'src/app/core/interfaces/flat.interface';

@Component({
  selector: 'app-flat-card',
  templateUrl: './flat-card.component.html',
  styleUrls: ['./flat-card.component.scss'],
})
export class FlatCardComponent {
  @HostBinding() class = 'app-flat-card';

  @Input() flat!: Flat;

  @Output() delete = new EventEmitter<void>();
}
