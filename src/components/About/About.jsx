import React from "react";
import { Container, Button, Col, Row } from 'react-bootstrap';
import './About.css';
import LeftBanner from '../../assets/img/4354122.jpg'


export function AboutPage(){
    return(
        <>
            <section className="header">
                <div >
                    <h1>About</h1>
                    </div>
            </section>

            <section>
                <Container className="mt-5">
                    <h2 className="text-center black pb-3"> About VidyaMitra Guide</h2>
                    <p className="black justify">
                        Welcome to VidyaMitra Guide, your trusted companion on your e-learning journey. At VidyaMitra, we're passionate about empowering learners of all ages and backgrounds to unlock their full potential through the transformative power of education.
                    </p>
                    <p className="black justify">
                    As an innovative e-learning platform, VidyaMitra Guide offers a diverse range of educational resources tailored to meet the needs of modern learners. Whether you're a student, educator, or lifelong learner, we provide the tools, support, and guidance you need to succeed in today's dynamic learning environment.<br />At VidyaMitra Guide, we believe that education should be accessible to all. That's why we've curated a vast repository of high-quality courses, tutorials, and learning materials across a wide array of subjects and disciplines. From academic subjects like mathematics, science, and history to practical skills such as programming, business, and design, there's something for everyone at VidyaMitra Guide.
                    </p>
                    <p className="black justify">  
                         Our platform is designed with the learner in mind, offering flexible learning options that fit your schedule and learning style. Whether you prefer self-paced learning, live interactive sessions, or collaborative group activities, you'll find the perfect learning experience to suit your needs.
                    </p>
                    
                </Container>
                <Container>
                    <Row className="align-items-center"> 
                        <Col md={6}>
                         <img src={LeftBanner} className="img-fluid"/>
                        </Col>
                        <Col md={6}>
                            <p className="black justify">
                                But VidyaMitra Guide is more than just a platform for acquiring knowledge. We're committed to fostering a vibrant learning community where learners can connect, collaborate, and inspire one another. Through our forums, discussion groups, and virtual events, you'll have the opportunity to engage with fellow learners, share insights, and build meaningful connections that enhance your learning journey.
                            </p>
                            <p className="black justify">
                                As you embark on your learning adventure with VidyaMitra Guide, rest assured that you're supported every step of the way. Our dedicated team of educators, mentors, and support staff are here to assist you with any questions, challenges, or concerns you may have. Whether you need academic guidance, technical assistance, or motivational support, we're here to help you succeed. 
                                <br/>Thank you for choosing VidyaMitra Guide as your partner in learning. Together, let's unlock the power of education and empower ourselves to reach new heights of knowledge, skill, and achievement. Welcome to the VidyaMitra Guide community, where learning knows no bounds.
                            </p>
                        </Col>
                    </Row>
                </Container>
               
            </section>
        </>
       
    )
}