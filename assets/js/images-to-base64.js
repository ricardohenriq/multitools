$('#base64-container #copy-to-clipboard').click(function(){
	copyToClipboard('base64');
});

$('#image-to-base64').change(function(){
    readImage(this);
});

function readImage(input){
    if(input.files && input.files[0]){
        var FR= new FileReader();
        FR.onload = function(e){
             $('#img').attr("src", e.target.result);
             $('#base64').text(e.target.result);
        };       
        FR.readAsDataURL(input.files[0]);
    }
}