import React from 'react'
import Content from "../../Content/Content";
import {productContentOne,productContentTwo,productContentThree} from "./Data"

function Products() {
    return (
        <div>
            <Content {...productContentOne} />
            <Content {...productContentTwo} />
            <Content {...productContentThree} />

        </div>
    )
}

export default Products
