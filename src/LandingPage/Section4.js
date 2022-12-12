import React from 'react'
import { Col, Row } from 'reactstrap'
import { primaryColor, whiteColor } from '../AppColors/Colors'
import next from '../images/next.jpg'

export default function Section4() {
    return (
        <div>
            <div className='section-4'>
                <Row className='m-0 '>
                    <Col md={6} className='section-4-row'>
                        <div className='section-content'>
                            <div>
                            <i class="fa-solid fa-credit-card fa-2x shadow p-3" style={{color:whiteColor, borderRadius:0}}></i>
                                <h1 className='section-4-head' style={{ color: whiteColor }}>Next-Gen Payments</h1>
                                <p className='section-4-p' style={{ color: whiteColor }}>Kunaa Pay solutions are suited for banks, financial institutions and fintechs.</p>
                                <button className='shadow section-4-btn' style={{ backgroundColor: whiteColor, color: primaryColor }}>Learn More...</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className=''>
                        <div className='section-content'>
                            <div>
                                <img src={next} alt='' className='next-img shadow' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
