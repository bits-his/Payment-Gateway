import React from 'react'
import { Col, Row } from 'reactstrap'
import { primaryColor } from '../AppColors/Colors'
import social from '../images/social.jpg'
// import i from '../images/dot.jpg'

export default function Section3() {
    return (
        <div>
            <div className='section-3'>
                {/* <div style={{}}>
                    <img src={i} style={{ width: 500, zIndex: -1, opacity: 0.1, position: 'absolute', left: 300 }} />
                </div> */}

                <Row className='m-0'>
                    <Col md={6} className=''>
                        <div className='section-content'>
                            <div>
                                <img src={social} alt='' className='social-img shadow' />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className=''>
                        <div className='section-content'>
                            <div>
                                <i className="fa-solid fa-icons fa-2x shadow p-3" style={{ color: primaryColor, borderRadius: 0 }}></i>
                                <h1 className='section-3-head' style={{ color: primaryColor }}>Social Commerce</h1>
                                <p className='section-3-p' style={{ color: primaryColor }}>Freelancer ? Turn your passion to profit and get paid in seconds with Bits Pay social media links.</p>
                                <button className='shadow section-3-btn' style={{ backgroundColor: primaryColor }}>Learn More...</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
