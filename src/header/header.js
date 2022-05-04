import React from "react";
import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Lang from "../components/lang/lang";
import Curency from "../components/curency/curency";
import Deladress from "../pages/deladress/deladress";
import Counter from "../components/counter/counter";
import logodel from './images/delivery.png';
import logotsiran from './images/icontsiran.png';
import logologin from './images/login.png';
import logozambyux from './images/karzina.png';

const Header = ({ cardItems, value, ChangeAdress, newCountLength, itemFilter }) => {

    return (
        <div className="divContHeader" >
            <Navbar collapseOnSelect expand="md" style={{ display: "block" }} >
                <Container className="divcontainerheader">
                    <Navbar.Brand >
                        <img
                            src={logodel}
                            height='30'
                            width='40'
                            className='d-inline-block align-top'
                            alt='Logo'
                        />

                        <span className="spanText" >
                            <Link to="/DelAdr" className="links"> Առաքումը այս հասցեից: </Link>
                        </span>

                        <span className="spanTextAdr">
                            <Link to="/DelAdr" className="spanTextDeladress">
                                <Deladress
                                    value={value}
                                    ChangeAdress={ChangeAdress} />
                            </Link>
                        </span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="navbarCollapse">
                        <Nav className="mr-auto">
                            <Link to="/ourchain" className="links" >Մեր ցանցը</Link>
                            <Link to="/about" className="links" > Մեր մասին</Link>
                            <Link to="/brendmarket" className="links" > Բրենդմարկետ</Link>
                            <Link to="/tematikProd" className="links" > Թեմատիկ</Link>
                            <Link to="/delivery" className="links" >Առաքում</Link>
                        </Nav>

                        <Form style={{ display: 'flex' }} >
                            <Lang />
                            <Curency />
                        </Form>
                    </Navbar.Collapse>
                </Container>

                <Container className="divcontainerheader1">
                    <Navbar.Collapse id="responsive-navbar-nav1" className="navbarCollapse1" >
                        <a href="/" >
                            <img
                                src={logotsiran}
                                height='70'
                                width='150'
                                className='d-inline-block align-top img'
                                alt='logotsiran'
                            />
                        </a>
                        <Link to="/allProducts">
                            <Button className="btn-outline-secondary buttonHeader " >
                                Ապրանքներ
                            </Button>
                        </Link>

                        <FormControl
                            type="text"
                            placeholder="Որոնում"
                            className="search  mr-sm-2"
                            onKeyDown={itemFilter}
                        />

                        <span className="hamar">
                            +374 12 80 80 22
                        </span>

                        <div>
                            <Link to="/auth">
                                <span className="login">
                                    <img
                                        src={logologin}
                                        height='45'
                                        width='45'
                                        className='d-inline-block align-top img'
                                        alt='logologin' />
                                </span>
                            </Link>
                            <p> Մուտք </p>
                        </div>

                        <div>
                            <span className="zambyux">
                                <Link to="zambyux">
                                    <img
                                        src={logozambyux}
                                        height='45'
                                        width='45'
                                        className='d-inline-block align-top img'
                                        alt='logozambyux'
                                    />
                                </Link>
                                <Counter count={cardItems} newCountLength={newCountLength} />
                            </span>
                            <p> Զամբյուղ </p>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default Header;