<?php
include './assets/header.php';
include './assets/nav.php';
?>
<?php
$heading = 'Location';
$sub_heading = 'Extra Description';
$background = 'location-hero.png';
include './components/hero.php';
?>


<?php
include "./components/amazing_text.php";
include './components/image_slider.php';
include "./components/amazing_text.php";
?>
<!-- Map -->
<div class="map__container">
    <div class="responsive-map container">
    <iframe src="https://maps.google.com/maps?q=thiland,%20phuket%20chalong&t=&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
</div>
<?php
include './components/contact_form.php';
include './assets/footer.php';
?>