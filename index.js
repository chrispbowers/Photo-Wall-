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
	destinationType: destinationType.DATA_URL });
}
	
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('myImage');
	myImage.style.display = 'block';
	myImage.src = "data:image/jpeg;base64," + imageData;
    onAddPhoto();
}

function onFail(message) {
      alert('Failed because: ' + message);
}

//Backendless.Data.of("PHOTOS").find().then(processResults).catch(error);
function processResults(photos){
    
//add each photo
for (var i = 0; i < photos.length; i++) {
 $("#myImage").append(photos[i].Image);
}
    
//refresh the table
$("#myImage").content('refresh');
}
 function error(err){
     console.log("error1 " + err); 
 }



//Add photo to backendless table
function onAddPhoto() {
console.log("Photo has been added");

var byteArray = new Blob(["data:image/jpg;base64," + imageData]);
 
Backendless.Files.saveFile( "testfolder", "testimage.jpg", byteArray, true )
 .then( function( savedFileURL ) {
    console.log( "file has been saved - " + savedFileURL );
  })
 .catch( function( error ) {
    console.log( "error2 - " + error.message );
  }); 
    
//var photoimg = $("#myImage").val();    
    
//var newPhoto =  image;
//newPhoto.photos = photoimg;
//Backendless.Data.of("Photos").save(newPhoto).then(saved).catch(error);
 
}
    
function saved(savedPhoto) {
console.log( "new Contact instance has been saved" + savedPhoto);
}