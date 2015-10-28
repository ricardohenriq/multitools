var outputElem = document.querySelector("#ascii-art");
$('#image-to-ascii').change(function(){
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
