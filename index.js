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
	destinationType: destinationType.DATA_URI });
}
	
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('myImage');
	image.style.display = 'block';
	image.src = "data:image/jpeg;base64," + imageData;
    onAddPhoto();
}

function onFail(message) {
      alert('Failed because: ' + message);
}




    



function processResults(photos){
    
    
//refresh the table
$("#myImage").content('refresh');
}
 function error(err){
     console.log("error1 " + err); 
 }



//Add photo to backendless table
function onAddPhoto() {
	
Backendless.Files.upload( testImage.jpg, Images, true)
 .then( function( fileURL ) {
  })
 .catch( function( error ) {
  });{
    console.log( "file has been saved - " + savedFileURL );
  }
 
    
 
}
    
