import React from 'react'
import { Col, Row } from 'reactstrap'
import { primaryColor, whiteColor } from '../AppColors/Colors'
export default function Section1() {
    return (
        <div>
            <Row className='m-0'>
                <Col md={6}>
                    <div className='brandname-div'>
                        <div style={{ marginLeft: 40 }}>
                            <h1 className='brandname' style={{ color: whiteColor }}>Bits Pay</h1>
                            <p className='desc' style={{ color: whiteColor }}>Sell online, process payments, build financial products, or use business tools designed to grow your business.</p>
                            <button className='signup-btn shadow' style={{ backgroundColor: primaryColor, color: whiteColor }}>Get started now</button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className='sec2-l-col'>
                    <div className='brandname-div'>
                        <div>
                            {/* <img src={i} alt='' className='sec1-l-col-img' /> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
