$(window).load(function() {
	$('.btn_info').mouseover(function() {
		tar = $(this).attr('target');//var tar
        boxUbic = $('#ubica'+tar);//inicia
        if(boxUbic.hasClass('active')) {
            boxUbic.removeClass('active fadeInUp');
            boxUbic.addClass('fadeOutDown');
        } else {
            boxUbic.addClass('active fadeInUp');
            boxUbic.removeClass('fadeOutDown');
        }
	});
	
	//Thumbs
    if (Modernizr.touch) {
            $(".close-overlay").removeClass("hidde");
            $(".boxServ").click(function(e){
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            $(".close-overlay").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".boxServ").hasClass("hover")) {
                    $(this).closest(".boxServ").removeClass("hover");
                }
            });
        } else {
            $(".boxServ").mouseenter(function(){
                $(this).addClass("hover");
            })
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
        }
});

$(document).ready(function() {
	$('.fancybox').fancybox({
		padding: 10,
		  helpers: {
		    overlay: {
		      locked: false
		    }
		  }
	});
	
	$('#cotiza').validate({
          rules: {
              nombre: { required: true },
              email: { required: true,  email: true },
              padron: { required: true },
              nombrecont: { required: true },
              telefono: { required: true, digits: true },
              movil: { required: true, digits: true },
              producto: { required: true },
              valor: { required: true, digits: true },
              valores: { required: true },
              tramit: { required: true },
              operacion: { required: true },
              transportacion: { required: true },
              puerto: { required: true },
              destino: { required: true },
              postal: { required: true, digits: true },
              cotizar: { required: true },
              mensaje: { required: true }
          },
          messages: {
              nombre: { required: "<i class='fa fa-exclamation-circle'></i> Por favor, escribe la Razón social" },
              email: { required: "<i class='fa fa-exclamation-circle'></i> Necesitas un correo eletrónico", email: "<i class='fa fa-exclamation-circle'></i> Tu email no tiene el formato nombre@dominio.com" },
              padron: { required: "<i class='fa fa-exclamation-circle'></i> Selecciona un Padrón." },
              nombrecont: { required: "<i class='fa fa-exclamation-circle'></i> Escribe tu nombre." },
              telefono: { required: "<i class='fa fa-exclamation-circle'></i> Ingresa tu teléfono", digits: "<i class='fa fa-exclamation-circle'></i> Solo números." },
              movil: { required: "<i class='fa fa-exclamation-circle'></i> Ingresa tu celular", digits: "<i class='fa fa-exclamation-circle'></i> Solo números." },
              producto: { required: "<i class='fa fa-exclamation-circle'></i> Ingresa tu producto." },
              valor: { required: "<i class='fa fa-exclamation-circle'></i> Ingresa el precio mínimo.", digits: "<i class='fa fa-exclamation-circle'></i> Solo números." },
              valores: { required: "<i class='fa fa-exclamation-circle'></i> Selecciona un tipo de moneda." },
              tramit: { required: "<i class='fa fa-exclamation-circle'></i> Selecciona un tipo de Tramite." },
              operacion: { required: "<i class='fa fa-exclamation-circle'></i> Selecciona un tipo de operación." },
              transportacion: { required: "<i class='fa fa-exclamation-circle'></i> Selecciona un tipo de transportación." },
              puerto: { required: "<i class='fa fa-exclamation-circle'></i> Escribe el puerto de origen." },
              destino: { required: "<i class='fa fa-exclamation-circle'></i> Escribe cual es el destino final." },
              postal: { required: "<i class='fa fa-exclamation-circle'></i> Ingresa un código postal.", digits: "<i class='fa fa-exclamation-circle'></i> Solo números." },
              cotizar: { required: "<i class='fa fa-exclamation-circle'></i> Selecciona un servicio a cotizar." },
              mensaje: { required: "<i class='fa fa-exclamation-circle'></i> Escribe un comentario." }
          },
          submitHandler: function (form){
                $.ajax({
                    url: '/contactscript.php',
                    type: 'POST',
                    data: $('#cotiza').serialize(),
                    //dataType: 'json',
                    success:function(data) {
                        if(data=='ok'){
                            $("#resConctact").html('<div class="alerta">Tu mensaje fue envíado correctamente</div>').fadeOut(8000);
                            $("#cotiza").each (function(){
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