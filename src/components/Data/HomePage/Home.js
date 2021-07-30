import React from 'react'
import Content from "../../Content/Content";
import {homeContentOne,homeContentTwo,homeContentThree} from './Data';
function Home() {
    return (        
            <div>
                <Content {...homeContentOne} /> 
                <Content {...homeContentTwo} /> 
                <Content {...homeContentThree} />                   
            </div>
    )
}

export default Home;
