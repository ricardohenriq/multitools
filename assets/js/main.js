function strToUpperCase(fieldId){
	var strOriginal = document.getElementById(fieldId).value;
	var strUpperCase = strOriginal.toUpperCase();
	document.getElementById(fieldId).value = strUpperCase;
}

function strToLowerCase(fieldId){
	var strOriginal = document.getElementById(fieldId).value;
	var strLowerCase = strOriginal.toLowerCase();
	document.getElementById(fieldId).value = strLowerCase;
}

function strToSentenceCase(fieldId){
	var string=document.getElementById(fieldId).value;
    var n=string.split(".");
	var vfinal=""
	for(i=0;i<n.length;i++)
	{
	   var spaceput=""
	   var spaceCount=n[i].replace(/^(\s*).*$/,"$1").length;
	   n[i]=n[i].replace(/^\s+/,"");
	   var newstring=n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
	   for(j=0;j<spaceCount;j++)
	   spaceput=spaceput+" ";
	   vfinal=vfinal+spaceput+newstring+".";
	 }
	 document.getElementById(fieldId).value=vfinal.substring(0, vfinal.length - 1);
}

function strToTitleCase(fieldId){
	//incluir na regex pegar Ç
	var text = document.getElementById(fieldId).value;
    document.getElementById(fieldId).value = text.replace(/\w+/g, function(str){
				return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
			}
		);
}

function strLength(fieldId, fieldAnswer, modalId){
	var str = document.getElementById(fieldId).value;
	var answer = 'Text has: ' + str.length + ' Characters';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
}

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

//http://www.mediacollege.com/internet/javascript/number/random.html
function randomString(passwordCharArray, pathLength){
	var randomstring = '';
	for (var i = 0; i < pathLength; i++) {
		var rnum = Math.floor(Math.random() * passwordCharArray.length);
		randomstring += passwordCharArray[rnum];
	}
	return randomstring;
}

//http://www.mediacollege.com/internet/javascript/text/count-words.html
function countWords(fieldId, fieldAnswer, modalId){
	var str = document.getElementById(fieldId).value;
	str = str.replace(/(^\s*)|(\s*$)/gi,"");
	str = str.replace(/[ ]{2,}/gi," ");
	str = str.replace(/\n /,"\n");
	var wordsLength = str.split(' ').length;
	var answer = 'Text has: ' + wordsLength + ' Words';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
	//document.getElementById("wordcount").value = s.split(' ').length;
}

//http://www.mediacollege.com/internet/javascript/text/replace-characters.html
function replaceCharacters(fieldId, inCharId, outCharId, modalId) {
	var string = document.getElementById(fieldId).value;
	var inChar = document.getElementById(inCharId).value;
	var outChar = document.getElementById(outCharId).value;
	for (var i = 0; i < string.length; i++ ) {
        if(string.indexOf(inChar) != -1){
            string = string.replace(inChar, outChar);
        }
    }
	document.getElementById(fieldId).value = string;
	$('#' + modalId).modal('hide');
}

//http://www.mediacollege.com/internet/javascript/text/remove-extra-spaces.html
function removeExtraSpaces(fieldId){
	var originalString = document.getElementById(fieldId).value;
	var newString = originalString.replace(/(^\s*)|(\s*$)/gi,"");
	newString = newString.replace(/[ ]{2,}/gi," ");
	newString = newString.replace(/\n /,"\n");
	document.getElementById(fieldId).value = newString;
}

//http://www.devfuria.com.br/logica-de-programacao/strings-contar-vogais/
function countVowel(fieldId, fieldAnswer, modalId){
	var text = document.getElementById(fieldId).value;
    var totalVowel = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (var i = 0; i < text.length; i++ ) {
        if(vowels.indexOf(text[i]) != -1) {
            totalVowel++;
        }
    }
	
    var answer = 'Text has: ' + totalVowel + ' Vowels';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
}

function countConsonant(fieldId, fieldAnswer, modalId){
	var text = document.getElementById(fieldId).value;
    var totalConsonant = 0;
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v',
	'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 
	'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < text.length; i++ ) {
        if(consonants.indexOf(text[i]) != -1) {
            totalConsonant++;
        }
    }
	
    var answer = 'Text has: ' + totalConsonant + ' Consonants';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
}

//http://www.mediacollege.com/internet/javascript/page/scroll.html


//http://www.mediacollege.com/internet/javascript/form/remove-spaces.html/
function removeAllSpaces(fieldId) {
	var originalString = document.getElementById(fieldId).value;
	var newString = originalString.split(' ').join('');
	document.getElementById(fieldId).value = newString;
}

//função que captura o click de gerar hash
//função que faz o download do script e chama a função que faz o hash
//função que faz o hash

$('#generate-hash').click(function(){
	var hashType = document.getElementById('hash-type').value;
	var textToHash = getDataToHash('text');
	var hash = executeHash(hashType, textToHash);
	printValue(hash, 'hash');
});

function getDataToHash(field){
	return document.getElementById(field).value;
}

