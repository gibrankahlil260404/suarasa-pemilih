import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "/logo-transparant.png";

const FooterComponent = () => {
    return (
        <div className="footer pt-5 pb-3">
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} width="240" alt="Logo Suarasa Pemilih" />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between">
                    <Col lg="8">
                        <p className="deskripsi">Suarasa Pemilih adalah sebuah platform yang bersifat independen dan tidak memiliki afiliasi terhadap kandidat ataupun partai politik tertentu.</p>
                        <div className="kontak">
                            <Link className="text-decoration-none">
                                <i className="fa-brands fa-whatsapp fa-xl"></i>
                                <p className="m-1">+62 123-4567-8910</p>
                            </Link>
                        </div>
                        <div className="email">
                            <Link className="text-decoration-none">
                                <i className="fa-solid fa-envelope fa-lg"></i>
                                <p className="m-1">feedback@suarasapemilu.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column col-lg-4 col mt-lg-0 mt-5">
                        <h5>Menu</h5>
                        <Link to="kandidat">Kandidat</Link>
                        <Link to="partai">Partai</Link>
                        <Link to="isu">Isu</Link>
                        <Link to="faq">FAQ</Link>
                        <Link to="tim">Tim</Link>
                        <Link to="aspirasi">Aspirasi</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <p className="text-center px-md-0 px-3">
                            Copyright &copy; {new Date().getFullYear()} by <span>Suarasa Pemilih</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponent;
