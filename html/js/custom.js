// scripts customizados

// YOUTUBE VIDEO
// To stop video when close the modal
$('#myModal').on('hidden.bs.modal', function () {
	$('#myModal iframe').removeAttr('src');
})

var url = $('#yt_botao').attr('data-video-id');

video = "https://www.youtube.com/embed/"+url+"?autoplay=1";

// To play video when open the modal
$("#myModal").on('show.bs.modal', function(){
	$("iframe").attr('src', video);
});


// getGanhadores
$(document).ready(function() {

	var ganhadores = [];
	$.getJSON("/json/ganhadores.json", function(json) {
		$.each( json.ganhadores, function( key, item ) {
			ganhadores.push('<div class="item"><div class="col-lg-2 icone no-padding"><span class="sprite calendario_laranja">'+item.Data+'</span></div><div class="col-lg-10 info no-padding"><p>'+item.Cidade+'</p><span>Número sorteado: <span class="bold">'+item.NumeroSorteado+'</span></span></div></div>');
		});
		$(".resultados").append(ganhadores);
	});

	var sorteios = [];
	$.getJSON("/json/sorteios.json", function(json) {
		$.each( json.sorteios, function( key, item ) {
			sorteios.push('<li><span class="sprite '+item.Classe+'">'+item.Data+'</span></li>');
		});
		$(".sorteios").append(sorteios);
	});

});
