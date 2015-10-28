$('#strings-container #copy-to-clipboard').click(function(){
	copyToClipboard('text');
});

$('#str-to-upper-case').click(function(){
	strToUpperCase('text');
});

function strToUpperCase(fieldId){
	var strOriginal = document.getElementById(fieldId).value;
	var strUpperCase = strOriginal.toUpperCase();
	document.getElementById(fieldId).value = strUpperCase;
}

$('#str-to-lower-case').click(function(){
	strToLowerCase('text');
});

function strToLowerCase(fieldId){
	var strOriginal = document.getElementById(fieldId).value;
	var strLowerCase = strOriginal.toLowerCase();
	document.getElementById(fieldId).value = strLowerCase;
}

$('#str-to-sentence-case').click(function(){
	strToSentenceCase('text');
});

function strToSentenceCase(fieldId){
	var string = document.getElementById(fieldId).value.toLowerCase();
    var n = string.split(".");
	var vfinal = ""
	for(var i = 0; i < n.length; i++){
		var spaceput = ""
		var spaceCount = n[i].replace(/^(\s*).*$/,"$1").length;
		n[i] = n[i].replace(/^\s+/,"");
		var newstring = n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
		for(j = 0; j < spaceCount; j++){
			spaceput = spaceput + " ";
		}
	   vfinal = vfinal + spaceput + newstring + ".";
	}
	document.getElementById(fieldId).value = vfinal.substring(0, vfinal.length - 1);
}

$('#str-to-title-case').click(function(){
	strToTitleCase('text');
});

function strToTitleCase(fieldId){
	//incluir na regex pegar Ç
	var text = document.getElementById(fieldId).value;
    document.getElementById(fieldId).value = text.replace(/\w+/g, function(str){
				return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
			}
		);
}

$('#str-length').click(function(){
	strLength('text','result-single','result-single-modal');
});

function strLength(fieldId, fieldAnswer, modalId){
	var str = document.getElementById(fieldId).value;
	var answer = 'Text has: ' + str.length + ' Characters';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
}

$('#count-words').click(function(){
	countWords('text', 'result-single','result-single-modal');
});

function countWords(fieldId, fieldAnswer, modalId){
	var str = document.getElementById(fieldId).value;
	str = str.replace(/(^\s*)|(\s*$)/gi,"");
	str = str.replace(/[ ]{2,}/gi," ");
	str = str.replace(/\n /,"\n");
	var wordsLength = str.split(' ').length;
	var answer = 'Text has: ' + wordsLength + ' Words';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
}

$('#replace-characters').click(function(){
	replaceCharacters('text','in-char','out-char','replace-modal');
	return false;
});

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

$('#remove-extra-spaces').click(function(){
	removeExtraSpaces('text');
});

function removeExtraSpaces(fieldId){
	var originalString = document.getElementById(fieldId).value;
	var newString = originalString.replace(/(^\s*)|(\s*$)/gi,"");
	newString = newString.replace(/[ ]{2,}/gi," ");
	newString = newString.replace(/\n /,"\n");
	document.getElementById(fieldId).value = newString;
}

$('#count-vowel').click(function(){
	countVowel('text','result-single','result-single-modal');
});

function countVowel(fieldId, fieldAnswer, modalId){
	var text = document.getElementById(fieldId).value;
    var totalVowel = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (var i = 0; i < text.length; i++) {
        if(vowels.indexOf(text[i]) != -1) {
            totalVowel++;
        }
    }
	
    var answer = 'Text has: ' + totalVowel + ' Vowels';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
}

$('#count-consonant').click(function(){
	countConsonant('text','result-single','result-single-modal');
});

function countConsonant(fieldId, fieldAnswer, modalId){
	var text = document.getElementById(fieldId).value;
    var totalConsonant = 0;
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v',
	'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 
	'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < text.length; i++) {
        if(consonants.indexOf(text[i]) != -1) {
            totalConsonant++;
        }
    }
	
    var answer = 'Text has: ' + totalConsonant + ' Consonants';
	document.getElementById(fieldAnswer).innerHTML = answer;
	$('#' + modalId).modal('show');
}

$('#remove-all-spaces').click(function(){
	removeAllSpaces('text');
});

function removeAllSpaces(fieldId) {
	var originalString = document.getElementById(fieldId).value;
	var newString = originalString.split(' ').join('');
	document.getElementById(fieldId).value = newString;
}
