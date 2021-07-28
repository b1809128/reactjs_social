import React from 'react'
import "./Content.css"
function Content({description}) {
    return (
        <div className="container">
            <h1>{description}</h1>
        </div>
    )
}

export default Content;
