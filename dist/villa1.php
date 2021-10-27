<?php
include './assets/header.php';
include './assets/nav.php';
?>
<div class="villa_type container">
    <div class="row villa_container">
        <div class="villa_image_sliders col-50">
            <div class="villa_slider_container">
                <div class="villa_image_slider row">
                    <img src="./img/property/villa-image-1.png" alt="">
                    <img src="./img/property/villa-image-1.png" alt="">
                    <img src="./img/property/villa-image-1.png" alt="">
                </div>
            </div>

            <?php include './components/navigation.php'; ?>
        </div>
        <div class="villa_slider col-50">
            <h2>VILLA TYPE 1</h2>
            <div class="details row">
                <div class="slider_bars col-60">
                    <div class="bars row">
                        <div class="bar col-3">Basic</div>
                        <div class="bar col-3 active">Furnish</div>
                        <div class="bar col-3">Full</div>
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
            <div class="text">
                <p>Decription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nulla et sollicitudin posuere. Maecenas libero odio, iaculis sit amet ipsum non, rutrum porttitor sem. Nulla facilisi. Integer lacinia mattis</p>
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
    <ul class="rooms row">
        <li class="room active">Room 1</li>
        <li class="room">Room 2</li>
        <li class="room">Room 3</li>
        <li class="room">Room 4</li>
        <li class="room">Bathroom</li>
        <li class="room">Dining Room</li>
    </ul>
    <div class="details row">
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