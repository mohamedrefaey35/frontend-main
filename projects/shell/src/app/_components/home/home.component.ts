import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  declare $ : any;
  
  // scroll top
  isShow!: boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({ 
      top: 0, left: 0, behavior: 'smooth' 
    });
  }

  constructor() { }

  // owl carousel 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
    0: {
        items: 1 
    },
    400: {
        items: 2
    },
    760: {
        items: 3
    },
    1000: {
        items: 4
    }
    },
    nav: true
  }
  
  ngOnInit(): void {
    // home -> section content tabs  
    $(document).ready(function(){
      $('.tab-switch li').click(function(){
          $(this).addClass('selected').siblings().removeClass('selected');
          $('.tabs-section .tabs-content > div').hide();
          $($(this).data('class')).show();
      });
    });
    // home -> section shuffle img 
    $(document).ready(function(){
      $('.prv_work ul li').on('click', function(){
          $(this).addClass('active').siblings().removeClass('active');
          if($(this).data('class') === 'all'){
              $('.shuffel-images .col-md').css('opacity',1);
          } else {
              $('.shuffel-images .col-md').css('opacity','.08');
              $($(this).data('class')).parent().css('opacity',1);
          }
      });
    });
    // scroll btn 
    // $(document).ready(function(){
    //   var scrollButton = $ ("#scrolltop");
    //   $(window).scroll(function(){
    //       if ($(this).scrollTop() >= 700) {
    //           scrollButton.show();
    //       } else { scrollButton.hide(); }
    //   });
    //   scrollButton.click(function(){
    //       $("html,body").animate({scrollTop : 0}, 600);
    //   });
    // });
}

}
