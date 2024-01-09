import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink, Link } from "react-router-dom";

import Logo from "/logo-transparant.png";

const NavbarComponent = () => {
    // untuk efek scroll
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

    return (
        <div>
            <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} width="120" className="d-inline-block align-top" alt="Logo Suarasa Pemilih" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            {navLinks.map((link) => {
                                return (
                                    <div className="nav-link" key={link.id}>
                                        <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                                            {link.text}
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </Nav>

                        <div className="text-center">
                            <button className="btn-full">
                                <Link to="https://forms.gle/Ssv6QXyjy9QmzTCN7" target="_blank" className="text-decoration-none text-white">
                                    Aspirasimu
                                </Link>
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
