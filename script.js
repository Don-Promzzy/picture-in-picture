// Select the Html Element
const videoEl = document.getElementById("video");
const buttonEl = document.getElementById("button");

// Prompt to select media stream, pass to video element then play it
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (err) {
    // Catch Error Here
    console.log("whoops, error here:", err);
  }
};

buttonEl.addEventListener("click", async () => {
  // Disable the ButtonEl
  buttonEl.disabled = true;
  // Start the Picture in Picture
  await videoEl.requestPictureInPicture();
  // Reset the ButtonEl
  buttonEl.disabled = false;
});

// On Load
selectMediaStream();
