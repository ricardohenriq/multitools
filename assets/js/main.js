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