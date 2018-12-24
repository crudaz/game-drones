import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerModel } from '../../model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title: string;
  @Input() playerName: string;
  @Input() moves;

  newData: PlayerModel;

  @Output() valueChanged = new EventEmitter<PlayerModel>();

  constructor() { }

  ngOnInit() {
    // this.valueChanged = this.moves[0];
  }

  onValueChanged(event: any) {
    this.newData = {
      name: this.playerName,
      move: event,
      point: 0
    };
    this.valueChanged.emit(this.newData);
  }

}
