import React, { useEffect } from 'react'
import Navbar from '../navbareHome/NavbarHome'
import MainSection from '../MainSection'
import MainTitle from '../MainTitle'
import Cards from '../Cards'
import OurBoard from '../OurBoard'
import Footer from '../Footer'
import { refreshToken } from '../services/api'

const HomePage = () => {

    const CallRefresh = async () => {
        const res = await refreshToken()
        console.log(res);
    }
    useEffect(() => {
        setInterval(CallRefresh, 840000)
    }, [])

    return (
        <>
            <Navbar />
            <MainSection />
            <MainTitle />
            <Cards />
            <OurBoard />
            <Footer />
        </>
    )
}

export default HomePage
