import { Row, Col } from "reactstrap"
import { primaryColor } from "../AppColors/Colors"
export default function Navbarrr() {
    return (

        <Row className='m-0'>
            <div className='nav-b'>
                <Row className='m-0'>
                    <Col md={3} className='brand-nav-col'><h5>Bits-Pay</h5></Col>
                    <Col md={6} className='nav-col'>
                        <ul className='nav-ul'>
                            <li className='li-items'>Payments</li>
                            <li className='li-items'>Solutions</li>
                            <li className='li-items'>Company</li>
                            <li className='li-items'>Let's Talk</li>
                            <li className='li-items'>Support</li>
                        </ul>
                    </Col>
                    <Col md={3} className='profile-col'>
                        <button className='signin-btn shadow' style={{ backgroundColor: primaryColor }}>Sign in</button>
                    </Col>
                </Row>
            </div>
        </Row>
    )
}