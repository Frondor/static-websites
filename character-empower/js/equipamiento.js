// STRING i.e.
// ?s=alpha&u=&p=&tier=s3&set=26&rhand=&lhand=&

$(document).ready(function() {

function filtrado(clase, manito) {
    $.ajax({
        url: 'https://gist.githubusercontent.com/Frondor/49d25e764690b3147a23/raw/cfa4bf2bcd11e73303fbfa2c7eb0dd1209aa645e/armas.json',
        //dataType: 'json',
        success: function (items) {
            var itemsJSON= JSON.parse(items)
            var hand = $.grep(itemsJSON, function (obj) { 
				//hand: 1 --> left | hand: 2 --> right | hand: 0 --> both
				//tipo: 1 --> one-handed | tipo: 2 --> two-handed	                
                if (manito == "manoizquierda") {
               		return obj[clase] === '1' && obj.hand <= '1' && obj.tipo <= '1'; //mano izquierda
                } else if (manito == "manoderecha") {
                	return obj[clase] === '1' && obj.hand <= '2' && obj.tipo <= '2' && obj.cat != '6'; //mano derecha
                }
            });

            //create new array with filtered items
            var lista = $.map(hand, function (item) {
                return '<li class="equipar '+item.tier+'" data-cat="'+item.cat+'" data-index="'+item.index+'" data-tipo="'+item.tipo+'">' + item.name + '</li>';
            });

            var itemList = $("#"+manito+" ul").empty().html(lista);

            //Equipar item
			$("li.equipar").on("click", function () {
				var $this = $(this);
				var eCat = $this.data("cat");
				var eIndex = $this.data("index");
				var eTipo = $this.data("tipo");
				var equiparEn = $("a[data-mano='"+manito+"']");
				var eImgUrl = "url('img/items/"+eCat+"-"+eIndex+"-0.gif') no-repeat center center";

				equiparEn.css({"background": eImgUrl, "background-size": "contain"});

				$(this).closest("section").animate({"marginLeft": "0"}, 400, function () {
					$(this).addClass("hidden");
				});
			});
        }

    });
}

$("#personaje li").find("a").on("click", function (e) {
	var $this = $(this);
	var pj = $this.data("pj");
	var clase = $this.data("clase");
	e.preventDefault();

	$("div.personajes").remove();//desabilitado luego de elegir el personaje (uno solo)
	$("#pj").empty().text(pj);
	//segun el personaje, se condicionan los sets y armas que van en los slots
	$("#inv-slots").attr('data-clase', clase);

});

// MENU SELECCION mano derecha
$("#manoder a").on("click", function () {
	var mano = $(this).data('mano');
	var clase = $("#inv-slots").data("clase");

		filtrado(clase, mano);
	
	$("#manoderecha").removeClass("hidden").animate({"marginLeft": "-280px"}, 400);
});
// MENU SELECCION mano izquierda
$("#manoizq a").on("click", function () {
	var mano = $(this).data('mano');
	var clase = $("#inv-slots").data("clase");

		filtrado(clase, mano);
	
	$("#manoizquierda").removeClass("hidden").animate({"marginLeft": "280px"}, 400);
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