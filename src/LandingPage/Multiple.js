import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { primaryColor } from '../AppColors/Colors'
import phone from '../images/phone.png'
import visa from '../images/visa.png'
import verve from '../images/verve.png'
import mvisa from '../images/mvisa.jpg'
import bank from '../images/bank.png'
import master from '../images/master.png'
export default function Multiple({ Header, Body }) {
    const multipleData = [
        {
            cardTitle: 'Master Card',
            cardImage: master
        },
        {
            cardTitle: 'Visa',
            cardImage: visa
        },
        {
            cardTitle: 'Verve',
            cardImage: verve
        },
        {
            cardTitle: 'Bank',
            cardImage:bank
        },
        {
            cardTitle: 'mVisa QR',
            cardImage:mvisa
        },
        {
            cardTitle: 'Phone Number',
            cardImage: phone
        },
    ]
    return (
        <div>
            <div className='pmd-section p-5'>
                <div className='mb-5'>
                    <h1 className='pmd text-center mt-5' style={{ color: primaryColor }}>{Header}</h1>
                    <p className='pmd-desc' style={{ color: primaryColor }}>{Body}</p>
                </div>
                <Row className='m-0 text-center'>
                    {multipleData.map((item, index) => (
                        <Col md={2}>
                            <Card className='shadow multiple-card p-4'>
                                <p>{item.cardTitle}</p>
                                <hr className='m-0'></hr>
                                <div className='text-center'>
                                    <img src={item.cardImage} alt='' style={{ width: 50, borderRadius: 5, margin: 5 }} />
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}
