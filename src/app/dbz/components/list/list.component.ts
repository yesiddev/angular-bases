import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() characters: Character[] = [];
}
