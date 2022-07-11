

function WinPopUpArea(iRasioTiLayar){  

	// tinggi layar sesuai input
	var vLuhurna = iRasioTiLayar * screen.height.toFixed(0);
	
	// lebar layar sesuai input
	var vLegana  = .5 * iRasioTiLayar * screen.width.toFixed(0); 

	// window centering
	var vTiLuhur     = (screen.height - vLuhurna) / 2;   
	var vTiKenca     = (screen.width  - vLegana) / 2;

	return kaTenjona = 'createnew=0, fullscreen=0, toolbar=0, location=0, directories=0, status=1, ' +
	'menubar=0, scrollbars=1, titlebar=0, resizable=0, copyhistory=0, width=' +
	vLegana + ', height=' + vLuhurna + ', top=' + vTiLuhur + ', left=' + vTiKenca;

}


function iqra(iSitu) {
	let alamat="https://dl.dropboxusercontent.com/s/";
	// apakah huruf ketiga = p (112)
	let posisi = iSitu.charCodeAt(3);
 
	// url ditulis lengkap, mendeteksi huruf p (112)
	// data tidak disimpan di dB
	if (iSitu.charCodeAt(3)==112) {
		alamat = iSitu;
	} 
	else // data di dropBox
	{
		// tidak ditulis ektensi (default)
		if (iSitu.indexOf(".") < 0)
			alamat += iSitu + ".jpg";
		else // 
			alamat += iSitu;
	}
	
	window.open(alamat, "WindowSaung", WinPopUpArea(.7));
}	