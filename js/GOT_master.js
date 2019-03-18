(() => {
	//sub add a class and open up a lightbox from a gallery
	console.log('fired');

	const 	sigils 		= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video'),
			lbClose		= document.querySelector('lightbox-close'),
			topBanners	= document.querySelector('#houseImages');

	function openLightbox(){
		// debugger;
		let targetHouse = this.className.split(" ")[1];

		// this give us a lowercase house name -> the second 
		// class on all of the shields
		// is stark, baratheon
		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse(1); 

		// flip this to uppercase
		video.src = `video/House-${targetHouse}.mp4`;
		lightbox.classList.add('lightbox-on');
		
		video.load();
		video.play();

	}

	function closeLightbox(){
		lightbox.classList.remove('lightbox-on');

		// rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanners(){
		// more the banners to the left so that the current 
		const offSet = 600;
		let currentOffset = this.dataset.offset * offSet;

		topBanners.style.right = currentOffset + "px";

	}



	// sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

	// end the video 
	video.addEventListener('ended', closeLightbox);
	lbCLose.addEventListener('click', closeLightbox);

})();