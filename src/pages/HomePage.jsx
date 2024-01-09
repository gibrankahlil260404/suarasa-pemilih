import { Container, Col, Row } from "react-bootstrap";
import HeroImage from "../assets/img/hero-kotak-suara.png";

import { kandidatTerbaru, dataSwiperPartai, isu, event } from "../data/index";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

// import data partai
import PartaiNo1Pkb from "../assets/img/partai/partai-1-pkb.png";
import PartaiNo2Gerindra from "../assets/img/partai/partai-2-gerindra.png";
import PartaiNo3Pdip from "../assets/img/partai/partai-3-pdip.png";
import PartaiNo4Golkar from "../assets/img/partai/partai-4-golkar.png";
import PartaiNo5Nasdem from "../assets/img/partai/partai-5-nasdem.png";
import PartaiNo7Gelora from "../assets/img/partai/partai-7-gelora.png";
import PartaiNo8Pks from "../assets/img/partai/partai-8-pks.png";
import PartaiNo10Hanura from "../assets/img/partai/partai-10-hanura.png";
import PartaiNo11Garuda from "../assets/img/partai/partai-11-garuda.png";
import PartaiNo12Pan from "../assets/img/partai/partai-12-pan.png";
import PartaiNo13Pbb from "../assets/img/partai/partai-13-pbb.png";
import PartaiNo14Demokrat from "../assets/img/partai/partai-14-demokrat.png";
import PartaiNo15Psi from "../assets/img/partai/partai-15-psi.png";
import PartaiNo16Perindo from "../assets/img/partai/partai-16-perindo.png";
import PartaiNo17Ppp from "../assets/img/partai/partai-17-ppp.png";
import PartaiNo24Ummat from "../assets/img/partai/partai-24-ummat.png";

// import data keluarkan-aspirasi
import KeluarkanAspirasi from "../assets/img/hero-bingung.png";

