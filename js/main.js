//$(document).foundation();

(function($){
    //Plugin activation
    $(window).enllax();
            
//            $('#some-id').enllax();
            
//            $('selector').enllax({
//                type: 'background', // 'foreground'
//                ratio: 0.5,
//                direction: 'vertical' // 'horizontal'
//            });
})(jQuery);

function MenuEffex() {
	scrollPos = ($(document).scrollTop() / 200);
	if(scrollPos <= 1) {
		$('#headMenu').css({
			'box-shadow' : '0px 1px 3px rgba(0, 0, 0, '+scrollPos+')',
			backgroundColor:'rgba(26,26,26,'+scrollPos+')'
		});	
	}
}

jQuery(document).ready(function($) {
	$('ul.mobile-navigation li a[href^="#"], nav.menu ul li a, a.cotizaBtn').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top -0
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	//Slider
	$('.bxslider').bxSlider({
		auto: false,
		easing: 'easeInElastic'
	});
	
    //Menu
	function triggerMobileMenu() {
	
	$(".mobile-menu-trigger").click(function () {
		
		if ($("#mobile-menu").hasClass('hide-nav')) {
			setTimeout(function(){
			$("#mobile-menu").removeClass('hide-nav').addClass('show-nav');
			}, 100);	
		
		}else {
			
			setTimeout(function(){
			$("#mobile-menu").removeClass('show-nav').addClass('hide-nav');
			}, 100);
			
			}
		return false;
	});
	
	$(".mobile-nav .close").click(function () {
		setTimeout(function(){
			$("#mobile-menu").addClass('hide-nav');
			}, 100);
		});
	
	}
	
	triggerMobileMenu();
	
	$(window).scroll(function() {
		MenuEffex();
	});
	

   $('#test').rssfeed('http://www.mexicoxport.com/rss.php', {
     limit: 5
   });
   
//    $("#fileUpload").on('change', function () {
//      var countFiles = $(this)[0].files.length;
// 
//      var imgPath = $(this)[0].value;
//      var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
//      var image_holder = $("#image-holder");
//      image_holder.empty();
// 
//      if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
//          if (typeof (FileReader) != "undefined") {
// 
//              for (var i = 0; i < countFiles; i++) {
// 
//                  var reader = new FileReader();
//                  reader.onload = function (e) {
//                      $("<img />", {
//                          "src": e.target.result,
//                              "class": "thumb-image"
//                      }).appendTo(image_holder);
//                  }
// 
//                  image_holder.show();
//                  reader.readAsDataURL($(this)[0].files[i]);
//              }
// 
//          } else {
//              alert("This browser does not support FileReader.");
//          }
//      } else {
//          alert("Pls select only images");
//      }
//  	});
    
    //Validación
    jQuery.validator.setDefaults({
	  debug: true,
	  success: "valid"
	});
    $('#BolsaForm').validate({
          rules: {
              nombre: { required: true },
              email: { required: true,  email: true },
              telefono: { required: true, digits: true },
              fileUpload: { required: true, extension: "pdf|jpeg|jpg" }
          },
          messages: {
              nombre: { required: "<i class='fa fa-exclamation-circle'></i> Por favor, escribe tu nombre completo" },
              email: { required: "<i class='fa fa-exclamation-circle'></i> Necesitas un correo eletrónico", email: "<i class='fa fa-exclamation-circle'></i> Tu email no tiene el formato nombre@dominio.com" },
              telefono: { required: "<i class='fa fa-exclamation-circle'></i> Ingresa tu teléfono", digits: "<i class='fa fa-exclamation-circle'></i> Solo números." },
              //fileUpload: { required: "<i class='fa fa-exclamation-circle'></i> Debes agregar tu CV." }
          },
          submitHandler: function (form){
                $.ajax({
                    url: '/bolsaScript.php',
                    type: 'POST',
                    data: $('#BolsaForm').serialize(),
                    //dataType: 'json',
                    success:function(data) {
                        if(data=='ok'){
                            $("#resConctact").html('<div class="alerta">Tu mensaje fue envíado correctamente</div>').fadeOut(8000);
                            $("#BolsaForm").each (function(){
                                this.reset();
                            });
                        }else{
                            $("#resConctact").html('Ha ocurrido el siguiente error: '+data).fadeOut(8000);
                        }

                    }
                })
          }
    });
	
});