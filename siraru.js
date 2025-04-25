
function daftarPustaka(){
	let cttInp = document.getElementById("sitasi").value;
	let urlInp = document.getElementById("alamat").value;
	// panjang sitasi
	let cttInpJml = cttInp.length;
	
	// ambil nama marga penulis
	// mendeteksi , pertama
	let margaIndex = cttInp.indexOf(",",0);
	   // jika penulis tunggal, berarti tidak ada tanda koma
		// deteksi titik pertama
		if(margaIndex < 0) margaIndex = cttInp.indexOf(".",0);	
	let margaNama = cttInp.substr(0, margaIndex);

	// ambil tahun terbit
	// deteksi titik pertama 		
	let tahunIndex = cttInp.indexOf(".");
	let tahunJmlAngka = 4;
	let tahunTerbit = cttInp.substr(tahunIndex+2, tahunJmlAngka);
   let penulisNama = cttInp.substr(0, tahunIndex);
	
   let kodeBuku = margaNama + tahunTerbit;
	
   // judul buku
	// deteksi index titik di akhir judul
	// angka 7 hanya untuk dimulai setelah indek tahun
   let judulIndex = cttInp.indexOf(".", tahunIndex+7);
	let judulBuku = cttInp.substr(tahunIndex + tahunJmlAngka + 4, judulIndex - tahunIndex - 8);

	// penerbit dan kota
	let penerbit = cttInp.substr(judulIndex+2, cttInpJml - judulIndex);

   // sitasi
	let cttLengkap = "&lt;p&gt;" + penulisNama + ". " + tahunTerbit + ". " +
	    "&lt;button onclick=&quot;qip(&apos;" + kodeBuku + "&apos;)&quot;&gt;" +
		 judulBuku + "&lt;/button&gt;. " + penerbit + "&lt;/p&gt;";


	// alamat cover
	let codeAwal = urlInp.indexOf("fi/",0);
	let codeAkhir = urlInp.indexOf("&dl",0);
	let codeURLdan = urlInp.substr(codeAwal+3, codeAkhir - codeAwal - 3);
	let codeUnik = '&amp;' + 'amp' + ';st';
	let codeVerifikasi = codeURLdan.replace('&st', codeUnik);
	let codeURL = '&lt;p id=&quot;' + kodeBuku + '&quot;&gt' + codeVerifikasi + '&lt;/p&gt;';


	
	   document.getElementById("namaView").innerHTML = cttLengkap; 
		document.getElementById("alamatView").innerHTML = codeURL; 
}

function qUrlPilahKode(idEnt) {
  // https:..../Penulis2015.png?rlkey=m.....fvh6x&dl=0
  // ----0-----                ---------1-------------

  let linkInp = idEnt;
  let pilah = [];
  let titik = [];  
  titik[0] = linkInp.indexOf('fi/', 0)+3;
  titik[1] = 21;
  titik[2] = linkInp.indexOf('png?', 0)+4;
  titik[3] = linkInp.indexOf('st=', 0);
  
  pilah[0] = linkInp.substr(titik[0], titik[1]);
  pilah[1] = linkInp.substring(titik[0]+titik[1]+1, titik[2]-5);
  pilah[2] = linkInp.substring(titik[2]+6, titik[3]-1);
  pilah[3] = linkInp.slice(titik[3]+3, titik[3]+11);  
  
  return pilah; 
}

function qsetIdCodeForDirectLink(idEnt) {
    let idInp = qUrlPilahKode(idEnt);
    let tandapemisah = ' ';
	// hanya untuk kerapian
	let kodeKuota = 14;
	let kodeBukuPj = idInp[1].length;
	let tandaSpasi = '&nbsp;';
	let spasi = '';
	if (kodeBukuPj < kodeKuota) spasi = tandaSpasi.repeat(kodeKuota-kodeBukuPj);
	
	let kodeUnik = '&lt;p id="' + idInp[1] + '"' + spasi + '>' + idInp[0] + tandapemisah +
	               idInp[2] + tandapemisah + idInp[3] + '&lt;/p&gt;';
	
   // document.getElementById('demo').innerHTML = kodeUnik; 
	return kodeUnik;
}

function getTahunTerbitDiSitasi(idLinkEnt){
	let tahunIndexSimbolAwal = '(';
	let tahunIndexSimbolAkhir = ')';
	let spEfek = 1;
	
	// deteksi tanda ( pertama 
	let tahunIndexAwal  = idLinkEnt.indexOf(tahunIndexSimbolAwal);
	let tahunIndexAkhir = idLinkEnt.indexOf(tahunIndexSimbolAkhir);
	
	// jumlah angka tahun tidak selalu 4 karena ada tambahan a, b, c dst.
	let tahunJmlAngka = tahunIndexAkhir - tahunIndexAwal - spEfek;
	let tahunTerbit = idLinkEnt.substr(tahunIndexAwal + spEfek, tahunJmlAngka);
	
	return tahunTerbit;
}

