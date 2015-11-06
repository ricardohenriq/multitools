$(document).ready(function(){
	populateWithBanners('banners/banners728x90/', 'banners-quantity.txt', 'first-ad');
	populateWithBanners('banners/banners728x90/', 'banners-quantity.txt', 'second-ad');
});

var allText = '';
function readTextFile(fileURL){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileURL, false);
    rawFile.onreadystatechange = function(){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                allText = rawFile.responseText;
            }else{
				allText = '';
			}
        }else{
			allText = '';
		}
    }
    rawFile.send(null);
}

function populateWithBanners(bannersURL, bannersQuantityFileName, bannerAreaId){
	readTextFile(bannersURL + bannersQuantityFileName);
	var bannersQuantityStored = parseInt(allText);
	var bannerSource = getBannersSource(bannersURL, bannersQuantityStored);
	appendHTML(bannerAreaId, bannerSource);
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getBannersSource(baseURL, maxValue){
	allText = '';
	while(allText === ''){
		var numberDrawn = randomIntFromInterval(1, maxValue);
		readTextFile(baseURL + numberDrawn + '.txt');
		if(allText !== ''){
			return allText;
		}
	}
}

function appendHTML(bannersAreaId, bannerSource){
	var bannerArea = document.getElementById(bannersAreaId);
	var div = document.createElement('div');
	$(div).addClass('banner');
	$(div).append(bannerSource);
	$(bannerArea).append(div);
}