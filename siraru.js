
function pustaka(){
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
	
