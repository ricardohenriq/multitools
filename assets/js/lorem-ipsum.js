$(document).ready(function(){
    completeLoremLengthSelect(1, 100);
});

function completeLoremLengthSelect(minLength, maxLength){
	for(var i = minLength; i < maxLength+1; i++){
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
