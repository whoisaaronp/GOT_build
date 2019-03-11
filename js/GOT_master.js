(() => {
	//sub add a class and open up a lightbox from a gallery
	console.log('fired');

	const 	sigils 		= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video');

	function openLightbox(){
		lightbox.classList.add('lightbox-on');

	}

	function closeLightbox(){
		lightbox.classList.remove('lightbox-on');
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	// end the video 
	video.addEventListener('ended', closeLightBox);

})();