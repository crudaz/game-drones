import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title: string;
  @Input() playerName: string;
  @Input() moves;
  selectedMove: string;
  constructor() { }

  ngOnInit() {
    this.selectedMove = this.moves[0];
  }

  changePlayer() {
    console.log('change player');
  }

}
