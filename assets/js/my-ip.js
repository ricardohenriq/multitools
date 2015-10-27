$(document).ready(function(){
	$.getJSON( "http://api.hostip.info/get_json.php",
        function(data){
            document.getElementById('my-ip').innerHTML = '<span>'+data.ip+'</span>';
        }
    );
});