import React from "react";
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import './ourChain.css';
import logo from "./images/logo.png"

const OurChain = () => {

    return (
        <div className="divContOurChain1">
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item className="spanCol">
                                    <Nav.Link eventKey="first" >
                                        <span >
                                            <span> <img src={logo} alt="logo" /> </span>
                                            <span className="textCol"> Մ․ Խորենացի 17 </span>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <span >
                                            <span> <img src={logo} alt="logo" /> </span>
                                            <span className="textCol"> Շինարարներ 15 </span>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <span >
                                            <span> <img src={logo} alt="logo" /> </span>
                                            <span className="textCol"> Հ․ Քոչար 2ա </span>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        <span >
                                            <span> <img src={logo} alt="logo" /> </span>
                                            <span className="textCol"> Սեբաստիա 82 </span>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        <span >
                                            <span> <img src={logo} alt="logo" /> </span>
                                            <span className="textCol"> Բաշինջաղյան </span>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">
                                        <span >
                                            <span> <img src={logo} alt="logo" /> </span>
                                            <span className="textCol"> Գ․ Պողոտա </span>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seventh">
                                        <span >
                                            <span> <img src={logo} alt="logo" /> </span>
                                            <span className="textCol"> Տ․ Պետրոսյան </span>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="m-4">
                                <Tab.Pane eventKey="first">
                                    <span className="divMap">
                                        <iframe title="1a" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.045530279599!2d44.514451115005755!3d40.16353997892371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc66f25df089%3A0x5f88b356df8bdc4d!2zNDcgTWFya3NpIHBveG9jLCBZZXJldmFuIDAwMTgsINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1651186456359!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} ></iframe>
                                    </span>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="divMap">
                                        <iframe title="2b" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6098.204368976047!2d44.534802799997884!3d40.162278538289435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd76fd5fb793%3A0x31aed144d7b40f37!2zItCm0LjRgNCw0L0iINCh0YPQv9C10YDQvNCw0YDQutC10YI!5e0!3m2!1sru!2s!4v1651184374341!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} ></iframe>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="divMap">
                                        <iframe title="3c" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6432613229417!2d44.471223715006744!3d40.19475187703436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd76fd5fb793%3A0x31aed144d7b40f37!2zItCm0LjRgNCw0L0iINCh0YPQv9C10YDQvNCw0YDQutC10YI!5e0!3m2!1sru!2s!4v1651185765288!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} ></iframe>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <div className="divMap">
                                        <iframe title="4d" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.705405286223!2d44.454050315006086!3d40.17111237846534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdc4f6400c4f%3A0x3f8d6903b67baf09!2zU2ViYXN0aWEgU3QsIFllcmV2YW4sINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1651185915184!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }}></iframe>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <div className="divMap">
                                        <iframe title="5e" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24376.02117100456!2d44.466184586193805!3d40.20900407870949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a976defeadf19%3A0xc1b6ee26b8a7b73f!2s%22TSIRAN%22%20SUPERMARKET%20CHAIN!5e0!3m2!1sru!2s!4v1651186088734!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} ></iframe>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <div className="divMap">
                                        <iframe title="6f" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.6736236070717!2d44.56412866487886!3d40.201338028015485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa33b242214c3%3A0x299d8081393fb54!2zOCBHYWkgQXZlLCBZZXJldmFuIDAwNTYsINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1651186202403!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} ></iframe>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                    <div className="divMap">
                                        <iframe title="7g" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.251796436486!2d44.49116653114953!3d40.22010395998328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97fef0412e9b%3A0x68d8df23f2a936cb!2zNDQgVGlncmFuIFBldHJvc3lhbiBTdCwgWWVyZXZhbiAwMDU0LCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2s!4v1651186310256!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} ></iframe>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}

export default OurChain;