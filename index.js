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
    alert("capturePhoto");
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.FILE_URI });
}
	
function onPhotoDataSuccess(imageURI) {
     alert("onPhoto" + imageURI);
    
    
	var image = document.getElementById('myImage');
	image.style.display = 'block';
	image.src = imageURI ;
   
    onAddPhoto(imageURI);
}

function onFail(message) {
      alert('Failed because: ' + message);
}




    



function processResults(Images){
//add each Task
    
for(var i = 0; i < Images.length;i++){
    $("#images").append("a href=")
}
    
//refresh the table
$("#myImage").content('refresh');
}
 function error(err){
     console.log("error1 " + err); 
 }



//Add photo to backendless table
function onAddPhoto(imageURI) {
alert("AddPhoto");    
window.resolveLocalFileSystemURL(imageURI,gotFileEntry,fail);
    
}

function gotFS(fileSystem){
    alert("gotFS " + fileSystem);
    var fileName = imageURI.split('/').pop();
    fileSystem.getFile(fileName,{create: false,exclusive: false}, gotFileEntry,fail)
    
}
    
function gotFileEntry(fileEntry){
    alert("gotFileEntry " + fileEntry);
    fileEntry.file(gotFile,fail);
}
    
function gotFile(fileObject){
    alert("gotFile " + fileObject);
	
	
Backendless.Files.upload(fileObject, "Images", false)
 .then( function( fileURL ) {
  })
 .catch( function( error ) {
  });
	
 alert("File Uploadaed " + fileObject);
}

function fail(error){
    alert("cannot find file" + error.message);
}


 
 
 

    
