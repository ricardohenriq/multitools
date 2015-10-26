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
function randomString(){
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	//document.randform.randomfield.value = randomstring;
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
	printHash(hash, 'hash');
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

function printHash(hash, areaToPrint){
	document.getElementById(areaToPrint).value = hash;
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

$('#reset-text').click(function(){
	document.getElementById('text').value = '';
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
				printHash(hash, 'hash');
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

function worldClock(zone, region){
var dst = 0
var time = new Date()
var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000)
var gmtTime = new Date(gmtMS)
var day = gmtTime.getDate()
var month = gmtTime.getMonth()
var year = gmtTime.getYear()
if(year < 1000){
year += 1900
}
var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", 
				"September", "October", "November", "December")
var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
if (year%4 == 0){
monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
}
if(year%100 == 0 && year%400 != 0){
monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
}

var hr = gmtTime.getHours() + zone
var min = gmtTime.getMinutes()
var sec = gmtTime.getSeconds()

if (hr >= 24){
hr = hr-24
day -= -1
}
if (hr < 0){
hr -= -24
day -= 1
}
if (hr < 10){
hr = " " + hr
}
if (min < 10){
min = "0" + min
}
if (sec < 10){
sec = "0" + sec
}
if (day <= 0){
if (month == 0){
	month = 11
	year -= 1
	}
	else{
	month = month -1
	}
day = monthDays[month]
}
if(day > monthDays[month]){
	day = 1
	if(month == 11){
	month = 0
	year -= -1
	}
	else{
	month -= -1
	}
}
if (region == "NAmerica"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(3)
	startDST.setHours(2)
	startDST.setDate(1)
	var dayDST = startDST.getDay()
	if (dayDST != 0){
		startDST.setDate(8-dayDST)
		}
		else{
		startDST.setDate(1)
		}
	endDST.setMonth(9)
	endDST.setHours(1)
	endDST.setDate(31)
	dayDST = endDST.getDay()
	endDST.setDate(31-dayDST)
	var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST && currentTime < endDST){
		dst = 1
		}
}
if (region == "Europe"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(2)
	startDST.setHours(1)
	startDST.setDate(31)
	var dayDST = startDST.getDay()
	startDST.setDate(31-dayDST)
	endDST.setMonth(9)
	endDST.setHours(0)
	endDST.setDate(31)
	dayDST = endDST.getDay()
	endDST.setDate(31-dayDST)
	var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST && currentTime < endDST){
		dst = 1
		}
}

if (region == "SAmerica"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(9)
	startDST.setHours(0)
	startDST.setDate(1)
	var dayDST = startDST.getDay()
	if (dayDST != 0){
		startDST.setDate(22-dayDST)
		}
		else{
		startDST.setDate(15)
		}
	endDST.setMonth(1)
	endDST.setHours(11)
	endDST.setDate(1)
	dayDST = endDST.getDay()
	if (dayDST != 0){
		endDST.setDate(21-dayDST)
		}
		else{
		endDST.setDate(14)
		}
	var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST || currentTime < endDST){
		dst = 1
		}
}
if (region == "Cairo"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(3)
	startDST.setHours(0)
	startDST.setDate(30)
	var dayDST = startDST.getDay()
	if (dayDST < 5){
		startDST.setDate(28-dayDST)
		}
		else {
		startDST.setDate(35-dayDST)
		}
	endDST.setMonth(8)
	endDST.setHours(11)
	endDST.setDate(30)
	dayDST = endDST.getDay()
	if (dayDST < 4){
		endDST.setDate(27-dayDST)
		}
		else{
		endDST.setDate(34-dayDST)
		}
	var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST && currentTime < endDST){
		dst = 1
		}
}
if (region == "Israel"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(3)
	startDST.setHours(2)
	startDST.setDate(1)
	endDST.setMonth(8)
	endDST.setHours(2)
	endDST.setDate(25)
	dayDST = endDST.getDay()
	if (dayDST != 0){
	endDST.setDate(32-dayDST)
	}
	else{
	endDST.setDate(1)
	endDST.setMonth(9)
	}
	var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST && currentTime < endDST){
		dst = 1
		}
}
if (region == "Beirut"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(2)
	startDST.setHours(0)
	startDST.setDate(31)
	var dayDST = startDST.getDay()
	startDST.setDate(31-dayDST)
	endDST.setMonth(9)
	endDST.setHours(11)
	endDST.setDate(31)
	dayDST = endDST.getDay()
	endDST.setDate(30-dayDST)
	var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST && currentTime < endDST){
		dst = 1
		}
}
if (region == "Baghdad"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(3)
	startDST.setHours(3)
	startDST.setDate(1)
	endDST.setMonth(9)
	endDST.setHours(3)
	endDST.setDate(1)
	dayDST = endDST.getDay()
		var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST && currentTime < endDST){
		dst = 1
		}
}
if (region == "Australia"){
	var startDST = new Date()
	var endDST = new Date()
	startDST.setMonth(9)
	startDST.setHours(2)
	startDST.setDate(31)
	var dayDST = startDST.getDay()
	startDST.setDate(31-dayDST)
	endDST.setMonth(2)
	endDST.setHours(2)
	endDST.setDate(31)
	dayDST = endDST.getDay()
	endDST.setDate(31-dayDST)
	var currentTime = new Date()
	currentTime.setMonth(month)
	currentTime.setYear(year)
	currentTime.setDate(day)
	currentTime.setHours(hr)
	if(currentTime >= startDST || currentTime < endDST){
		dst = 1
		}
}

	
if (dst == 1){
	hr -= -1
	if (hr >= 24){
	hr = hr-24
	day -= -1
	}
	if (hr < 10){
	hr = " " + hr
	}
	if(day > monthDays[month]){
	day = 1
	if(month == 11){
	month = 0
	year -= -1
	}
	else{
	month -= -1
	}
	}
return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec + " DST"
}
else{
return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec
}
}

