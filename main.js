Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_Snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='Image' src="+ data_uri + ">";
    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7aUdltzol/model.json', modelLoaded)
function modelLoaded(){
    console.log("Model Loaded!");
}

function Identify(){
    img = document.getElementById("Image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
    document.getElementById("Object_output").innerHTML = results[0].label;
document.getElementById("Accuracy").innerHTML = results[0].confidence;
}
