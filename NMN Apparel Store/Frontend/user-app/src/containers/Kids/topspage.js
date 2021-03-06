import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'
import banner from "./images/Kids.png";

/**
* @author
* @function KTops
**/

const KTops = (props) => {
    return (
        <Layout>
            <Col>
                <Row>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Banner"
                    />{''}
                </Row>
                <Row>
                    <Container>
                        <br></br>
                        <p class="text-center"><h1>TOPS</h1></p>
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <Col>
                            {/*Add Kids Top Product Card here*/}
                        </Col>
                        <Col>
                            {/*Add Kids Top Product Card here*/}
                        </Col>
                        <Col>
                            {/*Add Kids Top Product Card here*/}
                        </Col>
                    </Container>
                </Row>
                <br></br>
                <br></br>
            </Col>
            <Footer />
        </Layout>
    )

}

export default KTops