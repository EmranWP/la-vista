<?php 
include './assets/header.php';
include './assets/nav.php'; 
?>
<?php 
$heading = 'Ecology';
$sub_heading = 'Extra description';
$background = 'ecology-hero.png';
include './components/hero.php';
?>


<?php
include "./components/amazing_text.php";
//Any other info go here
include "./components/info.php";

include './components/image_slider.php';
include "./components/amazing_text.php";
// Different slider
include './components/image_slider_2.php';
include './components/contact_form.php';
?>
<?php include './assets/footer.php'; ?>