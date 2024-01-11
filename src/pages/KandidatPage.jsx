import { Accordion, Container, Row, Col } from "react-bootstrap";
import { biodata } from "../data/index";

import Table from "react-bootstrap/Table";

const KandidatPage = () => {
    return (
        <div className="kandidatPage w-100 min-vh-100 d-flex justify-content-center">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
                            Ketahui <span>Catatan Prestasi dan gagasan</span> kandidat
                        </h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s">
                            Mengungkap Jejak Langkah: Sejarah, Pencapaian, dan Kontribusi kandidat dalam Dinamika Panggung Politik Nasional
                        </p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-1 row-cols-1 g-4 pt-5">
                    {biodata.map((dataKandidat) => {
                        return (
                            <Col key={dataKandidat.id} className="d-flex justify-content-center align-items-center">
                                <Accordion className="shadow-sm animate__animated animate__fadeInUp animate__delay-1s w-100">
                                    <Accordion.Item eventKey={dataKandidat.eventKey}>
                                        <Accordion.Header>
                                            <div className="card-logo-partai">
                                                <img src={dataKandidat.imageKandidat} alt={dataKandidat.judul} />
                                            </div>
                                            <h5>{dataKandidat.judul}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="deskripsi">{dataKandidat.biografi}</p>
                                            <hr />
                                            <div className="pencapaian ps-3 pt-2">
                                                <h4>Pencapaian</h4>
                                                <h5>{dataKandidat.judulPencapaian1}</h5>
                                                <p>{dataKandidat.isiPencapaian1}</p>
                                                <h5>{dataKandidat.judulPencapaian2}</h5>
                                                <p>{dataKandidat.isiPencapaian2}</p>
                                                <h5>{dataKandidat.judulPencapaian3}</h5>
                                                <p>{dataKandidat.isiPencapaian3}</p>
                                            </div>
                                            <hr />
                                            <div className="kontroversi ps-3 pt-2">
                                                <h4>Kontroversi</h4>
                                                <h5>{dataKandidat.judulKontroversi1}</h5>
                                                <p>{dataKandidat.isiKontroversi1}</p>
                                                <h5>{dataKandidat.judulKontroversi2}</h5>
                                                <p>{dataKandidat.isiKontroversi2}</p>
                                                <h5>{dataKandidat.judulKontroversi3}</h5>
                                                <p>{dataKandidat.isiKontroversi3}</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col>
                        <h1 className="animate__animated animate__fadeInUp animate__delay-1s text-center">Jadwal Debat</h1>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Tema Debat</th>
                                    <th>12 Desember 2023</th>
                                    <th>22 Desember 2023</th>
                                    <th>7 Januari 2024</th>
                                    <th>21 Januari 2024</th>
                                    <th>4 Februari 2024</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tema 1</td>
                                    <td>Hukum </td>
                                    <td>Pertahanan</td>
                                    <td>Ekonomi</td>
                                    <td>Energi</td>
                                    <td>Teknologi informasi</td>
                                </tr>
                                <tr>
                                    <td>Tema 2</td>
                                    <td>HAM</td>
                                    <td>Keamanan</td>
                                    <td>Kesejahteraan sosial</td>
                                    <td>Sumber daya alam</td>
                                    <td>Peningkatan pelayanan publik</td>
                                </tr>
                                <tr>
                                    <td>Tema 3</td>
                                    <td>Pemerintahan</td>
                                    <td>Geopolitik</td>
                                    <td>Investasi</td>
                                    <td>Pajak karbon</td>
                                    <td>Hoaks</td>
                                </tr>
                                <tr>
                                    <td>Tema 4</td>
                                    <td>Pemberantasan korupsi</td>
                                    <td>Hubungan internasional</td>
                                    <td>Perdagangan</td>
                                    <td>Pangan</td>
                                    <td>Intoleransi</td>
                                </tr>
                                <tr>
                                    <td>Tema 5</td>
                                    <td>Penguatan demokrasi</td>
                                    <td> - </td>
                                    <td>Pajak</td>
                                    <td>Lingkungan hidup</td>
                                    <td>Pendidikan</td>
                                </tr>
                                <tr>
                                    <td>Tema 6</td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td>Infrastruktur</td>
                                    <td>Agraria serta masyarakat adat</td>
                                    <td>Kesehatan </td>
                                </tr>
                                <tr>
                                    <td>Tema 7</td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td>Keuangan</td>
                                    <td> - </td>
                                    <td>Ketenagakerjaan</td>
                                </tr>
                                <tr>
                                    <td>Tema 8</td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td>Pengelolaan APBN</td>
                                    <td> - </td>
                                    <td> - </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default KandidatPage;
