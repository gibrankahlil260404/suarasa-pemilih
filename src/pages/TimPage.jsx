import { Container, Col, Row } from "react-bootstrap";

import { anggotaTim, tentangTim } from "../data/index";

const TimPage = () => {
    return (
        // section Tim header start
        <div className="timPage w-100 min-vh-100 d-flex align-items-center justify-content-center">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
                            Tentang <span>Suarasa Pemilih</span>
                        </h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s">
                            Selamat datang di Suarasa Pemilih, wadah partisipasi aktif Anda dalam proses demokrasi. Kami adalah platform yang didedikasikan untuk memberikan suara kepada setiap pemilih
                            dan menyediakan informasi yang transparan selama pemilu.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">Kenali Tim Kami</h1>
                    </Col>
                </Row>
                <Row className="text-center">
                    {anggotaTim.map((Tim) => {
                        return (
                            <Col key={Tim.id} data-aos="fade-up" data-aos-duration="500">
                                <div className="card-anggota-tim animate__animated animate__fadeInUp animate__delay-1s;">
                                    <img src={Tim.fotoTim} />
                                    <h3 data-aos="fade-up" data-aos-duration="500">
                                        {Tim.namaTim}
                                    </h3>
                                    <h4 data-aos="fade-up" data-aos-duration="500">
                                        {Tim.npmTim}
                                    </h4>
                                    <h4 data-aos="fade-up" data-aos-duration="500">
                                        {Tim.kalimatPemilu}
                                    </h4>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Row className="row-cols-lg-1 row-cols-1 g-4 pt-5">
                    {tentangTim.map((TentangKami) => {
                        return (
                            <Col key={TentangKami.id} data-aos="fade-up" data-aos-duration="500">
                                <div className="card-tentang-kami">
                                    <img src={TentangKami.iconTim} alt={TentangKami.judulTentangTim} width="50" /> <h2>{TentangKami.judulTentangTim}</h2>
                                    <h3 data-aos="fade-up" data-aos-duration="500">
                                        {TentangKami.isiTentangTim}
                                    </h3>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default TimPage;
