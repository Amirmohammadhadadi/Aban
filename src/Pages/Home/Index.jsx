import React, { useEffect } from 'react'
import Nav from './Nav/Index'
import { CssBaseline, useMediaQuery } from '@mui/material'
import Baner from './Baner/Index'
import DrawerSection from './Services/Index'
import NavMobile from './Navmobile/Index'
import Services from './Services/Index'
import Serving from './Serving/Index'
import
Team from './Team/Index'
import Swiper1 from './Swiper/Index'
import Comments from '../Comments/Index'
import Time from './Time/Index'
import Footer from '../Comments/Footer/Index'
import Info from './Info/Index'




export default function Home() {
    const smallScreen = useMediaQuery('(max-width:960px)')

    return (
        <>
            <CssBaseline />
            {/* {smallScreen ? <NavMobile /> : <Nav />} */}
            <Baner />
            <Info />
            <Services />
            <Serving />
            <br />
            <Team />
            <Comments />
            <Time />
            <Footer />
        </>
    )
}
