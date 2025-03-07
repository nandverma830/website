$(document).ready(function () {
  $(window).click(function () {
    $('.filter-list').slideUp()
  });

  $('.filter-list').click(function (e) {
    e.stopPropagation();
  });

  $(document).on('click', '.filter-box', function (e) {
    $('.filter-list').slideToggle()
    e.stopPropagation();
  })

  $(".product-item").click(function () {
    $(this).next(".inner-list").slideToggle();
    $(this).toggleClass('active')
    $(this).parent().siblings().find('.inner-list').slideUp()
  });


  $('.product-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    loop: false,
  
    responsive: [
      {
        breakpoint: 650,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });



  $(".compare-btn").click(function () {

    $('.lower-popup').css({ transform: "translateY(0%)" })
    let dataShow = $(this).attr("data-show")
    let ll = $(".lower-logobox .brand-box.active").length;
    if (ll >= 1) {
      $(".lower-popup .red-button").removeClass("disable")
    } else {
      $(".lower-popup .red-button").addClass("disable")
    }
    if (ll >= 5) {
      alert("Not allowed more than 5 products!")
    }else{
      $(this).find("span").text("Added").addClass("pointer-events")
      $("." + dataShow).addClass("active")
    }

    setTimeout(function () {
      let lll = $(".lower-logobox .brand-box.active").length;
      $(".index-count").text(lll)
    }, 100)

  })



  $(".lower-logobox .brand-box .close-btn").click(function () {
    $(this).parent().removeClass("active")
    let dataClose = $(this).attr("data-close")
    $("." + dataClose).removeClass('active')
    $("." + dataClose).find("span").text("Add to Compare").removeClass("pointer-events")
    setTimeout(function () {
      let lll = $(".lower-logobox .brand-box.active").length;
      $(".index-count").text(lll)
    }, 100)
    let ll = $(".lower-logobox .brand-box.active").length;
    console.log(ll + 'Close Lengthhh');
    if (ll < 2) {
      $(".lower-popup .red-button").addClass("disable")
    } else {
      $(".lower-popup .red-button").removeClass("disable")
    }
  })




  var heightH = $('.logo-parent').height()
  $(".compare-section .compare-table .compare-column:first-child .compare-img-box").css("padding-top", (heightH))



  $(document).on('click', '.compare-section .compare-table .close-btn', function () {
    let dataHide = $(this).attr("data-hide")
    $("." + dataHide).removeClass("active")
    let dataText = $(this).attr("data-text")
    $("." + dataText).find("span").text("Add to Compare").removeClass("pointer-events")
    $(this).parent().removeClass('active')
    let ll = $(".lower-logobox .brand-box.active").length;
    console.log(ll + 'Close Popup');
    if (ll < 2) {
      $(".lower-popup .red-button").addClass("disable")
    } else {
      $(".lower-popup .red-button").removeClass("disable")
    }
  });

  $('.com-btn').click(function () {
    $(".compare-section , .overlay").fadeIn()
    $('.lower-popup').css({ transform: "translateY(100%)" })
    var maxHeight = 0;
    setTimeout(function () {
      $('.feature-column .feature').each(function () {
        var boxHeight = $(this).height();
        maxHeight = Math.max(maxHeight, boxHeight);
      });
      $('.feature-column .feature').css({ height: maxHeight })

    }, 100)

    setTimeout(function () {
      var logoHeight = $('.compare-table.active .logo-parent').height();
      console.log(logoHeight);
      $(".compare-table.first-com-col .compare-img-box").css("padding-top", (logoHeight))
    }, 500)
  })

  //   $(documnet).on('click', '[com-tab]', function(){
  //     var comTab = $(this).attr('com-tab')
  //     $('.' + comTab).addClass('active')
  // });

  let allCat = { 'Wardrobe': ['Small', 'Big'], 'Bed': ['King Size', 'Queen Size'], 'Kitchen': ['Straight Kitchen Cabinets (8 ft)', ' L Shaped Kitchen Cabinets (12ft x 6ft)'], 'Dressing Unit': ['With Mirror', 'With Mirror & Cupboard on both side'] }

  $("#category").change(function () {
    var cat = $(this).val()
    subCat = allCat[cat];
    $('#sub-category').find('option').remove();
    $('#sub-category').append('<option value="">Furniture Variant</option>');
    if (typeof subCat === "undefined") {
    } else {
      var i;
      for (i = 0; i < subCat.length; ++i) {
        $('#sub-category').append('<option value="' + subCat[i] + '">' + subCat[i] + '</option>');
      }
    }

    $(".calculator-sec").hide();
  })

  $("#sub-category").change(function () {
    var subCat = $(this).val()
    if (subCat.length > 0) {
      $(".calculator-sec").hide();
      if (subCat == "Small") {
        $(".calculator-sec.small").show();
      } else if (subCat == "Big") {
        $(".calculator-sec.big").show();
      } else if (subCat == "King Size") {
        $(".calculator-sec.king-size").show();
      } else if (subCat == "Queen Size") {
        $(".calculator-sec.queen-size").show();
      } else if (subCat == "Straight Kitchen Cabinets (8 ft)") {
        $(".calculator-sec.wall-cabinets-including-hob-and-chimney").show();
      } else if (subCat == " L Shaped Kitchen Cabinets (12ft x 6ft)") {
        $(".calculator-sec.l-shaped-with-wall-cabinets-including-hob-and-chimney").show();
      }
      else if (subCat == "With Mirror") {
        $(".calculator-sec.with-mirror").show();
      }
      else if (subCat == "With Mirror & Cupboard on both side") {
        $(".calculator-sec.feet-with-mirror-and-both-side").show();
      }
    } else {
      $(".calculator-sec").hide();
    }
  })



  var headerH = $("#header").outerHeight()
  $(".main").css("padding-top", headerH)



  $(".nav-item").hover(function () {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });

  $(document).on('click', '.show-more-btn', function () {
    $('.read-more-content').slideToggle();
    if ($(this).text() === "Read More") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  })

  // accordian js
  $(document).on('click', '[data-accordian]', function () {
    $(this).parent().siblings().find('[data-accordian]').removeClass('active');
    $(this).toggleClass('active');
    $(this).parent().siblings().find('[data-accordian]').next().slideUp();
    $(this).next().slideToggle();
  })

  $('.bulk-sec').click(function () {
    $(".bulk-popup , .overlay").fadeIn()
  });

  $('.bulk-close , .overlay').click(function () {
    $(".bulk-popup , .overlay").fadeOut()
  })

  // Menu btn
  $(document).on("click", ".menu-btn", function () {
    $(this).toggleClass("active")
    $(".navbar").toggleClass("active")
  })

  // upload file
  $('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.input-placeholder').text(fileName);
  });

  // hero-slider
  $('.hero-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    // speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  });

  // home-slider
  $('.home-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  jQuery(function ($) {
    $(".counter").inViewport(function (px) {
      if (px > 0 && !this.initNumAnim) {
        this.initNumAnim = true;
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 1500,
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      }
    });
  });






  // Data Tab JS
  $(document).on('click', '[data-tab]', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var dataTab = $(this).attr('data-tab');
    $('#' + dataTab).siblings().removeClass('active');
    $('#' + dataTab).addClass('active');

  });


  $(document).on('click', '.compareClose', function () {
    $('.lower-popup').css({ transform: "translateY(1000%)" })
  })



  $('.compare-section .close , .overlay').click(function () {
    $(".compare-section , .overlay").fadeOut()
  })

  $('.enq-box').click(function () {
    $(".enquire-popup").fadeIn()
  });

  $('.popup-close, .overlay').click(function () {
    $(".enquire-popup").fadeOut()
  })

  
});






