var form=$('#formulario');
var	titulo=$('#titulo');
var	url=$('#url');
var	button=$('#mostrar-form');
var	list=$('#contenido');
var	post=$('.item').first();
	
	function mostrarFormulario(){
		form.slideToggle();
		return false;
	}
	
	function agregarPost(){
		var url=$('#url').val(),
			titulo=$('#titulo').val();
		$clone=post.clone();

		$clone.find('.titulo_item a')
			.text(titulo)
			.attr('href', url);	
		//$clone.hide();
		
		list.prepend($clone);
		$clone.fadeIn();
		
		
		return false;
	}
	
	//Eventos
	button.click(mostrarFormulario);
	form.on('submit',agregarPost)