import { Link } from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();

    return (
        // section homepage header start
        <div className="homepage">
            <header className="w-100 min-vh-100 d-flex justify-content-center overflow-hidden">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col lg="6">
                            <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                                <span>Suara & Pandangan</span> Anda Mengukir Masa Depan!
                            </h1>
                            <p className="animate__animated animate__fadeInUp animate__delay-1s">
                                Temukan informasi terkini tentang isu-isu politik dan kandidat presiden untuk membuat pilihan cerdas di Pemilu 2024!
                            </p>
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={HeroImage} alt="Ilustrasi Kotak Suara" className="animate__animated animate__fadeInUp w-100" />
                        </Col>
                    </Row>
                </Container>
            </header>
            {/* section homepage header end */}

            {/* section homepage kandidat start */}
            <div className="kandidat py-5 overflow-hidden">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center mt-5" data-aos="fade-up" data-aos-duration="500">
                                Kandidat <span>Presiden & Wakil Presiden</span>
                            </h1>
                            <p className="text-center mb-5" data-aos="fade-up" data-aos-duration="500">
                                Telusuri lebih baik terhadap latar belakang serta pencapaian para kandidat. Analisis rekam jejak para calon dan ide-ide yang mereka usung agar Anda dapat membuat
                                keputusan pemilihan yang terinformasi dan sesuai dengan nilai-nilai yang Anda anut.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {kandidatTerbaru.map((kandidat) => {
                            return (
                                <Col key={kandidat.id} data-aos="fade-up" data-aos-duration="500">
                                    <div className="card-kandidat">
                                        <p data-aos="fade-up" data-aos-duration="500">
                                            {kandidat.noUrut}
                                        </p>
                                        <h3 data-aos="fade-up" data-aos-duration="500">
                                            {kandidat.judul}
                                        </h3>
                                        <Row>
                                            <Col className="card-kandidat-1" data-aos="fade-up" data-aos-duration="500">
                                                <img src={kandidat.imageKandidat1} alt={kandidat.namaKandidat1} className="w-100 rounded-3" />
                                                <h4>{kandidat.namaKandidat1}</h4>
                                                <p>{kandidat.posisiKandidat1}</p>
                                                <div className="card-kandidat-1-partai d-flex justify-content-between align-items-center text-center">
                                                    <img src={kandidat.imagePartai1} alt={kandidat.namaPartai1} width="30" />
                                                    <p className="">{kandidat.namaPartai1}</p>
                                                </div>
                                            </Col>
                                            <Col className="card-kandidat-2" data-aos="fade-up" data-aos-duration="500">
                                                <img src={kandidat.imageKandidat2} alt={kandidat.namaKandidat2} className="w-100" />
                                                <h4>{kandidat.namaKandidat2}</h4>
                                                <p>{kandidat.posisiKandidat2}</p>
                                                <div className="card-kandidat-2-partai d-flex justify-content-between align-items-center text-center">
                                                    <img src={kandidat.imagePartai2} alt={kandidat.namaPartai2} width="30" />
                                                    <p>{kandidat.namaPartai2}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row>
                        <Col className="text-center mt-5 mb-5">
                            <button className="btn-full btn-kandidat" onClick={() => navigate("/kandidat")} data-aos="fade-up" data-aos-duration="500">
                                Lihat Profil Kandidat <i className="fa-solid fa-chevron-right ms-2"></i>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section homepage kandidat end */}

            {/* section homepage partai start */}
            <div className="partai py-5 overflow-hidden">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center mt-5" data-aos="fade-up" data-aos-duration="500">
                                Ketahui <span>Riwayat Kinerja</span> Partai
                            </h1>
                            <p className="text-center mb-5" data-aos="fade-up" data-aos-duration="500">
                                Amati perjalanan partai politik dan telusuri jejak kinerjanya. Dapatkan wawasan mendalam tentang sejarah dan konsistensi partai untuk untuk mendapatkan informasi yang
                                lebih lengkap.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Swiper
                            freeMode={true}
                            loop={true}
                            allowTouchMove={false}
                            speed={2000}
                            slidesPerView={5}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                            data-aos="fade"
                            data-aos-duration="500"
                        >
                            <SwiperSlide>
                                <img src={PartaiNo1Pkb} alt="Partai Kebangkitan Bangsa (PKB)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo2Gerindra} alt="Partai Gerakan Indonesia Raya (Gerindra)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo3Pdip} alt="Partai Demokrasi Indonesia Perjuangan (PDI-P)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo4Golkar} alt="Partai Golongan Karya (Golkar)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo5Nasdem} alt="Partai Nasional Demokrat (NasDem)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo7Gelora} alt="Partai Gelombang Rakyat Indonesia (Gelora)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo8Pks} alt="Partai Keadilan Sejahtera (PKS)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo10Hanura} alt="Partai Hati Nurani Rakyat (Hanura)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo11Garuda} alt="Partai Garda Perubahan Indonesia (Garuda)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo12Pan} alt="Partai Amanat Nasional (PAN)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo13Pbb} alt="Partai Bulan Bintang (PBB)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo14Demokrat} alt="Partai Demokrat" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo15Psi} alt="Partai Solidaritas Indonesia (PSI)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo16Perindo} alt="Partai Perindo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo17Ppp} alt="Partai Persatuan Pembangunan (PPP)" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PartaiNo24Ummat} alt="Partai Ummat (PU)" />
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                    <Row>
                        <Col className="text-center mt-5 mb-5">
                            <button className="btn-full btn-partai" onClick={() => navigate("/partai")} data-aos="fade-up" data-aos-duration="500">
                                Lihat Profil Partai <i className="fa-solid fa-chevron-right ms-2"></i>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section homepage partai end */}

            {/* section homepage isu start */}
            <div className="isu py-5 overflow-hidden">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center mt-5" data-aos="fade-up" data-aos-duration="500">
                                Kenali Posisi Kandidat terhadap <span>Isu</span>
                            </h1>
                            <p className="text-center mb-5" data-aos="fade-up" data-aos-duration="500">
                                Salah satu cara berpolitik berdampak pada kehidupan kita adalah melalui suara suara dari diri kita sendiri melalui pemilihan presiden. Untuk memilih dengan cerdas,
                                pelajari isu-isu penting berikut:
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {isu.map((dataIsu) => {
                            return (
                                <Col key={dataIsu.id} data-aos="fade-up" data-aos-duration="1000">
                                    <div className="card-isu text-center">
                                        <img src={dataIsu.icon} alt={dataIsu.judul} />
                                        <h4>{dataIsu.judul}</h4>
                                        <p>{dataIsu.deskripsi}</p>
                                    </div>
                                    <p className="p-btn-isu-detail text-center" onClick={() => navigate("/isu")}>
                                        Baca detail <i className="fa-solid fa-chevron-right ms-2"></i>
                                    </p>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row>
                        <Col className="text-center mt-5 mb-5">
                            <p className="p-btn-isu" onClick={() => navigate("/isu")} data-aos="fade-up" data-aos-duration="500">
                                Lihat topik lainnya <i className="fa-solid fa-chevron-right ms-2"></i>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section homepage isu end */}

            {/* section homepage keluarkan-aspirasi start */}
            <div className="keluarkan-aspirasi py-5 overflow-hidden">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col data-aos="fade-up" data-aos-duration="500">
                            <div className="card-keluarkan-aspirasi">
                                <Row>
                                    <Col lg="6">
                                        <h4>Masih bingung untuk menentukan pilihanmu?</h4>
                                        <button className="btn-full btn-keluarkan-aspirasi">
                                            <Link to="https://forms.gle/Ssv6QXyjy9QmzTCN7" target="_blank" className="text-decoration-none text-white">
                                                Keluarkan Aspirasimu
                                            </Link>
                                        </button>
                                    </Col>
                                    <Col lg="6">
                                        <img src={KeluarkanAspirasi} alt="Ilustrasi Keluarkan Aspirasimu" className="w-100" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section homepage keluarkan-aspirasi end */}

            {/* section homepage event start */}
            <div className="event py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center mx-5" data-aos="fade-up" data-aos-duration="500">
                                Jadi bagian dari <span>Tim</span> Suarasa Pemilih
                            </h1>
                            <p className="text-center mb-5" data-aos="fade-up" data-aos-duration="500">
                                Bergabunglah dengan tim kami dan ikut berkontribusi aktif untuk memastikan suara dan rasa menjadi satu untuk memilih.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {event.map((dataEvent) => {
                            return (
                                <Col key={dataEvent.id} data-aos="fade-up" data-aos-duration="500">
                                    <div className="card-event text-center">
                                        <img src={dataEvent.image} alt={dataEvent.judul} className="w-75" />
                                        <h4 className="text-start">{dataEvent.judul}</h4>
                                        <p className="text-start">{dataEvent.deskripsi}</p>
                                    </div>
                                    <p className="p-btn-event text-start mt-4">Coming Soon</p>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            {/* section homepage event end */}
        </div>
    );
};

export default HomePage;
