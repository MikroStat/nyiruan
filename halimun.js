
	function halimun(vKode, vMode) {
		var cai    = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var sumput = "725ZepcrxR86F93Eifzq4TPsgL1dMVnKShmUQJoCOtWvYbXyk0NlaIAuwBDjGH";
		var kodePanjang = vKode.length;
		var kodeNew = "";
		var i=0;
		var Pos;
		if (kodePanjang > 62) kodePanjang = 62;

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
		return kodeNew;
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
			tulak = halimun(kode, hak);
			alert ("Hasilnya : " + tulak);
			return true;
		}else{
			alert('Anda harus mengisi data dengan lengkap !');
		}
		
	}