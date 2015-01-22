$(document).ready(function() {


	//creo array vacia para los sets habilitados de ESTA raza
	var setsDisponibles = [];

$("#personaje li").find("a").on("click", function (e) {
	e.preventDefault();
	var $this = $(this);
	var pj = $this.data("pj");
	var raza = $this.data("raza");
	var slots = $("#inv-slots");

	$("#dropPjs").addClass("hidden");//desabilitado luego de elegir el personaje (uno solo)
	$("#pj").empty().text(pj);
	//segun el personaje, se condicionan los sets y armas que van en los slots
	$("#inv-slots").attr('data-raza', raza);

	setsDisponibles.push( "2", "3" );
	console.log( setsDisponibles );
});



// add casco
//$("#casco a").css({"background": "url('img/items/7-29-0.gif') no-repeat center center"});
// add sword mano derecha
//$("#manoder a").css({"background": "url('img/items/0-26-0.gif') no-repeat center center", "background-size": "contain"});
// add armor
//$("#armor a").css({"background": "url('img/items/8-29-0.gif') no-repeat center center", "background-size": "contain"});
// add shield mano izquierda
//$("#manoizq a").css({"background": "url('img/items/6-15-0.gif') no-repeat center center", "background-size": "contain"});
// add guantes
//$("#guantes a").css({"background": "url('img/items/10-29-0.gif') no-repeat center center", "background-size": "contain"});
// add pants
//$("#pants a").css({"background": "url('img/items/9-29-0.gif') no-repeat center center", "background-size": "contain"});
// add botas
//$("#botas a").css({"background": "url('img/items/11-29-0.gif') no-repeat center center", "background-size": "contain"});
// add alas
//$("#alas a").css({"background": "url('img/items/14-36-0.gif') no-repeat center center"}).addClass("equipado");
});