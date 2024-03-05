
// import { useEffect } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';



AOS.init({
    once: true,
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    }
});




  // useEffect(() => {
  //   Aos.init({
  //     once: true,
  //     disable: function () {
  //         var maxWidth = 800;
  //         return window.innerWidth < maxWidth;
  //     }
      
  //   });
  // }, []);


var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


if ($(".testimonials") != undefined) {

    $(".testimonials").slick({
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 5,
        autoplay: true,
    
        loop: true,
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow:2,
                slidesToScroll: 2,
                verticalSwiping:false,
                vertical:false
               }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    verticalSwiping: false,
                    vertical:false
                }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                verticalSwiping: false,
                slidesToScroll: 1,
                vertical:false
              }
            }
           
        ],
        appendDots: $('.news__dots'),
             customPaging : function(slider, i) {
             var thumb = $(slider.$slides[i]).data();
              return '0' + (i + 1);
        },
         dotsClass: 'news__dots-list'
    });
}



if ($(".brands-slider") != undefined) {
    $(".brands-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 6,
        rows: 3,
        arrows:false,
        infinite: true,
        autoplay: true,
        loop: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll:4,
                rows: 3,
               }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll:3,
                  rows: 3,
                  dots: false
                }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 3
              }
            }
           
          ]
        
    });
}

function openMenu() {
    var elements = document.getElementsByClassName('newMenuDiv');
    if (elements.length > 0) {
        elements[0].style.transform = "translateX(0)";
    }
}
function closeMenu() {
    var elements = document.getElementsByClassName('newMenuDiv');
    if (elements.length > 0) {
        elements[0].style.transform = "translateX(100%)";
    }
}





function openTab(evt, tabName) {
    var i, tabContent, tabButton;

    // Get all elements with class "tab-content" and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class "tab-button" and remove the "active" class
    tabButton = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove("active");
    }

    // Show the current tab and add the "active" class to the clicked button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}



$(document).on('click','.rdless',function(e) {
    event.preventDefault();
    $(this).hide();
    $(this).prev('.rdbtn').show();
    $(this).prev().prev('.moreText').slideUp();

});

$(document).on('click','.rdbtn',function(e) {
    event.preventDefault();
    $(this).hide();
    $(this).next('.rdless').show();
    $(this).prev('.moreText').slideToggle();
});
