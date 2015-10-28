$('#colored-picture-input').change(function(event){
	document.getElementById('bw-picture').src = URL.createObjectURL(event.target.files[0]);	         
});

var bwPictureLoad = false;
$('#bw-picture').load(function(){
	if(bwPictureLoad === false){
		bwPictureLoad = true;
		var imgObj = document.getElementById('bw-picture');
		if(navigator.appName == 'Microsoft Internet Explorer'){
			grayscaleImageIE(imgObj);
		} else {
			imgObj.src = grayscaleImage(imgObj);
		} 
		$('#bw-picture').css('max-width','100%');
	}
});

function grayscaleImageIE(imgObj){
	imgObj.style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayScale=1)';
}

function grayscaleImage(imgObj){
	var canvas = document.createElement('canvas');
	var canvasContext = canvas.getContext('2d');
	
	var imgW = imgObj.width;
	var imgH = imgObj.height;
	canvas.width = imgW;
	canvas.height = imgH;
	
	canvasContext.drawImage(imgObj, 0, 0);
	var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
	
	for(var y = 0; y < imgPixels.height; y++){
		for(var x = 0; x < imgPixels.width; x++){
			var i = (y * 4) * imgPixels.width + x * 4;
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			imgPixels.data[i] = avg; 
			imgPixels.data[i + 1] = avg; 
			imgPixels.data[i + 2] = avg;
		}
	}
	
	canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	return canvas.toDataURL();
}