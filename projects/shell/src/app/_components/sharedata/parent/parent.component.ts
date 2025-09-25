import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  currentC2='coffe'; 
    c2 = ['mm', 'ss', 'aa'];
    addC2(newC2: string){
        this.c2.push(newC2);
        this.clearInput();
    }
    clearInput(){
        let input = <HTMLInputElement>document.getElementById('c2-input');
        input.value='';
    }
}
