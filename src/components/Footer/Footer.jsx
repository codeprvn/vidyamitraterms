import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import Font Awesome icons
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

// Add icons to the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faInstagram, faTwitter, faLinkedin);

export function Footer() {
    return (
        <section className='footerBg'>
            <Container>
                <Row className='pt-4'>
                    <Col md={6}>
                        <h4 className='white'> Follow us on</h4>
                        <div className="socialIcons">
                            <FontAwesomeIcon icon={['fab', 'facebook']} className="icon" />
                            <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
                            <FontAwesomeIcon icon={['fab', 'instagram']} className="icon" />
                            <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <h4 className='white'> Contact us</h4>
                        <div className="contactContainer">
                            <div className="contactItem">
                                <FontAwesomeIcon icon={faPhone} className="icon" />
                                <span>+1234567890</span>
                            </div>
                            <div className="contactItem">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <span>example@example.com</span>
                            </div>
                            <div className="contactItem">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                                <span>123 Main St, City, Country</span>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}
