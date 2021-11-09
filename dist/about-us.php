<?php
include './assets/header.php';
include './assets/nav.php';
?>
<?php
$heading = 'About Us';
$sub_heading = 'Extra description';
$background = 'about-hero.png';
include './components/hero.php';
?>


<?php
include "./components/amazing_text.php";
?>
<!-- // Our Team -->
<div class="team_container container">
    <div class="team_outer">
        <h2>OUR TEAM</h2>
        <div class="slider_outer">
            <div class="slider_container">
                <div class="teams slides">
                    <div class="team slide">
                        <div class="img">
                            <img src="./img/team2.png" alt="">
                        </div>
                        <div class="info">
                            <h4>John Dou, founder</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem. Nulla facilisi</p>
                        </div>
                    </div>
                    <div class="team slide">
                        <div class="img">
                            <img src="./img/team3.png" alt="">
                        </div>
                        <div class="info">
                            <h4>John Dou, Co-founder</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem. Nulla facilisi</p>
                        </div>
                    </div>
                    <div class="team slide">
                        <div class="img">
                            <img src="./img/team1.png" alt="">
                        </div>
                        <div class="info">
                            <h4>John Dou, Co-founder</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem. Nulla facilisi</p>
                        </div>
                    </div>
                </div>
            </div>
            <?php include './components/navigation.php'; ?>
        </div>


    </div>
</div>

<!--  Our Partners -->
<div class="partners container">
    <h2>Our Partners</h2>
    <div class="slider_outer">
        <div class="slider_container">
            <div class="slider slides row">
                <div class="image slide">
                    <img src="./img/partner1.png" alt="">
                </div>
                <div class="image slide">
                    <img src="./img/partner2.png" alt="">
                </div>
                <div class="image slide">
                    <img src="./img/partner3.png" alt="">
                </div>
                <div class="image slide">
                    <img src="./img/partner4.png" alt="">
                </div>
            </div>
        </div>
        <?php include './components/navigation.php'; ?>
    </div>


</div>
<!--  Testimonial -->
<div class="testimonial">
    <div class="container">
        <h2>TESTIMONIAL</h2>
        <div class="slider_outer col-70 col-md-90 col-sm">
            <div class="slider_container  ">
                <div class="sliders slides row">
                    <div class="slider slide">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem</p>
                    </div>
                    <div class="slider slide">
                        <p>eLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem</p>
                    </div>
                    <div class="slider slide">
                        <p>xLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem</p>
                    </div>
                </div>
                <div class="quote_container">
                    <div class="quote right">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                                <path d="M49.5499 11.4492C41.3786 11.4492 34.9266 18.0744 34.9266 26.2456C34.9266 34.4169 41.6377 41.042 49.8089 41.042C49.8907 41.042 50.014 41.031 50.0957 41.0296C46.8649 43.6023 42.807 45.1526 38.3653 45.1526C36.3218 45.1526 34.6772 46.8096 34.6772 48.8517C34.6772 50.8938 35.992 52.5508 38.0355 52.5508C52.5396 52.5494 63.9999 40.7497 63.9999 26.2456C63.9999 26.2429 63.9999 26.2401 63.9999 26.2359C63.9999 18.0688 57.7184 11.4492 49.5499 11.4492Z" fill="currentColor" />
                                <path d="M14.8934 11.4492C6.72211 11.4492 0.259076 18.0744 0.259076 26.2456C0.259076 34.4169 6.96456 41.042 15.1372 41.042C15.219 41.042 15.3395 41.031 15.4212 41.0296C12.1904 43.6023 8.1311 45.1526 3.6894 45.1526C1.64589 45.1526 0 46.8096 0 48.8517C0 50.8938 1.33556 52.5508 3.37907 52.5508C17.8831 52.5494 29.3642 40.7497 29.3642 26.2456C29.3642 26.2429 29.3642 26.2401 29.3642 26.2359C29.3642 18.0688 23.0619 11.4492 14.8934 11.4492Z" fill="currentColor" />
                            </g>
                        </svg>
                    </div>
                    <div class="quote left">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                                <path d="M49.5499 11.4492C41.3786 11.4492 34.9266 18.0744 34.9266 26.2456C34.9266 34.4169 41.6377 41.042 49.8089 41.042C49.8907 41.042 50.014 41.031 50.0957 41.0296C46.8649 43.6023 42.807 45.1526 38.3653 45.1526C36.3218 45.1526 34.6772 46.8096 34.6772 48.8517C34.6772 50.8938 35.992 52.5508 38.0355 52.5508C52.5396 52.5494 63.9999 40.7497 63.9999 26.2456C63.9999 26.2429 63.9999 26.2401 63.9999 26.2359C63.9999 18.0688 57.7184 11.4492 49.5499 11.4492Z" fill="currentColor" />
                                <path d="M14.8934 11.4492C6.72211 11.4492 0.259076 18.0744 0.259076 26.2456C0.259076 34.4169 6.96456 41.042 15.1372 41.042C15.219 41.042 15.3395 41.031 15.4212 41.0296C12.1904 43.6023 8.1311 45.1526 3.6894 45.1526C1.64589 45.1526 0 46.8096 0 48.8517C0 50.8938 1.33556 52.5508 3.37907 52.5508C17.8831 52.5494 29.3642 40.7497 29.3642 26.2456C29.3642 26.2429 29.3642 26.2401 29.3642 26.2359C29.3642 18.0688 23.0619 11.4492 14.8934 11.4492Z" fill="currentColor" />
                            </g>
                        </svg>
                    </div>
                </div>

            </div>
            <?php include './components/navigation.php' ?>
        </div>

    </div>
</div>
<?php
include './components/contact_form.php';
include './assets/footer.php';
?>