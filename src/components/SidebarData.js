import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Image from '../images/akinsete oreoluwa beauty.jpg';
import Home from './contentArea/Home';
import About from './contentArea/About';
import Projects from './contentArea/projects';
import Contacts from './contentArea/contacts';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon fontSize={'large'} />,
        link: '#Home'
    },
    {
        title: "About",
        icon: <PersonIcon fontSize={'large'} />,
        link: "/About"
    },
    {
        title: "Photos/projects",
        icon: <CollectionsIcon fontSize={'large'} />,
        link: "/Photos"
    },
    {
        title: "Contacts",
        icon: <ContactMailIcon fontSize={'large'} />,
        link: "#Contacts"
    }

]


