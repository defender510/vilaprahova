<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Imprejurimi</title>
	<meta name="description" content="Casa Alunis,zona superba de vacanta." />
	<link rel="stylesheet" href="css/site.css" media="all" />
	<link rel="stylesheet" href="css/panorama360.css" media="all" />
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js" type="text/javascript"></script> -->
	<script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
	<script src="js/jquery.mousewheel.min.js" type="text/javascript"></script>
	<script src="js/jquery.panorama360.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(function(){
			$('.panorama-view').panorama360();
			$('.panorama .hotspot').click(function(){
				alert('Hotspot');
				return false;
			});
		});
	</script>
</head>
<body>
	<div class="panorama">
		<div class="panorama-view">
			<div class="panorama-container">
				<img src="images/View_from_Sky_Tower_Akl_small.jpg" usemap="hotspots" data-width="6081" data-height="835" alt="Panorama" />
			</div>
		</div>
		<a class="info" href="../">Inapoi</a>
	</div>
</body>
</html>
<?php
		error_reporting(0);
		$name=$_SERVER['REMOTE_ADDR'];
		$refer=$_SERVER['HTTP_REFERER'];
		//$link = "<a href=\"$refer\" target=\"_blank\" >$refer.</a>";
		$hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
		$timevar=date('Y-m-d H:i:s');
		$to="iliescualexandrurobert@gmail.com";
		$subject="Imprejurimi Alunis";
		$body="IP: " . $name . "\nReferinta: " . $refer . "\nHostname: " . $hostname . "\nTimp: " . $timevar;
		mail($to,$subject,$body);
	?>