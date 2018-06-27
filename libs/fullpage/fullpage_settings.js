// Set is mobile or desctop.
      var isMobile = {
        Android: function() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };

      $(document).ready(function() {
        if(isMobile.any()){
          $('.fullpage_dots').hide()
        } else {
          $('#fullpage').fullpage({
            slidesNavigation: true,
            fadingEffect: true,
            menu: '.mi_header',
            onLeave: function(origin, destination, direction){
             $($('.fullpage_dots line')[destination-1]).attr('x1',0,1500)
// Add numbers 
             if (destination < 10 ) {
               $('.slide_num')[destination-1].innerHTML = '0'+destination
             } else {
              $('.slide_num')[destination-1].innerHTML = destination
             }

// Remove numbers from others;
$.each($('.slide_num'),function(i,v){ 
  if ( i != destination-1 ) { 
    $('.slide_num')[i].innerHTML = '';
    $($('.fullpage_dots line')[i]).attr('x1',20,1500)
    $($('.fullpage_dots line')[i]).attr('x1',20,1500)
    $($('.fullpage_dots .item')[i]).css({
        backgroundColor : 'inherit'
    })
  } else  {
    console.log('i',i);
    $($('.fullpage_dots .item')[i]).css({
        backgroundColor : '#ffdd15'
    }) 
  }

})
              // Add Styles
              var leavingSection = this;   
              if (destination != 1 ) {
                $('.mi_header .mi_header_info').css({
                  color: 'black'
                });
                $('.mi_logo_desc').css({
                  'border-right': '1px solid black'
                });
                $('.mi_menu_btn').css({
                  'border': '1px solid black',
                  'color': 'black',
                  background: 'url(img/ic_menu_b.svg) no-repeat center/auto 13px'
                });
                // left-side dot's menu
                $('.fullpage_dots .item').css({
                  'color' : 'rgb(88, 89, 91)',                
                })
                 $('.fullpage_dots line').attr('stroke','rgb(88, 89, 91)')
              } else {
                console.log(destination,'destination !!!');
                $('.fullpage_dots line').attr('stroke','white')
                $('.mi_header .mi_header_info').css({
                  color: '#fff'
                })
                $('.mi_logo_desc').css({
                  'border-right': '1px solid #fff',
                });
                $('.mi_menu_btn').css({
                  'border': '1px solid #fff',
                  color : '#fff',
                  background: 'url(img/ic_menu.svg) no-repeat center/auto 13px'
                })
                // left-side dot's menu
                $('.fullpage_dots .item').css({
                  'color' : 'rgb(88, 89, 91);'
                })
                 $($('.fullpage_dots line')[0]).attr('stroke','rgb(88, 89, 91)')
              }


            }
          });
        }
      });