import React, { Component } from "react";


import Card from './Card'

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home__section'>
                    <Card
                        src="https://i0.wp.com/www.maxmanroe.com/vid/wp-content/uploads/2018/09/Pengertian-Komputer.jpg?im_w=720"
                        title="Komputer & Aksesoris"
                        description="Beli Perlengkapan Elektronik Yang Murah dan Lengkap"
                    /><br></br>
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Fashion Pria & Wanita"
                        description="Beli Kebutuhan Fashion mu disini dengan harga terjangkau"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                        title="Perlengkapan Rumah"
                        description="Beli Perlengkapan Rumah Yang murah dan Lengkap"
                    />
                </div>



             

            </div>
        );
    }
}

export default Home;