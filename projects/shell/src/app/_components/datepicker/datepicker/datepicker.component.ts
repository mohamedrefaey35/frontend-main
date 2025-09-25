import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  declare $ : any;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.tab-switch button').click(function(){
          $(this).addClass('selected').siblings().removeClass('selected');
          $('.tabs-content > div').hide();
          $($(this).data('class')).show();
      });
    });
  }
}
