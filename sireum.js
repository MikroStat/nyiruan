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
