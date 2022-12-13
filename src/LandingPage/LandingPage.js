import React from 'react'
import './navpay.css'
import Navbarrr from './Navbar'
import Section1 from './Section1'
import SectionDivider from './SectionDivider'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Footer from './Footer'
import NewsLetter from './NewsLetter'
import Multiple from './Multiple'
export default function LandingPage() {
    return (
        <div>
            <div className='section-1'>
                <Navbarrr />
                <Section1 />
            </div>
            <SectionDivider Header='Payments Made Easy With Kunaa Pay' Body='Everything designed to simplify payments so you can focus on building a successful business.' />
            <Section2 />
            <Section3 />
            {/* <SectionDivider Header='Bits Pay Accepts Multiple Payment Methods' Body='Grow your business, go global, and boost transaction success rates by giving your customers multiple choice of payment.' /> */}
            <Multiple Header='Kunaa Pay Accepts Multiple Payment Methods' Body='Grow your business, go global, and boost transaction success rates by giving your customers multiple choice of payment.' />
            <Section4 />
            <NewsLetter />
            <Footer />
        </div>
    )
}
