import React from 'react'
import Content from "../../Content/Content"
import {services} from './Data';
function Services() {
    return (
        <div>
            <Content {...services} />
        </div>
    )
}

export default Services;
