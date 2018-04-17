//Backendless table API key reference
Backendless.initApp("3F4DF6B3-BD68-2097-FFF1-1E29A6C5EC00","89A5E954-BFC0-5152-FF19-99AB46D7CB00");

//Check that the page has loaded
$(document).on("pageshow","#page2", onPageShow);
function onPageShow() {
console.log("page shown");
}

var destinationType; //used sets what should be returned (image date OR file path to image for example)

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
	destinationType=navigator.camera.DestinationType;
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.FILE_URI });
}
	
function onPhotoDataSuccess(imageURI) {
	var image = document.getElementById('myImage');
	image.style.display = 'block';
	image.src = "imageURI" ;
    localStorage.setItem("imageURI", imageURI)
    onAddPhoto();
}

function onFail(message) {
      alert('Failed because: ' + message);
}




    



function processResults(Images){
    
    
//refresh the table
$("#myImage").content('refresh');
}
 function error(err){
     console.log("error1 " + err); 
 }



//Add photo to backendless table
function onAddPhoto() {
var fileLocation = (localStorage.imageURI);
    
Backendless.Data.of("Images").save(fileLocation).then(saved).catch(error);
    
fucntion saved(savedTask){
 console.log("image saved");
}
    
function error(err){
    
    console.log("error");
}
 
    
 
}
    
