import React from 'react'
import {render} from 'react-dom';

// this is a dummy component
function Hi() {

    return <p>Hi there this is cyrus kiprop</p>
}

render(
    <Hi/>,
    document.getElementById("app")
)