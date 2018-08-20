
	function qHalimun(vKode, vMode) {
		var cai    = "a";
		var sumput = "725ZepcrxR86F93Eifzq4TPsgL1dMVnKShmUQJoCOtWvYbXyk0NlaIAuwBDjGH";
		var kodePanjang = vKode.length;
		var kodeNew = "";
		var i=0;
		var Pos;
		if (kodePanjang > 62) kodePanjang = 62;

		// ngeusian cai
		for (i=98; i < 123; i++) {
			cai += String.fromCharCode(i);
		}
		for (i=65; i < 91; i++) {
			cai += String.fromCharCode(i);
		}
		for (i=48; i < 58; i++) {
			cai += String.fromCharCode(i);
		}
			
			
		// keur nyumputkeun
		if(vMode == 7) {
			for (i=0; i < kodePanjang; i++)
				{
					// cari posisi pada cai
					Pos = cai.indexOf( vKode[i] );
					kodeNew += sumput.charAt(Pos);
				}
		} else {
		// keur nembongkeun
			for (i=0; i < kodePanjang; i++)
				{
					// cari posisi pada cai
					Pos = sumput.indexOf( vKode[i] );
					kodeNew += cai.charAt(Pos);
				}		
		}
		return kodeNew.trim();
	}

	function validasi() {
	    var tulak;
		var nama = document.getElementById("iNama").value;
		var hak = document.getElementById("iHak").value;
		var kode = document.getElementById("iKode").value;
		if (nama != "cai") {
			alert('Anda penyusup !');
			return false;
		}
		if (nama != "" && hak !="" && kode !="") {
			tulak = qHalimun(kode, hak);
			alert ("Hasilnya : " + tulak);
			return true;
		}else{
			alert('Anda harus mengisi data dengan lengkap !');
		}
		
	}
