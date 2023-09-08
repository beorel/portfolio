// to create an automatic function the command is - rfce
import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import LogoImage from '../images/logoimage';


function Sidebar() {
    return (
        <div>
            <div className="Sidebar">
                <LogoImage />
                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return (

                            <li className='row'
                                id={window.location.pathname == val.link ? "active" : ""}
                                key={key}
                                onClick={() => { window.location.pathname = val.link; }}>
                                <a href={val.link}>{val.title}</a>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>

            </div>
            
        </div>
    )
}

export default Sidebar;