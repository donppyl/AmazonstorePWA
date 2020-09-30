import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/CE_BAU/TH_TopPicks_Electronics_1500x600_En._CB430729903_.jpg"
                    alt=""

                />

                <div className="home_row">
                    <Product
                        id="2341234232"
                        title="ACER KG241QS - 23.6 inch (Full HD)1920 x 1080 Monitor Display - Black"
                        price={678.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81d5GU1Ed4L._AC_SX355_.jpg"
                        rating={5}
                    />

                    <Product
                        id="42342813623"
                        title="Logitech High Performance Gaming Mouse "
                        price={58.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._AC_SX425_.jpg"
                        rating={4}

                    />

                    <Product
                        id="34523453453245345"
                        title="Apple iPad 10.2(2019 - 7th Gen), Wi-Fi, 32GB, Space Gray [With Facetime]"
                        price={289.99}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31PSJe9ovoL._AA200_.jpg"
                        rating={4}

                    />


                </div>

                <div className="home_row">
                    <Product
                        id="2341234231846"
                        title="Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote, HD "
                        price={29.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/61WzGTJKl%2BL._AC_SX425_.jpg" rating={2}

                    />
                    <Product
                        id="2421342134"
                        title="Samsung Galaxy M11 Dual SIM 32GB 3GB RAM 4G LTE (UAE Version) - Black - 1 year local brand warranty"
                        price={125.99}
                        image="https://images-eu.ssl-images-amazon.com/images/I/419DJI8uBvL._AA200_.jpg"
                        rating={2}
                    />


                </div>


                <div className="home_row">
                    <Product
                        id="123462134"
                        title="TCL 55 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV-55R635"
                        price={499.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/91CXxVtVkAL._AC_SX355_.jpg"
                        rating={5}
                    />


                </div>



            </div>


        </div>


    );
}

export default Home