function executeHash(hashType, textToHash){
	var hash;
	if(hashType == 'MD5'){
		hash = executeHashMD5(textToHash);
	}else if(hashType == 'SHA-1'){
		hash = executeHashSHA1(textToHash);
	}else if(hashType == 'SHA-256'){
		hash = executeHashSHA256(textToHash);
	}else if(hashType == 'SHA-512'){
		hash = executeHashSHA512(textToHash);
	}else if(hashType == 'RIPEMD-160'){
		hash = executeHashRIPEMD160(textToHash);
	}else if(hashType == 'SHA-3-(512 bits)'){
		hash = executeHashSHA3512(textToHash);
	}else if(hashType == 'SHA-3-(384 bits)'){
		hash = executeHashSHA3384(textToHash);
	}else if(hashType == 'SHA-3-(256 bits)'){
		hash = executeHashSHA3256(textToHash);
	}else if(hashType == 'SHA-3-(224 bits)'){
		hash = executeHashSHA3224(textToHash);
	}
	return hash;
}

function printValue(value, areaToPrint){
	document.getElementById(areaToPrint).value = value;
}

function executeHashMD5(text){
	return CryptoJS.MD5(text);
}

function executeHashSHA1(text){
	return CryptoJS.SHA1(text);
}

function executeHashSHA256(text){
	return CryptoJS.SHA256(text);
}

function executeHashSHA512(text){
	return CryptoJS.SHA512(text);
}

function executeHashSHA3512(text){
	return CryptoJS.SHA3(text, {outputLength:512});
}

function executeHashSHA3384(text){
	return CryptoJS.SHA3(text, {outputLength:384});
}

function executeHashSHA3256(text){
	return CryptoJS.SHA3(text, {outputLength:256});
}

function executeHashSHA3224(text){
	return CryptoJS.SHA3(text, {outputLength:224});
}

function executeHashRIPEMD160(text){
	return CryptoJS.RIPEMD160(text);
}

function emptyTag(fieldId){
	$('#' + fieldId).empty();
	document.getElementById(fieldId).value = '';
}

$('#reset-text').click(function(){
	emptyTag('text');
});

$('#file-to-hash').change(
    function () {
        var reader = new FileReader();
        
        reader.addEventListener(
            'load',
            function () {
				var hashType = document.getElementById('hash-type').value;
				var textToHash = CryptoJS.lib.WordArray.create(this.result);
				var hash = executeHash(hashType, textToHash);
				printValue(hash, 'hash');
            }
        );
        
        reader.readAsArrayBuffer(this.files[0]);
    }
);

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

var outputElem = document.querySelector("#ascii-art");
$('#image-to-ascii').change(function(){
	console.log('s');
  var file = this.files[0];
  var reader = new FileReader();
  reader.onload = function() {
    var dataURI = reader.result;
    var image = document.createElement("img");
    image.src = dataURI;
    image.onload = function(){
      outputElem.innerHTML = asciify.asciify(image)
        .replace(/\n/g, "<br>")
        .replace(/ /g, "&nbsp;");
    };
  };
  reader.readAsDataURL(file);
});

$(document).ready(function(){
    completePasswordLengthSelect(4, 100);
    completeLoremLengthSelect(1, 100);
	$.getJSON( "http://api.hostip.info/get_json.php",
        function(data){
            document.getElementById('my-ip').innerHTML = '<span>'+data.ip+'</span>';
        }
    );
});

function completePasswordLengthSelect(minLength, maxLength){
	for (var i = minLength; i < maxLength+1; i++) {
		$('#password-length').append('<option value=\"' + i + '\">' + i + '</option>');
	}
}

function completeLoremLengthSelect(minLength, maxLength){
	for (var i = minLength; i < maxLength+1; i++) {
		$('#lorem-quantity').append('<option value=\"' + i + '\">' + i + '</option>');
	}
}

$('#generate-lorem-ipsum').click(function(){
	var loremQuantity = document.getElementById('lorem-quantity').value;
	var loremType = document.getElementById('lorem-type').value;
	emptyTag('lorem-ipsum-generated');
	generateLorem(loremQuantity + loremType, 'lorem-ipsum-generated');
});

function generateLorem(loremDescription, fieldId){
	var lorem = new Lorem;
	lorem.type = Lorem.TEXT;
	lorem.query = loremDescription;
	lorem.createLorem(document.getElementById(fieldId));
}

$('#generate-password').click(function(){
	var passwordCharArray = createPasswordCharArray();
	//alert(passwordCharArray);
	var pathLength = document.getElementById('password-length').value;
	//alert(pathLength);
	var password = randomString(passwordCharArray, pathLength);
	printValue(password, 'your-password');
});

function createPasswordCharArray(){
	var options = [];
	options['symbols'] = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.',
		'/',':',';','<','<','|','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
	options['numbers'] = ['0','1','2','3','4','5','6','7','8','9'];
	options['uppercase'] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
		'P','Q','R','S','T','U','V','W','X','T','Z'];
	options['lowercase'] = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p',
		'q','r','s','t','u','v','w','x','y','z'];
	var passwordCharArray = [];
	
	if($('#symbols').is(":checked")){
		passwordCharArray = passwordCharArray.concat(options['symbols']);
	}if($('#numbers').is(":checked")){
		passwordCharArray = passwordCharArray.concat(options['numbers']);
	}if($('#uppercase').is(":checked")){
		passwordCharArray = passwordCharArray.concat(options['uppercase']);
	}if($('#lowercase').is(":checked")){
		passwordCharArray = passwordCharArray.concat(options['lowercase']);
	}if(passwordCharArray.length === 0){
		passwordCharArray = passwordCharArray.concat(options['symbols']);
		passwordCharArray = passwordCharArray.concat(options['numbers']);
		passwordCharArray = passwordCharArray.concat(options['uppercase']);
		passwordCharArray = passwordCharArray.concat(options['lowercase']);
	}
	
	return passwordCharArray;
}