//http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard(textareaId){
	var textarea = document.querySelector('#' + textareaId);
	textarea.select();
	try{
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		alert('Copying text command was ' + msg);
	}catch(err){
		alert('Oops, unable to copy');
	}
}


//http://www.mediacollege.com/internet/javascript/page/scroll.html




//função que captura o click de gerar hash
//função que faz o download do script e chama a função que faz o hash
//função que faz o hash


function printValue(value, areaToPrint){
	document.getElementById(areaToPrint).value = value;
}

function emptyTag(fieldId){
	$('#' + fieldId).empty();
	document.getElementById(fieldId).value = '';
}

$('#reset-text').click(function(){
	emptyTag('text');
});

//http://davidwalsh.name/convert-image-data-uri-javascript
function readImage(input) {
    if ( input.files && input.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
             $('#img').attr( "src", e.target.result );
             $('#base').text( e.target.result );
        };       
        FR.readAsDataURL( input.files[0] );
    }
}

$("#asd").change(function(){
    readImage( this );
});

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

function grayscaleImageIE(imgObj)
{
	imgObj.style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayScale=1)';
}

function grayscaleImage(imgObj)
{
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