
$(document).ready(function(){





  $(function(){
      $('header nav ul.gnb .lymenu_sub1').hover(function(){
            $('header nav ul.sub1').stop().slideToggle();
      });
      
  });
  $(function(){
    $('header nav ul.gnb .memmenu_sub2').hover(function(){
          $('header nav ul.sub2').stop().slideToggle();
    });
    
  });




  $(function(){
  var headerTop = $('header').offset().top;
  $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(headerTop < scrollTop){
            $('header').addClass('fixed'); 
        } else {
            $('header').removeClass('fixed');
        }
  });
  });

     
     /* 메인이미지 슬라이드 */
     $(function(){
          $('.ly_wrap').slick({
               dots: true,
               infinite: true,
               speed: 1000,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay:true,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 },
                 {
                   breakpoint: 360,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
               ]
             });
     });
     /* AOS */
  $(function () {
    AOS.init({
      duration: 1000,
      once:true
    });
    /* 속도인데 100은빠름 */
  });

      /* 헤더고정 스크롤 했을때 */
      $(function(){
        var headerTop = $('header').offset().top;
        $(window).scroll(function(){
             var scrollTop = $(window).scrollTop();
             if(headerTop < scrollTop){
                  $('header').addClass('fixed').stop(); 
             } else {
                  $('header').removeClass('fixed'); 
             }
        });
      })
      

/* 이하 카드 모달 */
    $(function(){
      // 	이미지 클릭시 해당 이미지 모달
        $("#jiu,.jiu").click(function(){
          $(".mo1").fadeIn();
        });
        $("#sua,.sua").click(function(){
          $(".mo2").fadeIn();
        });
        $("#siy,.siy").click(function(){
          $(".mo3").fadeIn();
        });
        $("#han,.han").click(function(){
          $(".mo4").fadeIn();
        });
        $("#yu,.yu").click(function(){
          $(".mo5").fadeIn();
        });
        $("#da,.da").click(function(){
          $(".mo6").fadeIn();
        });
        $("#ga,.ga").click(function(){
          $(".mo7").fadeIn();
        });
        
        //.modal안에 button을 클릭하면 .modal닫기
        $(".xbtn").click(function(){
          $(".modal").fadeOut();
        });
        // 한번 더 클릭시 닫힘
        $(".modal").click(function(){
          $(".modal").fadeOut();
        });
        
      });



// /* 24시간 팝업 */
$(function () {
  // 쿠키 가져오기
  var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
  }

  // 24시간 기준 쿠키 설정하기  
  var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + todayDate.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  var couponClose = function () {
    if ($("input[name='chkbox']").is(":checked") == true) {
      setCookie("close", "Y", 7); //기간( ex. 1은 하루, 7은 일주일)
    }
    $("#pop").hide();
  }

  $(document).ready(function () {
    var cookiedata = document.cookie;
    console.log(cookiedata);
    if (cookiedata.indexOf("close=Y") < 0) {
      $("#pop").fadeIn();
    } else {
      $("#pop").hide();
    }
    $("#close").click(function () {
      couponClose();
    });
  });
});
//24시간 팝업끝 
      

});