import React from 'react'
import { Col, Row } from 'reactstrap'
import { primaryColor, whiteColor } from '../AppColors/Colors'
import digital from '../images/digital.jpg'
export default function Section2() {
  return (
    <div>
      <div className='section-2'>
                <Row className='m-0'>
                    <Col md={6} className=''>
                        <div className='section-content'>
                            <div>
                                <h1 className='section-head'>Digital Payments</h1>
                                <p className='section-2-p'>As an ecommerce business owner, find everything needed to integrate your website or mobile app.</p>
                                <button className='shadow section-2-btn' style={{ backgroundColor: whiteColor, color: primaryColor }}>Learn More...</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className=''>
                        <div className='section-content'>
                            <div>
                                <img src={digital} alt='' className='digital-img shadow-lg' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
    </div>
  )
}
