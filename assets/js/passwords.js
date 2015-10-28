$(document).ready(function(){
    completePasswordLengthSelect(4, 100);
});

function completePasswordLengthSelect(minLength, maxLength){
	for (var i = minLength; i < maxLength+1; i++) {
		$('#password-length').append('<option value=\"' + i + '\">' + i + '</option>');
	}
}

$('#generate-password').click(function(){
	var passwordCharArray = createPasswordCharArray();
	var pathLength = document.getElementById('password-length').value;
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

function randomString(passwordCharArray, pathLength){
	var randomstring = '';
	for (var i = 0; i < pathLength; i++) {
		var rnum = Math.floor(Math.random() * passwordCharArray.length);
		randomstring += passwordCharArray[rnum];
	}
	return randomstring;
}
