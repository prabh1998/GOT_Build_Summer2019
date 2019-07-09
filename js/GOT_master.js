(() => {
  console.log('fired!');

  //variable stack -> get the sheilds / sigils first
  const sigils = document.querySelectorAll('.sigilContainer');
    lightBox = document.querySelector('.lightBox');
    closeButton = document.querySelector('.close-lightBox');
    houseVideo = document.querySelector('.house-video');

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
  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  closeButton.addEventListener("click", closeLightBox);
  houseVideo.addEventListener('ended', closeLightBox);

})();
