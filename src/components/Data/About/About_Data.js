import React from 'react'
import {aboutContent} from './Data';
import About from "../../About/About"
function About_Data() {
    return (
        <div>
            <About {...aboutContent}/>
        </div>
    )
}

export default About_Data
