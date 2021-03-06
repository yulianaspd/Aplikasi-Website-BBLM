<?php
function add_widget($tipe,$posisi) {
	
	if($posisi == 'sidebar') : 
		$printWidget = '<div id="widget">';
	elseif($posisi == 'footer') : 
		$printWidget = '<div id="footer-widget">';
	endif;
	
	switch($tipe) {
		case "cari":		
			$printWidget .= '
				<form method="POST" action="hasil-pencarian.html">
					<input class="searchField" type="text" name="kata" maxlength="50" placeholder="Cari.." />
					<input class="searchSubmit" type="submit" value="" />
				</form>';	
		break;
		
		case "populer":
			$printWidget .= '<div id="widget-title"><h3><img src="templates/pelatihan_bblm/images/icon_side.png" /> Rangkuman Kegiatan</h3></div>
							<ul>';
				$populer = mysql_query("SELECT dibaca, judul, judul_seo, 
										id_berita, gambar    
										FROM berita 
										ORDER BY dibaca DESC LIMIT 0,5");		 
				while($p = mysql_fetch_array($populer)) {
					$judul = $p[judul];
					$printWidget .= '<li><a class="ease" href="berita-'.$p[id_berita].'-'.$p[judul_seo].'.html">&raquo; '.$judul.'</a></li>';
				}
			$printWidget .= '</ul>';
		break;
		
		case "kategori":
			$printWidget .= '<div id="widget-title"><h3><img src="templates/pelatihan_bblm/images/icon_side.png" /> Kategori Kegiatan</h3></div>
							<ul>'; 
			$kategori = mysql_query("SELECT nama_kategori, kategori.id_kategori, kategori_seo,  
								   COUNT(berita.id_kategori) AS jml 
								   FROM kategori LEFT JOIN berita 
								   ON berita.id_kategori=kategori.id_kategori 
								   WHERE kategori.aktif='Y'  
								   GROUP BY nama_kategori");
			while($k = mysql_fetch_array($kategori)) {
				$nama_kategori = strtoupper($k[nama_kategori]);
				$printWidget .= '<li><a class="ease" href="kategori-'.$k[id_kategori].'-'.$k[kategori_seo].'.html">&middot; '.$nama_kategori.'</a> ('.$k[jml].')</li>';
			}
		$printWidget .= '</ul>';
		break;
		
		case "agenda":
			$printWidget .= '<div id="widget-title"><h3><img src="templates/pelatihan_bblm/images/icon_side.png" /> Agenda Kegiatan</h3></div>
							<ul>';
            $agenda = mysql_query("SELECT * FROM agenda ORDER BY id_agenda DESC LIMIT 4");
            while($a = mysql_fetch_array($agenda)) {
                $tgl_agenda = tgl_indo($a[tgl_mulai]);
                $isi_agenda = strip_tags($a['isi_agenda']); // membuat paragraf pada isi berita dan mengabaikan tag html
                $isi = substr($isi_agenda,0,200); // ambil sebanyak 220 karakter
                $isi = substr($isi_agenda,0,strrpos($isi," ")); // potong per spasi kalimat
       
            $printWidget .= '<li><b>['.$tgl_agenda.']</b> - <a class="ease" href="agenda-'.$a[id_agenda].'-'.$a[tema_seo].'.html" title="'.$isi_agenda.' ...">'.$a[tema].'</a></li>';
                }
			$printWidget .= '</ul>';
		break;
		
		case "komentar":
			$printWidget .= '<div id="widget-title"><h3><img src="templates/pelatihan_bblm/images/icon_side.png" /> Komentar Terbaru</h3></div>
							<ul>';
			  
			$komentar = mysql_query("SELECT * FROM berita, komentar WHERE komentar.id_berita=berithttp://localhost/prakerin_webb1/templates/pelatihan_bblm/images/icon_side.pnga.id_berita ORDER BY id_komentar DESC LIMIT 5");
			while($k = mysql_fetch_array($komentar)){
				$printWidget .= '<li><a class="ease" href="http://'.$k[url].'"><b>'.$k[nama_komentar].'</b></a> pada <a class="ease" href="berita-'.$k[id_berita].'-'.$k[judul_seo].'.html#'.$k[id_komentar].'">'.$k[judul].'</a></li>';
		}
			$printWidget .= '</ul>';

		break;
		
		case "banner":
			$printWidget .= '<div id="widget-title"><h3><img src="templates/pelatihan_bblm/images/icon_side.png" /> Mitra Kami</h3></div>
							<ul style="overflow-y:scroll;height:250px;">';
		
			$banner = mysql_query("SELECT * FROM banner ORDER BY id_banner");
			while($b = mysql_fetch_array($banner)) {
				$printWidget .= '<li><a href="'.$b[url].'" target="_blank" title="'.$b[judul].'">&middot; '.$b[judul].'</a></li>';
			}
			$printWidget .= '</ul>';
		
		break;
		
		case "redaksi":
			$printWidget .= '<div id="redaksi"><div class="title">Redaksi : </div>';
							
			$redaksi = mysql_query("SELECT * FROM redaksi ORDER BY id");
			while($tampil=mysql_fetch_array($redaksi)){
				$printWidget .= '<p><marquee width="850px" direction="left">'.$tampil[isi_redaksi].'</marquee></p></div>';
			};
		break;
	}
	
	$printWidget .= '</div>';
	
	return $printWidget;
	
	echo $printWidget;
}
?>