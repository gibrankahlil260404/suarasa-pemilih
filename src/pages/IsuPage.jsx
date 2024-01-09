import { Accordion, Container, Row, Col } from "react-bootstrap";

import { isuPage } from "../data/index";

const IsuPage = () => {
    return (
        <div className="isuPage w-100 min-vh-100 d-flex justify-content-center">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
                            <span>Isu</span> Populer
                        </h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s">
                            Pelajari isu-isu yang sedang menjadi pusat perhatian publik. Dapatkan pemahaman mendalam terhadap kandidat mengenai topik-topik hangat yang mempengaruhi masyarakat dan
                            perkembangan kebijakan saat ini.
                        </p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-1 row-cols-1 g-4 pt-5">
                    {isuPage.map((dataIsuPage) => {
                        return (
                            <Col key={dataIsuPage.id} className="d-flex justify-content-center align-items-center">
                                <Accordion className="shadow-sm animate__animated animate__fadeInUp animate__delay-1s w-100">
                                    <Accordion.Item eventKey={dataIsuPage.eventKey} id={dataIsuPage.LinkId}>
                                        <Accordion.Header>
                                            <div className="card-isuPage-icon">
                                                <img src={dataIsuPage.icon} alt={dataIsuPage.judul} />
                                            </div>
                                            <h5>{dataIsuPage.judul}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="isuPage-deskripsi">{dataIsuPage.deskripsi}</p>
                                            <hr />
                                            <div className="isuPage-calon">
                                                <h5>{dataIsuPage.judulCalon1}</h5>
                                                <p>{dataIsuPage.tanggapanCalon1}</p>
                                                <h5>{dataIsuPage.judulCalon2}</h5>
                                                <p>{dataIsuPage.tanggapanCalon2}</p>
                                                <h5>{dataIsuPage.judulCalon3}</h5>
                                                <p>{dataIsuPage.tanggapanCalon3}</p>
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

export default IsuPage;