$(document).on('click', '.toogle-box', function () {
  $(this).toggleClass('active');
})



$(".get_question").click(function () {
  var question = $(this).attr("for");
  $(".set_question").val(question);

});

$(".get_category").click(function () {
  var category = $(this).attr("for");
  $(".set_category").val(category);

});

$(".get_product").click(function () {
  var product = $(this).attr("for");
  $(".set_product").val(product);

});

$(".yes-no-row p").click(function () {
  $(".qna-box").removeClass("active");
  $(this).parent().closest(".qna-box").next().addClass("active");
});

$('.gallery-slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});



$('.gallery-container-slider').slick({
  centerMode: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  loop: false,
  centerPadding: '0px',

  responsive: [
    {
      breakpoint: 650,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

var hH = $("#header").outerHeight()
$(document).on('click', '[data-scroll]', function () {
  var dataScroll = $("#gallery-box");
  $('body, html').animate({ scrollTop: ($(dataScroll).offset() || { "top": NaN }).top - hH })
});

$(".know-more-btn").click(function () {
  $(".insp-box").removeClass("active");
  $(this).parent(".insp-box").addClass("active");
});

$(".check").click(function () {
  if ($(this).is(":checked")) {
    $(".input-opt-box").removeClass("active")
    $(this).parent(".input-opt-box").addClass("active");
  }
  else {
    $(this).parent(".input-opt-box").removeClass("active");
  }
})


//Fancybox
Fancybox.bind('[data-fancybox="inspiration-kitchen"]', {
});

Fancybox.bind('[data-fancybox="inspiration-dining"]', {
});

Fancybox.bind('[data-fancybox="inspiration-living"]', {
});

Fancybox.bind('[data-fancybox="inspiration-bathroom"]', {
});

Fancybox.bind('[data-fancybox="inspiration-bedroom"]', {
});
Fancybox.bind('[data-fancybox="inspiration-office"]', {
});
Fancybox.bind('[data-fancybox="inspiration-corporate"]', {
});
Fancybox.bind('[data-fancybox="cost-calculator-gallery"]', {
});
Fancybox.bind('[data-fancybox="event-gallery"]', {
});





