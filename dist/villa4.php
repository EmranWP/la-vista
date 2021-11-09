<?php
include './assets/header.php';
include './assets/nav.php';
include './components/image_lightbox.php'
?>
<div class="villa_type container">
    <div class="row villa_container">
        <div class="villa_image_sliders col-50">
            <div class="villa_image_slider slides row">
                <img class="slide" src="./img/img/villa-image-1.png" alt="">
                <img class="slide" src="./img/img/villa-image-2.jpg" alt="">
                <img class="slide" src="./img/img/villa-image-3.jpg" alt="">
            </div>

            <?php include './components/navigation.php'; ?>
        </div>
        <div class="villa_slider col-50">
            <div class="villa__type row">
                <h2 class="">VILLA TYPE 4</h2>
                <div class="sold">Sold Item</div>
            </div>
            <div class="details row">
                <div class="slider_bars col-60">
                    <div class="bars row">
                        <div class="bar col-3">Basic</div>
                        <div class="bar col-3 active">Furnish</div>
                        <div class="bar col-3">Full</div>
                    </div>
                    <div class="colorbar">
                        <div class="white"></div>
                        <div class="purple"></div>
                    </div>
                    <div class="price">
                        <span>$100 000/ 1.84 BTC</span>
                    </div>
                </div>
                <div class="einfo row col-40">
                    <div class="square col-2">
                        Square <br> 1000
                    </div>
                    <div class="rooms col-2">
                        Rooms <br> 4
                    </div>
                </div>
            </div>
            <div class="sold_text">
                <p>
                    This type of villa is already sold out. You can choose other options.
                </p>
            </div>
            <div class="other_type row">
                <div class="type">
                    TYPE1
                </div>
                <div class="type">
                    TYPE2
                </div>
                <div class="type">
                    TYPE3
                </div>
            </div>
        </div>
    </div>
</div>
<div class="villa_description container">
    <p>
        At interdum consectetur sociosqu ullamcorper natoque purus hac a ipsum dis eget a scelerisque platea vestibulum suspendisse erat elementum eleifend neque pharetra libero sagittis dui ultrices scelerisque ullamcorper adipiscing curabitur. At scelerisque a molestie cubilia sit inceptos nec a a torquent leo tellus quam magna quisque leo fusce massa. Vehicula ac ultrices eros adipiscing ullamcorper a odio cras torquent commodo condimentum consectetur massa condimentum habitasse ullamcorper diam ullamcorper lectus vestibulum parturient consectetur.
    </p>
</div>

<div class="room_structure container">
    <ul class="rooms nav-items row">
        <li class="room nav-item active">Room 1</li>
        <li class="room nav-item">Room 2</li>
        <li class="room nav-item">Room 3</li>
        <li class="room nav-item">Room 4</li>
        <li class="room nav-item">Bathroom</li>
        <li class="room nav-item">Dining Room</li>
    </ul>
    <div class="details ">
        <div class="details_container active row">
            <div class="description col-40">
                <h3>Description</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div class="architecture col-60">
                <img src="./img/architecture-Image.png" alt="">
            </div>
        </div>
        <div class="details_container row">
            <div class="description col-40">
                <h3>Description</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div class="architecture col-60">
                <img src="https://www.houseplanshelper.com/images/living_room_design_thumbnail.jpg" alt="">
            </div>
        </div>
        <div class="details_container row">
            <div class="description col-40">
                <h3>Description</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Square</th>
                            <td>30m<sup>2</sup></td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div class="architecture col-60">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmqZfB2aH17zfiyTR2Kc7mogNP7fGtFwRQdNwCmyHDLZtTd1wTsfvNLqb6bumd09wKJw&usqp=CAU" alt="">
            </div>
        </div>

    </div>
    <div class="button">
        <a class="btn primary" href="#">CTA</a>
    </div>
</div>
<?php
include './components/property_show.php';
include './components/image_slider.php';
include './components/contact_form.php';
include './assets/footer.php';
?>