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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4566.573837000223!2d98.32591578204959!3d7.8387605759161305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTAnMjQuNSJOIDk4wrAxOSczNy4zIkU!5e0!3m2!1sen!2sus!4v1635877546738!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
</div>
<?php
include './components/contact_form.php';
include './assets/footer.php';
?>