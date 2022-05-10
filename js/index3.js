$(document).ready(function(){
    $('.validation').validate({
        rules:{
            firstName: "required",
            lastName: "required",
            Email:{
                required: true,
                email: true
            },
            phone:{
                required: true,
                number: true
            },
            address:"required",
        },  
        messages: {
            firstName: "Nhập họ",
            lastName: "Nhập tên",
            Email:{
                required: "Nhập email",
                email:"Email không hợp lệ"
            },
            phone:{
                required: "Nhập số điện thoại",
                number:"Chỉ nhập số"
            },
            address:"Nhập địa chỉ",
    }
    })

    var taxRate = 0.005;
    var shippingRate = 30.000; 
    var fadeTime = 300;
 
 
    $('.product-quantity input').change( function() {
      updateQuantity(this);
    });
    
    $('.product-removal button').click( function() {
      removeItem(this);
    });
    
    
    function recalculateCart()
    {
      var subtotal = 0;
      
      $('.product').each(function () {
        subtotal += parseFloat($(this).children('.product-line-price').text());
      });
      
      var tax = subtotal * taxRate;
      var shipping = (subtotal > 0 ? shippingRate : 0);
      var total = subtotal + tax + shipping;
      
      $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(3));
        $('#cart-tax').html(tax.toFixed(3));
        $('#cart-shipping').html(shipping.toFixed(3));
        $('#cart-total').html(total.toFixed(3));
        if(total == 0){
          $('.checkout').fadeOut(fadeTime);
        }else{
          $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
      });
    }
    
    
    function updateQuantity(quantityInput)
    {
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children('.product-price').text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;
      
      productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(3));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });  
    }
    
    
    function removeItem(removeButton)
    {
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }
})