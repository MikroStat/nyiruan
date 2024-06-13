function WinPopUpArea(iRasioTiLayar){  

	// tinggi layar sesuai input //
	let vLuhurna = iRasioTiLayar * screen.height.toFixed(0);
	
	// lebar layar sesuai input //
	let vLegana  = .5 * iRasioTiLayar * screen.width.toFixed(0); 

	// window centering //
	let vTiLuhur     = (screen.height - vLuhurna) / 2;   
	let vTiKenca     = (screen.width  - vLegana) / 2;

	let kaTenjona = 'createnew=0, fullscreen=0, toolbar=yes, location=no, directories=0, status=1, ' +
	'menubar=no, scrollbars=1, addressbar=no, titlebar=no, resizable=1, copyhistory=0, width=' +
	vLegana + ', height=' + vLuhurna + ', top=' + vTiLuhur + ', left=' + vTiKenca;
	
	return kaTenjona;
}

/* ===============  window ==================== */
/* mencegah browser memblok window */
function callApi() {
   return new Promise(function (resolve) {
      setTimeout(function () {
         resolve();
      }, 1000);
   });
}

function qdriveUrl(imgId) {
  let driveStart = 'https://drive.google.com/thumbnail?id=';
  let idUrl=document.getElementById(imgId).innerHTML;
  let imgUrl = driveStart + idUrl + '&sz=w1000';
  return imgUrl;
}

function qip(imgId) {
   // let imgUrl=document.getElementById(imgId).innerHTML; 
   let imgUrl = qdriveUrl(imgId);
   let imgPage = window.open("", "_blank", WinPopUpArea(.7));
   // imgPage.document.write("<p>Loading....</p>");
   callApi()
      .then(function () {
         // imgPage.location.href = imgUrl;
         imgPage.document.write('<img src="' + imgUrl + '"width=400px"' + '"/>');
      })
      .catch(function () {
         imgPage.close();
      });
}

function qive(imgId) {
  let gambar = new Image(); 
  gambar.src = 'https://drive.google.com/thumbnail?id=';
  gambar.src += imgId;
  gambar.src += '&sz=w1000';
  var lokasiId = 'X' + imgId.substring(0, 3);
  // gambar.width = 200; 
  // gambar.height = 200; 
  // document.getElementById("demo").innerHTML = "YOU CLICKED ME!"; 
  // alert(gambar.src);
  document.getElementById(lokasiId).innerHTML = '<img src="' + gambar.src + '"width=400px"' + '" />'; 
}
  
function qiv(imgDefId) {
  let gambar = new Image(); 
  gambar.src = qdriveUrl(imgDefId);
  var lokasiId = 'X' + imgDefId;
  // gambar.width = 200; 
  // gambar.height = 200; 
  // document.getElementById("demo").innerHTML = "YOU CLICKED ME!"; 
  // alert(gambar.src);
  document.getElementById(lokasiId).innerHTML = '<img src="' + gambar.src + '"width=400px"' + '" />'; 
}
  
function qim() {
  let jmlGbr = arguments.length;
  let gambar = [];
  let lokasi = [];


  for (let i = 0; i < jmlGbr; i++) {
    gambar[i] = new Image();
    lokasi[i] = 'x' + arguments[i];

    gambar[i].src = qdriveUrl(arguments[i]);
    document.getElementById(lokasi[i]).innerHTML = '<img src="' + gambar[i].src + '"width=400px"' + '" />';
  }

}
