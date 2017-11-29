import { Output, Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() startGame = new EventEmitter();
  @Input() view: string;

  settings: any = {};

  constructor() {}

  ngOnInit() {}
}
