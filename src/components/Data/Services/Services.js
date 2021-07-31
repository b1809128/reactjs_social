import React from 'react'
import Content from "../../Content/Content"
import {serviceContentOne,serviceContentTwo} from './Data';
function Services() {
    return (
        <div>
            <Content {...serviceContentOne} />
            <Content {...serviceContentTwo}/>
        </div>
    )
}

export default Services;
