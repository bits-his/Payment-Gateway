import React from 'react'
import { Col, Row } from 'reactstrap'
import { primaryColor } from '../AppColors/Colors'

export default function NewsLetter() {
    return (
        <div>
            <Row className='m-0 p-5 text-center news'>
                <Col>
                    <h1 className='stay'>Stay Connected</h1>
                    <p className='sub'>Subscribe To Our News Letter To Get More Updates on Kunaa Pay</p>
                    <input type='email' className='news-input' placeholder='user@email.com' />
                    <div>
                        <button className='mt-3 news-btn shadow' style={{ backgroundColor: primaryColor }}>Subscribe!</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