function worldClockZone(){
document.getElementById("GMT").innerHTML = worldClock(0, "Greenwich")
document.getElementById("Vancouver").innerHTML = worldClock(-8, "NAmerica")
document.getElementById("SanFrancisco").innerHTML = worldClock(-8, "NAmerica")
document.getElementById("Seattle").innerHTML = worldClock(-8, "NAmerica")
document.getElementById("LosAngeles").innerHTML = worldClock(-8, "NAmerica")
document.getElementById("Denver").innerHTML = worldClock(-7, "NAmerica")
document.getElementById("MexicoCity").innerHTML = worldClock(-6, "NAmerica")
document.getElementById("Houston").innerHTML = worldClock(-6, "NAmerica")
document.getElementById("Minneapolis").innerHTML = worldClock(-6, "NAmerica")
document.getElementById("NewOrleans").innerHTML = worldClock(-6, "NAmerica")
document.getElementById("Chicago").innerHTML = worldClock(-6, "NAmerica")
document.getElementById("Montgomery").innerHTML = worldClock(-6, "NAmerica")
document.getElementById("Indianapolis").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("Atlanta").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("Detroit").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("Miami").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("WashingtonDC").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("Philadelphia").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("NewYork").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("Montreal").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("Boston").innerHTML = worldClock(-5, "NAmerica")
document.getElementById("BuenosAires").innerHTML = worldClock(-3, "BuenosAires")
document.getElementById("SaoPaulo").innerHTML = worldClock(-3, "SAmerica")
document.getElementById("RioDeJaneiro").innerHTML = worldClock(-3, "SAmerica")
document.getElementById("Lisbon").innerHTML = worldClock(0, "Europe")
document.getElementById("Dublin").innerHTML = worldClock(0, "Europe")
document.getElementById("London").innerHTML = worldClock(0, "Europe")
document.getElementById("Madrid").innerHTML = worldClock(1, "Europe")
document.getElementById("Barcelona").innerHTML = worldClock(1, "Europe")
document.getElementById("Paris").innerHTML = worldClock(1, "Europe")
document.getElementById("Brussels").innerHTML = worldClock(1, "Europe")
document.getElementById("Amsterdam").innerHTML = worldClock(1, "Europe")
document.getElementById("Frankfurt").innerHTML = worldClock(1, "Europe")
document.getElementById("Rome").innerHTML = worldClock(1, "Europe")
document.getElementById("Berlin").innerHTML = worldClock(1, "Europe")
document.getElementById("Prague").innerHTML = worldClock(1, "Europe")
document.getElementById("Vienna").innerHTML = worldClock(1, "Europe")
document.getElementById("Stockholm").innerHTML = worldClock(1, "Europe")
document.getElementById("Athens").innerHTML = worldClock(2, "Europe")
document.getElementById("Helsinki").innerHTML = worldClock(2, "Europe")
document.getElementById("Minsk").innerHTML = worldClock(2, "Europe")
document.getElementById("Istanbul").innerHTML = worldClock(2, "Europe")
document.getElementById("Cairo").innerHTML = worldClock(2, "Cairo")
document.getElementById("Jerusalem").innerHTML = worldClock(2, "Israel")
document.getElementById("Beirut").innerHTML = worldClock(2, "Beirut")
document.getElementById("Moscow").innerHTML = worldClock(3, "Europe")
document.getElementById("Baghdad").innerHTML = worldClock(3, "Baghdad")
document.getElementById("Dubai").innerHTML = worldClock(4, "Dubai")
document.getElementById("Bangkok").innerHTML = worldClock(7, "Bangkok")
document.getElementById("Jakarta").innerHTML = worldClock(7, "Jakarta")
document.getElementById("HongKong").innerHTML = worldClock(8, "HongKong")
document.getElementById("Beijing").innerHTML = worldClock(8, "Beijing")
document.getElementById("Shanghai").innerHTML = worldClock(8, "Shanghai")
document.getElementById("Seoul").innerHTML = worldClock(9, "Seoul")
document.getElementById("Tokyo").innerHTML = worldClock(9, "Tokyo")
document.getElementById("Melbourne").innerHTML = worldClock(10, "Australia")
document.getElementById("Sydney").innerHTML = worldClock(10, "Australia")
document.getElementById("Brisbane").innerHTML = worldClock(10, "Brisbane")
document.getElementById("Vladivostok").innerHTML = worldClock(10, "Europe")
document.getElementById("Kamchatka").innerHTML = worldClock(12, "Europe")

setTimeout("worldClockZone()", 1000)
}
window.onload=worldClockZone;

$('#colorpickerHolder').ColorPicker({flat: true});

//http://www.codeforest.net/html5-image-upload-resize-and-crop
//http://www.horariodebrasilia.org/
//https://bgrins.github.io/videoconverter.js/
//http://stackoverflow.com/questions/10525837/public-service-to-convert-bmp-gif-png-etc-to-jpg
