import { Row, Col } from "reactstrap"
import { primaryColor } from "../AppColors/Colors"
export default function Navbarrr() {
    return (

        <Row className='m-0'>
            <div className='nav-b'>
                <Row className='m-0'>
                    <Col md={3} className='brand-nav-col'><h5>Kunaa Pay</h5></Col>
                    <Col md={6} className='nav-col'>
                        <ul className='nav-ul'>
                            <div className="dropdown">
                                <li className='li-items dropdown'>Payments</li>
                                <div class="dropdown-content">
                                    <p>B2B Settlement</p>
                                    <p>Local Transfers</p>
                                    <p>Cross-border Payments</p>
                                    <p>USSD</p>
                                </div>
                            </div>
                            <li className='li-items'>Solutions</li>
                            <li className='li-items'>Company</li>
                            <li className='li-items'>Let's Talk</li>
                            <li className='li-items'>Support</li>
                        </ul>

                        {/* <div class="dropdown">
                            <span>Mouse over me</span>
                            <div class="dropdown-content">
                                <p>Hello World!</p>
                            </div>
                        </div> */}
                    </Col>
                    <Col md={3} className='profile-col'>
                        <button className='signin-btn shadow' style={{ backgroundColor: primaryColor }}>Sign in</button>
                    </Col>
                </Row>
            </div>
        </Row>
    )
}