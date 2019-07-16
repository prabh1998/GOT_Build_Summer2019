(() => {
  console.log('fired!');

  //variable stack -> get the sheilds / sigils first
  const sigils = document.querySelectorAll('.sigilContainer');
    lightBox = document.querySelector('.lightBox');
    closeButton = document.querySelector('.close-lightBox');
    houseVideo = document.querySelector('.house-video');
    bannerImages = document.querySelector("#houseImages");

  function popLightBox() {
    //debug so far and make sure the event handling works
    // debugger;

    // make lightBoxshow up
    lightBox.classList.add('show-lightBox');

    houseVideo.play();
  }

  function closeLightBox(event) {
    event.preventDefault();
    //make the lightBox close
    lightBox.classList.remove('show-lightBox');
    houseVideo.currentTime = 0; // rewind the video

    houseVideo.pause();
  }
  function animateBanners() {
    //we need and  offset that we can multiply by to animate
    //our banners to the left and ake the active one show up
    
    let offset = 600,
        multiplier = this.dataset.offset; 
        // this is the dataset offset custom data attribute
        // on each of the sigils
    console.log(offset * multiplier + "px");

    //move the banners to the left using the product of our math
    
    bannerImages.style.right = `${offset * multiplier + "px"}`;
    
    // debugger;
  }






  // sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));

  sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));

  closeButton.addEventListener("click", closeLightBox);

  houseVideo.addEventListener('ended', closeLightBox);

})();
