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