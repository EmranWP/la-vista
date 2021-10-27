<?php
include './assets/header.php';
include './assets/nav.php';
?>
<?php
$heading = 'Pay in bitcoin ';
$sub_heading = 'or any other cryptocurrency';
$background = 'bitcoin-hero.png';
include './components/hero.php';
?>
<div class="payment_step">
    <div class="container">
        <div class="background one">
            <div class="border">
                <h2>Step 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        <div class="background two">
            <div class="border">
                <h2>Step 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        <div class="background three">
            <div class="border">
                <h2>Step 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        <div class="background four">
            <div class="border">
                <h2>Step 4</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    </div>
</div>
<div class="text_container">
    <div class="container">
        <div class="col-80 col-md col-sm">
            <h2>Some text about it</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem.</p>
            <div class="video row">
                <div class="play">
                    <img src="./img/play1.png" alt="">
                </div>
                <div class="text">
                    <p>To more info - watch the video</p>
                </div>
            </div>
        </div>

    </div>
</div>
<div class="contact_form_container">
    <div class="container row">
        <div class="contact_info col-2 col-sm">
            <p class="eText">Lorem libero odio, iaculis sit amet ipsum non, rutrum porttitor sem. </p>
        </div>
        <div class="contact_form col-2 col-sm">
            <div class="form_container">
                <input type="text" name="" id="" placeholder="Your Name">
                <input type="text" name="" id="" placeholder="Your Phone">
                <div class="btn_group row">
                    <div class="col-40 col-md col-sm button">
                        <input type="submit" value="Call Me" class="btn secondary">
                    </div>
                    <div class="consent_group row col-60 col-md col-sm">
                        <div class="custom_checkbox col-10">
                            <input type="checkbox" name="consent" id="">
                            <span class="checkmark"></span>
                        </div>
                        <label for="consent" class="col-90">
                            I agree with processing of my personal data due to <a href="#">Privacy Policy</a>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
include './assets/footer.php';
?>