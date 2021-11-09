<?php
include "../dist/assets/header.php";
include "../dist/assets/nav.php";
include "../dist/components/video_modal.php";
?>
<div class="hero_container">
    <img class="la_vista" src="../dist/img/logo-white.svg" alt="">
    <img class="play" src="../dist/img/play.png" alt="" data-link="https://www.youtube.com/embed/qw1CVt43VKw">
</div>
<?php include "./components/cards.php" ?>

<?php include "./components/amazing_text.php" ?>
<?php include "./components/property_show.php" ?>
<?php include "./components/contact_form.php" ?>
<?php include "./components/progress.php" ?>
<?php include "./components/image_slider.php" ?>

<div class="eco_concept">
    <div class="container row">
        <div class="col-2 col-md-70 col-sm">
            <h2>ECO CONCEPT</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem.
            </p>
            <div class="icons">
                <img src="./img/icons/growth.png" alt="">
                <img src="./img/icons/recycle.png" alt="">
                <img src="./img/icons/home.png" alt="">
            </div>
        </div>
    </div>
</div>



<?php include "../dist/assets/footer.php" ?>