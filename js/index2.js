$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
         loop:true,
         margin:10,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:1
             },
             1000:{
                 items:1
             }
        }
     })
     $('.navbar-toggler').on('click', function (){
        var icon_bar = $(this).find('.fa');
        if(icon_bar.hasClass('fa-bars')){
            $('.header-col').show();
            icon_bar.removeClass('fa-bars').addClass('fa-times');
        } else{
            $('.header-col').hide();
            icon_bar.addClass('fa-bars').removeClass('fa-times');
        }
    });
    $("#formDemo").validate({
        rules: {
        name: "required",
        field: {
          required: true,
          email: true
    }
    },
        subject: {
            required: true,
            number: true
    },
        mess: {
            required: true,
            minlength: 3
    },  
        messages: {
        name: "Nhập họ tên",
        field:{
            required:"Nhập lại email",
            email: "Email không hợp lệ"
        },
        subject: {
            required: "Nhập số điện thoại"
        },
        mess: {
            required: "Nhập nội dung",
            minlength: "Nội dung quá ngắn"
        }
    }
  });
    $("#size1").click(function(){
        $('#size1').css({"border-color":"red"})
        $('.col-font-size').text('250.000')
        $('#size2').css({"border-color":"black"})
        $('#size3').css({"border-color":"black"})
        $('#size4').css({"border-color":"black"})
    })
    $("#size2").click(function(){
        $('#size2').css({"border-color":"red"})
        $('.col-font-size').text('300.000')
        $('#size1').css({"border-color":"black"})
        $('#size3').css({"border-color":"black"})
        $('#size4').css({"border-color":"black"})
    })
    $("#size3").click(function(){
        $('#size3').css({"border-color":"red"})
        $('.col-font-size').text('350.000')
        $('#size2').css({"border-color":"black"})
        $('#size1').css({"border-color":"black"})
        $('#size4').css({"border-color":"black"})
    })
    $("#size4").click(function(){
        $('#size4').css({"border-color":"red"})
        $('.col-font-size').text('400.000')
        $('#size2').css({"border-color":"black"})
        $('#size3').css({"border-color":"black"})
        $('#size1').css({"border-color":"black"})
    })
    $('input.input-qty').each(function() {
        var $this = $(this),
          qty = $this.parent().find('.is-form'),
          min = Number($this.attr('min')),
          max = Number($this.attr('max'))
        if (min == 0) {
          var d = 0
        } else d = min
        $(qty).on('click', function() {
          if ($(this).hasClass('minus')) {
            if (d > min) d += -1
          } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
          }
          $this.attr('value', d).val(d)
        })
      })
    $('.more').click(function(){
        $('.row-more').show()
        $('.row-same').hide()
    })
    $('.same').click(function(){
        $('.row-same').show()
        $('.row-more').hide()
    }) 
    $('.page-link').click(function(){
        $('.page2').css({'background-color':'#007BFF', 'color': 'white', 'border-color':'#007BFF'})
        $('.page1').css({'background-color':'white', 'color': '#007BFF', 'border-color':'#dee2e6'})
    })
    $(".read-moree").click(function(){
        $(this).prev().toggle();
        if($(this).text()=='Read Moree'){
            $(this).text('Read');
        }
        else{
            $(this).text('Read');
        }
     });
})


