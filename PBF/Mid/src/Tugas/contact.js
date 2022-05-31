import React, { Component } from "react";


import Card from './Card'

import './Home.css';


class Contact extends Component {
    render() {
        return (
            
            <div className='home'>

                

                <h1>ArJ Team | Present</h1>

                <div className='home__section'>
                
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Rajendra Rakha"
                        description="1941720080 | 3H"
                    />
                    
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Ariono Septian"
                        description="1941720080 | 3H"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                        title="Meuri Zari "
                        description="1941720080 | 3H"
                    />
                </div>



             

            </div>
        );
    }
}

export default Contact;