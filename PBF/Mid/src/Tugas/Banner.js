import React, {useState} from 'react'
import './Banner.css'
import './style.css'
import {Button} from '@material-ui/core' ;

import { useHistory } from 'react-router-dom';



 function Banner() {

    const history =useHistory();
    
    return (
        <div className='banner'>
            
            <div className="banner__info">
            <img class="logo" src="logo.jpg" />
                
                <h1>
                    Start Shooping By Clicking Below 
                </h1>
                
                <Button onClick={()=>history.push('/categories')}
                variant='outlined'>Go Shooping</Button>
            </div>
        </div>
    )
}

export default Banner