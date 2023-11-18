const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media strem, pass to video Element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    }catch(error){
        //Catch Error here
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async()=>{
    //Disable button
    button.disabled =true;
    //Picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//on Load
selectMediaStream();
