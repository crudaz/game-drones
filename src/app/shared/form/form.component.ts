import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title: string;
  @Input() PlayerName: string;
  
  constructor() { }

  ngOnInit() {

  }

  changePlayer() {
    console.log('change player');
  }

}
