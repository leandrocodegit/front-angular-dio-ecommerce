let video = document.createElement("video");
let canvasElement = document.getElementById("canvas");
let canvas

function play() {

}

function drawLine(begin, end) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 10;
    canvas.lineCap = "round";
    canvas.shadowBlur = 10;
    canvas.shadowOffsetY = 5;
    canvas.shadowColor = "#8eff00";
    canvas.strokeStyle = "#8eff00";
    canvas.stroke();

}

function initScan() {

    console.log('Init scan')

    canvasElement = document.getElementById("canvas");
    canvas = canvasElement.getContext("2d");


    //alert(video.videoHeight);



    var constraints = {
        video: {
            video: true,
            facingMode: "environment"
        }
    };


    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            video.srcObject = stream;
            video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
            video.play();
            requestAnimationFrame(tick);
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });


}

function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvasElement.hidden = false;
        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        var code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
        });
        if (code) {
            drawLine(code.location.topLeftCorner, code.location.topRightCorner);
            drawLine(code.location.topRightCorner, code.location.bottomRightCorner);
            drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner);
            drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner);
            console.log('URL: ' + code.data)
            window.location.href = code.data;
            localStream.stop();
        }
    }
    requestAnimationFrame(tick);
}
function stop() {
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks[0].stop();
    tracks.forEach(track => track.stop())
}