import { Component, OnInit } from '@angular/core';
import { v1 as uuidv1 } from 'uuid';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  uuid_1 = [];
  constructor() { }

  ngOnInit() {
  }

  generate() {
    this.uuid_1.push(uuidv1());
  }

}