function getNamaPenulisDiSitasi(idLinkEnt){
	let tahunIndexSimbolAwal = '(';
	
	let tahunIndexAwal = idLinkEnt.indexOf(tahunIndexSimbolAwal)-1;
   let penulisDan = idLinkEnt.substr(0, tahunIndexAwal);
	let penulis = penulisDan.replaceAll(/&/g,'&amp;' + 'amp;');
	
	return penulis;
}

function getPenerbit(idEnt) {
	let titikPenerbitAwal = idEnt.lastIndexOf(".")+1;
	let penerbit = idEnt.slice(titikPenerbitAwal);
	penerbit = penerbit.replaceAll(/&/g,'&amp;' + 'amp;');
	
	return penerbit;
}

function hapusTitikDiAkhirSitasi(idEnt) {
	// keharusan input tanpa tanda . di akhir sitasi awal
	
	let idEntPush = '';
	let panjang = idEnt.length-1;
	let code = idEnt.charCodeAt(panjang);
	if(code == 46) {
		idEntPush = idEnt.substring(0, panjang);
		idEnt = idEntPush;
	}	
	return idEnt;
	
}

function qKodeBukuStd(idEnt){
  // let chInp = document.getElementById(idLink).innerHTML;
  // let bukuKode = qKodeBukuAmbilDariUrlDb(idEnt);
  let bukuKode = idEnt;
  let kodeKuota = 14;
  
  // cek char terakhir (angka atau huruf)
  let kodeJml = bukuKode.length;
  let kodeAkhir = bukuKode.charCodeAt(kodeJml-1);
  let kodeTahunJml = 4;
  // 57 charCode angka 9 
  if (kodeAkhir > 57) kodeTahunJml = 5;
  let tahun = bukuKode.substr(kodeJml-kodeTahunJml, kodeTahunJml);
  let penulis = bukuKode.substr(0, kodeJml-kodeTahunJml);
  let bukuKodeStd = bukuKode;

	if (kodeJml > kodeKuota) {
		penulis = bukuKode.substr(0, 14-kodeTahunJml);
		bukuKodeStd = penulis + tahun;
	}
	//  document.getElementById('demo').innerHTML = bukuKodeStd; 
  return bukuKodeStd;  
}

function getNamaBaniDiSitasi(idEnt) {
	let penulis = getNamaPenulisDiSitasi(idEnt);
	let bani = penulis;
	let bukan = -1;
	
	// deteksi nama penulis tunggal
	let tunggal = idEnt.indexOf(',');
	if (tunggal != bukan) {
		bani = penulis.substr(0, tunggal);
	}
	
	return bani; 	  
}

function getJudulDiSitasi(idEnt) {

	let titikMulai = idEnt.indexOf(')', 0) + 2;
	let titikAkhir = idEnt.lastIndexOf('.')+1;
	let judulLengkap = idEnt.substring(titikMulai, titikAkhir);
	let judul = ['', '', ''];
	let judulSplit = [];	
	let jmlKodeTema = 0;
	const buttonTutup = '&lt;/button&gt;';
		
	let flag = 0;
	flag = judulLengkap.includes("~");
	if (flag) {
		judulSplit = judulLengkap.split('~');
		jmlKodeTema = (judulLengkap.match(/~/g)).length;
	}
	
	switch(jmlKodeTema) {
		case 1: 
			judul[1] = judulSplit[0] + buttonTutup;
			judul[2] = judulSplit[1];
			break;
		
		case 2: 
			judul = judulSplit;
			judul[1] += buttonTutup;
			break;
			
		default :
			judul[1] = judulLengkap;
			judul[2] = buttonTutup;
	}

	return judul;
}


function eBookPdf (baniInp, tahunInp, judul0, judul1, judul2) {
    
	const butTanda = '&lt;/button&gt;';
	let judul = '';
	let titikTanda = 0;
	
	if( (judul0 == '') & (judul2 == butTanda)) {
			judul = hapusTitikDiAkhirSitasi(judul1);
	} else {
			titikTanda = judul1.indexOf(butTanda, 0);
			judul = judul1.substring(0, titikTanda);;
	}
	
	return baniInp + ' (' + tahunInp + ') ' + judul;
}

async function copySitasiKeCb(idEnt) {
  let teks = document.getElementById(idEnt).innerHTML;
	
  // ganti semua karakter kode h.tml
  teks = teks.replace(/&lt;/g, "<");  
  teks = teks.replace(/&gt;/g, ">");
  teks = teks.replace(/&apos;/g, "\'");
  teks = teks.replace(/&quot;/g, "\"");
  teks = teks.replace(/&nbsp;/g, " ");
  
  await navigator.clipboard.writeText(teks);
}
