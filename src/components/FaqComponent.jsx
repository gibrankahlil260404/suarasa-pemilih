import { Accordion, Container, Row, Col } from "react-bootstrap";

import { faq } from "../data/index";

const FaqComponent = () => {
    return (
        <div className="faqComponent">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
                            Pertanyaan yang Sering Diajukan <span>(F.A.Q)</span>
                        </h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s">
                            Selamat datang di F.A.Q! Temukan jawaban lengkap seputar proses pemilihan, informasi kandidat, dan hal terkait pemilu serta pastinya tentang Suarasa Pemilih. Dapatkan
                            pemahaman yang lebih baik tentang keterlibatan Anda dalam memilih pemimpin masa depan!
                        </p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
                    {faq.map((dataFaq) => {
                        return (
                            <Col key={dataFaq.id}>
                                <Accordion className="shadow-sm animate__animated animate__fadeInUp animate__delay-1s">
                                    <Accordion.Item eventKey={dataFaq.eventKey}>
                                        <Accordion.Header>{dataFaq.title}</Accordion.Header>
                                        <Accordion.Body>{dataFaq.desc}</Accordion.Body>
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

export default FaqComponent;
