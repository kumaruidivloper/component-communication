import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Output() sendMessage: EventEmitter<String> = new EventEmitter<String>();

  constructor() {
  }

  sendData() {
    this.sendMessage.emit("send data from child to parent"); //emmiting the event.
  }

  ngOnInit() {
  }

}