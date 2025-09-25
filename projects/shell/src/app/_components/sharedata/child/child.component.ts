import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  
  @Input() c2 = 'tea';
  @Output() newC2Event = new EventEmitter<string>() 
  addNewC2(value: string){
      this.newC2Event.emit(value);
  }
}
