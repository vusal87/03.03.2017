var audio:
//hide pause button
$(	'#pause').hide();


function initAudio(element){
	var song = elemen.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');


	//create audio object

	audio = new Audio('media/'+song);
	if(!audio.currentTime){
		$('#duration') .html('0.00');

	}
	$('#audio-player .title').text(title);
	$('#audio-player .artist').text(artist);

	//insert cover

	$('img.cover').attr('src','img/covers/'+ cover);

	$('#playlist li').removeClass('active');
	element.addClass('active');
	

}