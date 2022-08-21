import React from 'react'
import { Col, Row } from 'reactstrap'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
export default function Footer() {
    return (
        <div className='footer'>
            <Row className='m-0 p-4'>
                <Col md={3}><h3 style={{ fontWeight: 'bold' }}>Bits-Pay</h3>
                    <p>Sell online, process payments, build financial products, or use business tools designed to grow your business.</p>
                    {/* <p>Sell online, process payments, build financial products, or use business tools designed to grow your business.</p> */}
                </Col>
                <Col md={3}>
                    <h5 style={{ fontWeight: 'bold' }}>Products</h5>
                    <p>Payments</p>
                    <p>Transfers</p>
                    <p>Invoicing</p>
                    <p>Store</p>
                    <p>Checkout</p>
                    <p>Dashboard</p>
                    <p>Verification</p>
                </Col>
                <Col md={3}>
                    <h5 style={{ fontWeight: 'bold' }}>Developers</h5>
                    <p>Documentation</p>
                    <p>API Reference</p>
                    <p>API Status</p>
                    <p>Open Source</p>
                </Col>
                <Col md={3}>
                    <h5 style={{ fontWeight: 'bold' }}>Contact Us</h5>
                    <p>Office: Floor 1, African Alliance Building, No 1 Sani Abacha Way, Kano.</p>
                    <p>+234 123 456 789 </p>
                    <p>+234 123 456 789 </p>
                    <p>+234 123 456 789 </p>
                </Col>
            </Row>
            <Row className='m-0 pt-4 p-1 text-center footer-last-section'>
                <Col md={4}><p>Copyright © 2022 Bits Pay.
                    All rights reserved.</p></Col>
                <Col md={4}>
                    <img src={facebook} alt='' style={{width:25, margin:'0 10px'}}/>
                    <img src={twitter} alt='' style={{width:25, margin:'0 10px'}}/>
                    <img src={instagram} alt='' style={{width:25, margin:'0 10px'}}/>
                    <img src={linkedin} alt='' style={{width:25, margin:'0 10px'}}/>
                </Col>
                <Col md={4}>
                    <p>Privacy & Policy . Terms & Conditions</p>
                </Col>
            </Row>
        </div>
    )
}
