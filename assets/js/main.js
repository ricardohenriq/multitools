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

//http://www.codeforest.net/html5-image-upload-resize-and-crop
//http://www.horariodebrasilia.org/
//http://davidwalsh.name/convert-image-data-uri-javascript
//https://bgrins.github.io/videoconverter.js/
//http://stackoverflow.com/questions/10525837/public-service-to-convert-bmp-gif-png-etc-to-jpg
