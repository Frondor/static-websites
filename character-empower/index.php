<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8" />
	<title>Elige tu nuevo equipo - Inventario</title>

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="css/estilo.css">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.5.8/perfect-scrollbar.min.css">
<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>
<style>
#cargando {width:100%;height:100%;position:absolute;/*switch to fixed for scrolling content*/overflow:hidden;top:0px;left:0px;z-index:9999;background:#000 url('img/loader-light.gif') center center no-repeat;opacity: 1}
</style>
</head>
<body>
<div id="cargando"></div>

<!-- paneles de equipamiento-->
<section id="manoderecha" class="hidden">
	<div class="manoderecha paneles">
		<div class="panel-contenido">
			<ul class="list-group">
				<img src="img/loader-light.gif" class="center-block" alt="Cargando..."/>
			</ul>
		</div>
	</div>
</section>
<section id="manoizquierda" class="hidden">
	<div class="manoizquierda paneles">
		<div class="panel-contenido">
			<ul class="list-group text-right">
				<img src="img/loader-light.gif" class="center-block" alt="Cargando..."/>
			</ul>
		</div>
	</div>
</section><!-- paneles de equipamiento-->

<div id="inventario">

	<section id="inv-header" class="center-block">
	</section>
	<section id="inv-slots" class="center-block" data-clase="default" data-tier="default" data-congato="no">
		<div class="personajes"><h2>Elige tu personaje</h2>
			<div id="personaje" class="dropdown">
			  <button class="btn btn-danger btn-lg dropdown-toggle" type="button" id="dropPjs" data-toggle="dropdown" aria-expanded="false">Personaje: <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" role="menu" aria-labelledby="dropPjs">
			    <li role="presentation" class="dropdown-header">Evolucionados</li>
			    <li role="presentation"><a role="menuitem" href="#" data-clase="bm" data-pj="Bolvar"><span class="label label-default">BM</span> Bolvar</a></li>
			    <li role="presentation"><a role="menuitem" href="#" data-clase="sm" data-pj="Arthas"><span class="label label-default">SM</span> Arthas</a></li>
			    <li role="presentation"><a role="menuitem" href="#" data-clase="mg" data-pj="Deathwing"><span class="label label-default">MG</span> Deathwing</a></li>
			    <li role="presentation" class="dropdown-header">Sin evolucionar</li>
			    <li role="presentation" class="disabled"><a role="menuitem" href="#" data-clase="dl" data-pj="Illidan"><span class="label label-default">DL</span> Illidan</a></li>
			    <li role="presentation" class="disabled"><a role="menuitem" href="#" data-clase="rf" data-pj="Gurtog"><span class="label label-default">RF</span> Gurtog</a></li>
			  </ul>
			  &nbsp;&nbsp;<span id="pj"></span>
			</div>
		</div>
		<div id="pet" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="pendant" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="casco" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="alas" class="slot pull-right">
			<a href="#"></a>
		</div>
		<div class="clearfix"></div>
		<div id="manoder" class="slot pull-left">
			<a href="#" data-mano="manoderecha" ></a>
		</div>
		<div id="armor" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="manoizq" class="slot pull-right">
			<a href="#" data-mano="manoizquierda" ></a>
		</div>
		<div class="clearfix"></div>
		<div id="guantes" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="ring1" class="slot slot pull-left">
			<a href="#"></a>
		</div>
		<div id="pants" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="ring2" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="botas" class="slot pull-right">
			<a href="#"></a>
		</div>
		<div class="clearfix"></div>
		<div id="misc"class="slot pull-right">
			<a href="#"></a>
		</div>

		<div id="controles">
		</div>

	</section>
	<section id="inv-body" class="center-block">

		<form class="login center-block" method="GET">
			<!--<div class="form-group text-center">
			<div class="btn-group btn-group-justified" role="group">
				<label class="radio-inline btn btn-danger btn-xs">
				  <input type="radio" class="sr-only" name="servidor" id="inlineRadio1" value="alpha">
				  Servidor: Alpha
				</label>
				<label class="radio-inline btn btn-danger btn-xs">
				  <input type="radio" class="sr-only" name="servidor" id="inlineRadio2" value="beta">
				  Servidor: Beta
				</label>
			</div>
			</div>-->
			<div class="form-group">
				<div class="input-group">
			      <div class="input-group-addon"><span class="glyphicon glyphicon-cog"></span> Servidor</div>
					<select name="servidor" class="form-control">
						<option value="alpha" selected>Alpha</option>
						<option value="beta">Beta</option>
					</select>
				</div>
			</div>
		  <div class="form-group">
		    <label class="sr-only" for="usuario">Usuario</label>
		    <div class="input-group">
		      <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
		      <input type="text" class="form-control" id="usuario" placeholder="Usuario">
		    </div>
		  </div>
		  <div class="form-group">
		    <label class="sr-only" for="usuario">Usuario</label>
		    <div class="input-group">
		      <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
		      <input type="paswword" class="form-control" id="password" placeholder="Contraseña">
		    </div>
		  </div>
		  <button type="submit" class="btn btn-danger center-block">Entrar</button>
		</form>

		<div id="detalles" class="hidden">
		<form id="palserver">
			  &nbsp;&nbsp;<span id="pj"></span>
		</form>
		</div>

	</section>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>$(window).load(function(){$('#cargando').animate({opacity:0},500, function(){$(this).remove();});});</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.5.8/perfect-scrollbar.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/equipamiento.js"></script>
<script>
$(document).ready(function() {
// Al final de tooooodo, desactivamos click derecho
//$("html").bind("contextmenu", function (e) {
//	e.preventDefault();
//});

	//start codigo ejemplo -temporal-
		//haciendo la lista de detalles
			$(".login").addClass("hidden");
			$("#detalles").removeClass("hidden");

	$(".login").find("button").on("click", function(e) {
		e.preventDefault();
		$(this).parent().fadeOut(1000, function() {
			$(this).hide();
			$("#detalles").fadeIn(500).removeClass("hidden");
		});
	});
	//end codigo ejemplo

//detalles y equipamiento
$('.paneles ul').perfectScrollbar({
	// INTENTAR REEMPLAZAR POR http://jamesflorentino.github.io/nanoScrollerJS/
	suppressScrollX: true,
  minScrollbarLength: 20
});
//ESTAN EN equipamiento.js

});
</script>
</body>
</html>