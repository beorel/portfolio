// link- https://www.w3schools.com/tags/att_a_href.asp
import React from 'react'
import About from './About'
import Contacts from './contacts'
import Projects from './projects'
import Home from './Home'

function ContentArea() {
    return (
        <div className='homeContent'>
            <h3>Content Area</h3>
            <Home/>
            <About/>
            <Projects/>
            <Contacts/>
        </div>
    )
}

export default ContentArea;