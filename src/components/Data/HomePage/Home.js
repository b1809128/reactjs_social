import React from 'react'
import Content from "../../Content/Content";
import {home} from './Data';
function Home() {
    return (        
            <div>
                <Content {...home} />                
            </div>
    )
}

export default Home;
