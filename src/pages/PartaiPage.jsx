import { Accordion, Container, Row, Col } from "react-bootstrap";

import { daftarPartai } from "../data/index";

const PartaiPage = () => {
    return (
        <div className="partaiPage w-100 min-vh-100 d-flex justify-content-center">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
                            Ketahui <span>Riwayat Kinerja</span> Partai
                        </h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s">
                            Temukan dengan tepat informasi terkait kinerja dan sejarah partai politik dari masa ke masa. Dapatkan wawasan mendalam mengenai perjalanan, pencapaian, dan kontribusi
                            partai dalam panggung politik.
                        </p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-1 row-cols-1 g-4 pt-5">
                    {daftarPartai.map((dataPartai) => {
                        return (
                            <Col key={dataPartai.id} className="d-flex justify-content-center align-items-center">
                                <Accordion className="shadow-sm animate__animated animate__fadeInUp animate__delay-1s w-100">
                                    <Accordion.Item eventKey={dataPartai.eventKey}>
                                        <Accordion.Header>
                                            <div className="card-logo-partai">
                                                <img src={dataPartai.image} alt={dataPartai.namaPartai} />
                                            </div>
                                            <h5>{dataPartai.namaPartai}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="deskripsi">{dataPartai.deskripsiPartai}</p>
                                            <hr />
                                            <div className="tokoh ps-3 pt-2">
                                                <h4>{dataPartai.sectionTokoh}</h4>
                                                <h5>{dataPartai.tokohPartai1}</h5>
                                                <p>{dataPartai.ketTokohPartai1}</p>
                                                <h5>{dataPartai.tokohPartai2}</h5>
                                                <p>{dataPartai.ketTokohPartai2}</p>
                                            </div>
                                            <hr />
                                            <div className="rekam-jejak ps-3 pt-2">
                                                <h4>{dataPartai.sectionRekamJejak}</h4>
                                                <p>{dataPartai.rekamJejak}</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default PartaiPage;
