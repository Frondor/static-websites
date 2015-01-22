<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8" />
	<title>Elije tu nuevo equipo - Inventario</title>

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="css/estilo.css">

</head>
<body>

<div id="inventario">

	<section id="inv-header" class="center-block">
	</section>
	<section id="inv-slots" class="center-block">
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
			<a href="#"></a>
		</div>
		<div id="armor" class="slot pull-left">
			<a href="#"></a>
		</div>
		<div id="manoizq" class="slot pull-right">
			<a href="#"></a>
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

		<form class="login center-block">
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
			<div id="personaje" class="dropdown">
			  <button class="btn btn-danger btn-xs dropdown-toggle" type="button" id="dropPjs" data-toggle="dropdown" aria-expanded="false">Personaje: <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" role="menu" aria-labelledby="dropPjs">
			    <li role="presentation" class="dropdown-header">Evolucionados</li>
			    <li role="presentation"><a role="menuitem" href="#" data-evo="3" data-pj="Bolvar"><span class="label label-default">BM</span> Bolvar</a></li>
			    <li role="presentation"><a role="menuitem" href="#" data-evo="3" data-pj="Arthas"><span class="label label-default">SM</span> Arthas</a></li>
			    <li role="presentation"><a role="menuitem" href="#" data-evo="3" data-pj="Deathwing"><span class="label label-default">MG</span> Deathwing</a></li>
			    <li role="presentation" class="dropdown-header">Sin evolucionar</li>
			    <li role="presentation" class="disabled"><a role="menuitem" href="#" data-pj="Illidan"><span class="label label-default">DL</span> Illidan</a></li>
			    <li role="presentation" class="disabled"><a role="menuitem" href="#" data-pj="Gurtog"><span class="label label-default">RF</span> Gurtog</a></li>
			  </ul>
			  &nbsp;&nbsp;<span id="pj"></span>
			</div>
		</form>
		</div>

	</section>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
$(document).ready(function() {
	//start codigo ejemplo -temporal-
		//haciendo la lista de detalles
		//	$(".login").addClass("hidden");
		//	$("#detalles").removeClass("hidden");
	$(".login").find("button").on("click", function(e) {
		e.preventDefault();
		$(this).parent().fadeOut(1000, function() {
			$(this).hide();
			$("#detalles").fadeIn(500).removeClass("hidden");
		});
	});
	//end codigo ejemplo

	$("#personaje li").find("a").on("click", function () {
		var pj = $(this).data("pj");
		$("#pj").empty().text(pj);
	});
});
</script>
</body>
</html>