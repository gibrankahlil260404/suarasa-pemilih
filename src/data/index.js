// TODO| Homepage start //
// import data kandidat
import KandidatAnis from "../assets/img/kandidat/kandidat-anis.png";
import KandidatMuhaimin from "../assets/img/kandidat/kandidat-muhaimin.png";
import KandidatPrabowo from "../assets/img/kandidat/kandidat-prabowo.png";
import KandidatGibran from "../assets/img/kandidat/kandidat-gibran.png";
import KandidatGanjar from "../assets/img/kandidat/kandidat-ganjar.png";
import KandidatMahfud from "../assets/img/kandidat/kandidat-mahfud.png";

// import data partai
import IconInfo from "../assets/img/icon/icon-info-gray2.png";
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
import PartaiSemuaPartai from "../assets/img/partai/partai-semuapartai.png";

// import data isu
import IsuHam from "../assets/img/icon/icon-ham.png";
import IsuHln from "../assets/img/icon/icon-hln.png";
import IsuSda from "../assets/img/icon/icon-sda.png";
import IsuLp from "../assets/img/icon/icon-lap-kerja.png";

// import data event
import EventVolunteer from "../assets/img/hero-volunteer.png";
import EventPartnership from "../assets/img/hero-partnership.png";

// TODO| Homepage end //

// TODO| TimPage Start//
import TimArsya from "../assets/img/tim/foto-arsya.png";
import TimGibran from "../assets/img/tim/foto-gibran.png";
import TimHotra from "../assets/img/tim/foto-hotra.png";

import IconInfo2 from "../assets/img/icon/icon-info-sec-bg-sec-lt.png";
// TODO| TimPage End//

// data navbar link
export const navLinks = [
    {
        id: 1,
        path: "kandidat",
        text: "Kandidat",
    },
    {
        id: 2,
        path: "partai",
        text: "Partai",
    },
    {
        id: 3,
        path: "isu",
        text: "Isu",
    },
    {
        id: 4,
        path: "faq",
        text: "FAQ",
    },
    {
        id: 5,
        path: "tim",
        text: "Tim",
    },
];

// data kandidat
export const kandidatTerbaru = [
    {
        id: 1,
        noUrut: "NO. 1",
        judul: "Anies & Muhaimin",
        Deskripsi: "Indonesia Makmur",
        imageKandidat1: KandidatAnis,
        namaKandidat1: "Anies Rasyid Baswedan",
        posisiKandidat1: "Calon Presiden",
        imagePartai1: IconInfo,
        namaPartai1: "Non-partai",

        imageKandidat2: KandidatMuhaimin,
        namaKandidat2: "Muhaimin Iskandar",
        posisiKandidat2: "Calon Wakil Presiden",
        imagePartai2: PartaiNo1Pkb,
        namaPartai2: "PKB",
        delay: "0",
    },
    {
        id: 2,
        noUrut: "NO. 2",
        judul: "Prabowo & Gibran",
        Deskripsi: "Bersama Indonesia Maju Menuju Indonesia Emas 2045",
        imageKandidat1: KandidatPrabowo,
        namaKandidat1: "Prabowo Subianto",
        posisiKandidat1: "Calon Presiden",
        imagePartai1: PartaiNo2Gerindra,
        namaPartai1: "Gerindra",

        imageKandidat2: KandidatGibran,
        namaKandidat2: "Gibran Rakabuming Raka",
        posisiKandidat2: "Calon Wakil Presiden",
        imagePartai2: IconInfo,
        namaPartai2: "Tentatif",
        delay: "500",
    },
    {
        id: 3,
        noUrut: "NO. 3",
        judul: "Ganjar & Mahfud",
        Deskripsi: "Gerak Cepat Menuju Indonesia Unggul",
        imageKandidat1: KandidatGanjar,
        namaKandidat1: "Ganjar Pranowo",
        posisiKandidat1: "Calon Presiden",
        imagePartai1: PartaiNo3Pdip,
        namaPartai1: "PDIP",

        imageKandidat2: KandidatMahfud,
        namaKandidat2: "Mahfud MD",
        posisiKandidat2: "Calon Wakil Presiden",
        imagePartai2: IconInfo,
        namaPartai2: "Non-partai",
        delay: "1000",
    },
];

// Koalisi Partai

// data kandidat2
export const koalisiPartai = [
    {
        partai1: PartaiNo1Pkb,
        PartaiNo5Nasdem,
        PartaiNo8Pks,
        PartaiNo11Garuda,
    },
    {
        partai2: PartaiNo12Pan,
        PartaiNo4Golkar,
        PartaiNo14Demokrat,
        PartaiNo24Ummat,
        PartaiNo13Pbb,
        PartaiNo15Psi,
        PartaiNo7Gelora,
    },
    {
        partai3: PartaiNo3Pdip,
        PartaiNo17Ppp,
        PartaiNo16Perindo,
        PartaiNo10Hanura,
    },
];

export const dataSwiperPartai = [
    {
        id: 1,
        image: PartaiNo1Pkb,
    },
    {
        id: 2,
        image: PartaiNo2Gerindra,
    },
    {
        id: 3,
        image: PartaiNo3Pdip,
    },
    {
        id: 4,
        image: PartaiNo4Golkar,
    },
    {
        id: 5,
        image: PartaiNo5Nasdem,
    },
    {
        id: 7,
        image: PartaiNo7Gelora,
    },
    {
        id: 8,
        image: PartaiNo8Pks,
    },
    {
        id: 10,
        image: PartaiNo10Hanura,
    },
    {
        id: 11,
        image: PartaiNo11Garuda,
    },
    {
        id: 12,
        image: PartaiNo12Pan,
    },
    {
        id: 13,
        image: PartaiNo13Pbb,
    },
    {
        id: 14,
        image: PartaiNo14Demokrat,
    },
    {
        id: 15,
        image: PartaiNo15Psi,
    },
    {
        id: 16,
        image: PartaiNo16Perindo,
    },
    {
        id: 17,
        image: PartaiNo17Ppp,
    },
    {
        id: 24,
        image: PartaiNo24Ummat,
    },
];

// TODO| biodata Start//
export const biodata = [
    {
        id: 1,
        eventKey: 0,
        noUrut: "NO. 1",
        judul: "Anies Rasyied Baswedan",
        posisiMenjabat: "Calon Presiden No.1",
        jabatan: "Gubernur DKI Jakarta Periode 2017-2022",
        imageKandidat: KandidatAnis,
        namaKandidat1: "Anies Baswedan",
        posisiKandidat: "Calon Presiden",
        pasanganKandidat: "Mihaimin Iskandar",
        sectionPencapain: "Pencapaian",
        biografi:
            "Anies Rasyid Baswedan saat ini berumur  54 tahun, lahir pada 7 Mei 1969 di Kuningan, Jawa Barat. Terlahir dari keluarga akademisi, kedua orang tua Anies, Anies Rasyid Baswedan dan Aliyah Rasyid adalah dosen di salah satu universitas di Yogyakarta.Anies meraih gelar sarjana ekonomi di Universitas Gadjah Mada (UGM). Selama menjadi mahasiswa, ia aktif berorganisasi di Himpunan Mahasiswa Islam (HMI) dan menjadi salah satu Majelis Penyelamat Organisasi HMI UGM. Anies juga terpilih menjadi Ketua Umum Senat Mahasiswa melalui kongres 1992. Ia kemudian menerima beasiswa untuk melanjutkan kuliah S2 di University of Maryland, mengambil studi bidang International Security dan Economic Policy. Pada tahun 1999, Anies kembali mendapatkan beasiswa Gerald S. Maryanov Fellow di Northern Illinois University dan mendapatkan gelar PhD pada 2004 di bidang ilmu politik. Karier politik Anies mulai terlihat sejak mengikuti Konvensi Partai Demokrat menuju Pilpres 2014. Ia kemudian menjadi juru bicara kampanye Jokowi dan Jusuf Kalla pada 2014. Presiden Jokowi menunjuk Anies sebagai Menteri Pendidikan dan Kebudayaan (2014), namun ia diberhentikan oleh Jokowi pada 2016. Anies kemudian diusung maju oleh Gerindra, PKS, dan Demokrat dan memenangkan pemilihan Gubernur DKI Jakarta masa jabatan 2017-2022.Dalam kontestasi politik di Jakarta tersebut, Anies dituduh menggunakan strategi politik identitas menyusul ucapan lawannya, Basuki Tjahaja Purnama, tentang Al Maidah, termasuk juga karena mendapat dukungan dari kelompok islam politik, khususnya FPI dan Rizieq Shihab. Selain mendapat banyak penghargaan selama menjadi Gubernur DKI, ia juga dilekati sejumlah kontroversi, termasuk minimnya realisasi janji DP 0 persen (lihat bagian kontroversi).",
        icon: "",
        keterangan:
            "Kami memilih untuk memasukan 3 pencapaian/kontroversi agar memberi gambaran yang berimbang. Oleh karena itu, pembaca disarankan untuk melakukan riset lebih lanjut. Daftar pencapaian/kontroversi akan diperbaharui jika ditemukan fakta/informasi relevan terkait dan tim Bijak Memilih menganggap diperlukannya perubahan.",
        judulPencapaian1: "Integrasi Transportasi Publik ",
        judulPencapaian2: "JakPreneur: Pengembangan UMKM",
        judulPencapaian3: "DKI Jakarta Sebagai Tuan Rumah Formula E",
        isiPencapaian1:
            "Anies Rasyied Baswedan telah mencapai pengakuan global atas inisiatifnya dalam memperbaiki sistem transportasi publik Jakarta, meskipun dinilai beberapa pihak masih ada masalah kemacetan yang perlu ditangani.",
        isiPencapaian2:
            "Anis Rasyied Baswedan berhasil menginisiasi program Jakpreneur yang membantu lebih dari 300.000 UMKM di DKI Jakarta, berpotensi membuka lapangan kerja dan menurunkan tingkat pengangguran.",
        isiPencapaian3:
            "Anis Rasyied Baswedan meraih sorotan melalui keberhasilannya menjadi tuan rumah Formula E di DKI Jakarta, meskipun proyek tersebut menimbulkan kontroversi terkait besarnya biaya pelaksanaan.",
        judulKontroversi1: "Politik Identitas di Pilgub 2017",
        judulKontroversi2: "Janji Kampanye Atasi Banjir Jakarta ",
        judulKontroversi3: "Pembangunan Hunian Layak (Program Rumah DP 0)",
        isiKontroversi1:
            "Anies Rasyied Baswedan menuai kontroversi terkait penggunaan politik identitas agama dalam Pilkada DKI Jakarta 2017, namun mencatat perbaikan Indeks Kota Toleran selama masa jabatannya sebagai Gubernur.",
        isiKontroversi2:
            "Anies Rasyied Baswedan, meskipun berjanji mengatasi banjir Jakarta dengan sumur resapan dan klaim pengendalian dalam 6 jam, menghadapi kritik karena janji kampanyenya belum sepenuhnya terwujud di lapangan.",
        isiKontroversi3:
            "Program rumah DP 0 sebagai inisiatif unggulan Anies Baswedan dalam membangun hunian layak, namun menghadapi kendala implementasi seperti revisi batas penghasilan peserta dan minimnya peminat, sebagian disebabkan oleh dampak pandemi dan pengurangan anggaran.",
    },
    {
        id: 2,
        eventKey: 1,
        noUrut: "NO. 2",
        judul: "Prabowo Subianto",
        posisiMenjabat: "Calon Presiden No.2",
        jabatan: "Menteri Pertahanan dan Keamanan Periode 2019 - 2024",
        imageKandidat: KandidatPrabowo,
        namaKandidat: "Prabowo Subianto",
        posisiKandidat: "Calon Presiden",
        pasanganKandidat: "Gibran Rakabuming Raka",
        biografi:
            "Prabowo Subianto saat ini berumur 72 Tahun, lahir di Jakarta, 17 Oktober 1951. Prabowo Subianto kini menjabat sebagai Menteri Pertahanan RI periode 2019-2024. Ia lahir di Jakarta, 17 Oktober 1951, putra dari ahli ekonomi dan politikus Sumitro Djojohadikusumo, Menteri Keuangan di zaman Presiden Sukarno dan Menteri Perdagangan semasa Presiden Soeharto. Pada akhir 1950an hingga kejatuhan Presiden Sukarno, ia menetap di di luar negeri mengikuti aktivitas politik dan akademik ayahnya yang menjelang akhir 1950an memiliki haluan politik yang berbeda dengan pemerintahan Orde Lama Sukarno. Ia kemudian mengikuti pendidikan Militer di Magelang tahun 1970-1974 yang merupakan awal mula karier Prabowo di TNI Angkatan Darat selama 28 tahun. Atas perintah Presiden Soeharto, Prabowo menjadi salah satu Komandan Pleton termuda, yang terlibat dalam Operasi Seroja di Timor Timur. Kariernya di militer berhenti secara hormat melalui Kepres yang ditandatangani Presiden Habibie menyusul keluarnya keputusan Dewan Kehormatan (DKP) yang merekomendasikan “pemberhentian” Prabowo karena pelanggaran disiplin, termasuk dugaan penculikan para aktivis – tindakan yang menurutnya ia hanya melaksanakan tugas/perintah. Selesai berkarir di militer, Prabowo beralih ke dunia usaha dimana Ia memiliki Nusantara Group yang bergerak di bidang minyak kelapa sawit. Kariernya dalam dunia politik dimulai saat ia mencalonkan diri sebagai Capres Konvensi Partai Golkar 2004. Ia pun akhirnya mendirikan Partai Gerindra pada tahun 2008 dan berkubu dengan tokoh reformasi Megawati dari PDI Perjuangan sebagai cawapres di Pemilu 2009. Pada 2014 dan 2019, ia kembali mencalonkan diri sebagai capres bersama Hatta Rajasa di Pemilu 2014 dan Pemilu 2019 bersama Cawapres Sandiaga Uno. Saat ini, Ia mencalonkan diri sebagai capres untuk ketiga kalinya di Pemilu 2024 berpasangan dengan Gibran Rakabuming Raka.",
        icon: "",
        keterangan:
            "Kami memilih untuk memasukan 3 pencapaian/kontroversi agar memberi gambaran yang berimbang. Oleh karena itu, pembaca disarankan untuk melakukan riset lebih lanjut. Daftar pencapaian/kontroversi akan diperbaharui jika ditemukan fakta/informasi relevan terkait dan tim Bijak Memilih menganggap diperlukannya perubahan. ",
        judulPencapaian1: "Modernisasi Alutsista Pertahanan RI",
        judulPencapaian2: "Kontribusi Ekonomi dan Lapangan Kerja",
        judulPencapaian3: "Pembangunan Fasilitas Kesehatan dan Pengelolaan Air",
        isiPencapaian1:
            "Prabowo Subianto memimpin inisiatif penting dalam modernisasi Alutsista RI, menggalakkan kemitraan dengan negara-negara sahabat serta membentuk Defend ID untuk memperbaiki industri pertahanan meskipun dihadapi beberapa isu terkait manajemen perusahaan-perusahaannya.",
        isiPencapaian2:
            "Prabowo Subianto mencapai sorotan atas kontribusinya dalam bidang ekonomi dan lapangan kerja melalui kepemilikan serta manajemen perusahaan, meskipun beberapa kontroversi terkait ketenagakerjaan dan dampak lingkungan telah menyoroti perjalanan bisnisnya.",
        isiPencapaian3: "Prabowo Subianto mencapai sorotan dengan mengembangkan infrastruktur kesehatan dan menangani kekurangan air melalui pembangunan RS dan penemuan sumber air.",
        judulKontroversi1: "Kasus Penculikan Aktivis Peristiwa Mei, 1998",
        judulKontroversi2: "Polemik Gagalnya Food Estate",
        judulKontroversi3: "Sikap Terhadap Konflik Rusia - Ukraina",
        isiKontroversi1:
            "Prabowo Subianto, mantan Panglima Kostrad, kontroversial karena dituduh terlibat dalam kasus penculikan aktivis pada Peristiwa Mei 1998, meskipun pengungkapan yang jelas tentang peristiwa tersebut masih belum tercapai.",
        isiKontroversi2:
            "Prabowo Subianto's Food Estate project faced criticism due to its perceived failure in addressing global food crises, raising concerns about land use, environmental impact, and potential deforestation.",
        isiKontroversi3:
            "Prabowo Subianto mencetuskan kontroversi dengan usulannya untuk menyelesaikan konflik Rusia-Ukraina, dipandang mirip dengan pendekatan Tiongkok, yang memicu respons tegas dari beberapa pihak internasional dan kritik dari beberapa politisi dalam negeri.",
    },
    {
        id: 3,
        eventKey: 2,
        noUrut: "NO. 3",
        judul: "Ganjar Pranowo",
        posisiMenjabat: "Calon Presiden No.3",
        jabatan: "Gubernur Jawa Tengah Periode 2018 - 2023",
        imageKandidat: KandidatGanjar,
        namaKandidat: "Ganjar Pranowo",
        posisiKandidat: "Calon Presiden",
        pasanganKandidat: "Mahfud MD",
        sectionPencapain: "Pencapaian",
        biografi:
            "Ganjar Pranowo saat ini berumur 55 Tahun, lahir di Karanganyar, Jawa Tengah, pada 28 Oktober 1968, tepat dimulainya masa pemerintahan Orde Baru. Ayahnya, Parmudji Pramudi, adalah seorang polisi letnan satu dan ibunya Sri Suparmi adalah seorang pedagang warung kelontong. Semasa kuliah di Fakultas Hukum Universitas Gadjah Mada (UGM), Ganjar mengikuti berbagai organisasi seperti Majestic Organisasi Pecinta Alam, Gerakan Mahasiswa Nasional Indonesia (GMNI), dan Gerakan Demokrat Kampus (Gedek) yang menganut pemikiran Marhaenisme Indonesia, yang dirintis oleh Presiden Soekarno. Ia melanjutkan pendidikan S2 Ilmu Politik di Universitas Indonesia dan memulai karirnya sebagai Konsultan Sumber Daya Manusia (HRD) di PT. Prakarsa. Karier politiknya dimulai dari awal terbentuknya Partai Demokrasi Indonesia Perjuangan (PDI-P) di masa reformasi. Ganjar yang baru berusia 30 tahun ikut mendukung Megawati sewaktu berhadapan dengan Soejardi yang didukung oleh pemerintahan Orde Baru. Ganjar pertama kali masuk ke DPR sebagai Anggota Komisi IV DPR RI 2004-2009 dan Komisi II DPR RI 2009-2013. Ia terlibat dalam Tim Pengawas Kasus Century dan menjadi Wakil Sekretaris Fraksi DPR RI 2010-2013.Ganjar terpilih sebagai Gubernur Jawa Tengah pada Mei 2013 dan berhasil memenangkan pemilihan Gubernur pada tahun 2018 untuk periode kedua hingga akhir masa jabatan di tahun 2023. Selama menjadi Gubernur, salah satu isu terbesar yang sempat dihadapi Ganjar adalah dua kasus pembukaan pertambangan di Wadas dan Rembang (lihat bagian kontroversi). Selama menjabat, Ganjar berfokus pada pembangunan sektor pendidikan, pertanian, dan infrastruktur. ",
        icon: "",
        keterangan:
            "Kami memilih untuk memasukan 3 pencapaian/kontroversi agar memberi gambaran yang berimbang. Oleh karena itu, pembaca disarankan untuk melakukan riset lebih lanjut. Daftar pencapaian/kontroversi akan diperbaharui jika ditemukan fakta/informasi relevan terkait dan tim Bijak Memilih menganggap diperlukannya perubahan.",
        judulPencapaian1: "Peningkatan Akses Pendidikan",
        judulPencapaian2: "Pemberdayaan Pertanian Melalui Program Kartu Tani",
        judulPencapaian3: "Pembangunan Infrastruktur: Jalan dan Bandar Udara",
        isiPencapaian1:
            "Ganjar Pranowo, dengan inisiatifnya dalam memperluas akses pendidikan dan memerangi radikalisme, telah mengangkat kualitas pendidikan untuk keluarga kurang mampu di Jawa Tengah.",
        isiPencapaian2:
            "Inisiatif program Kartu Tani di Jawa Tengah berhasil meningkatkan produktivitas pertanian serta memperoleh penghargaan nasional atas kontribusinya dalam pengelolaan dan pemberdayaan petani.",
        isiPencapaian3:
            "Ganjar Pranowo, selama kepemimpinannya di Jawa Tengah, fokus pada pembangunan infrastruktur jalan serta bandar udara dengan inovasi teknologi untuk pemeliharaan jalan dan upaya inklusi wilayah timur provinsi.",
        judulKontroversi1: "Konflik Agraria: Wadas dan Rembang",
        judulKontroversi2: "Penolakan Tim Sepak Bola Israel pada Piala Dunia U-20 ",
        judulKontroversi3: "Janji Tangani Angka Kemiskinan",
        isiKontroversi1: "Kontroversi terkait keputusan pembukaan tambang di Wadas dan Rembang menyoroti konflik agraria yang melibatkan Ganjar Pranowo di Jawa Tengah.",
        isiKontroversi2:
            "Kontroversi terkait penolakan Ganjar terhadap partisipasi Tim Sepak Bola Israel dalam Piala Dunia U-20 memicu kecaman publik dan berujung pada pembatalan acara tersebut, menimbulkan kerugian besar bagi Indonesia.",
        isiKontroversi3:
            "Ganjar Pranowo memiliki kontroversi terkait ketidakcapaian janji menekan angka kemiskinan dan pengangguran di Jawa Tengah, namun berhasil menurunkan angka kemiskinan meskipun tidak sesuai target yang dijanjikan.",
    },
    // Wakil Presiden
    {
        id: 4,
        eventKey: 3,
        noUrut: "NO. 1",
        judul: "Muhaimin Iskandar",
        posisiMenjabat: "Calon Wakil Presiden No.1",
        jabatan: "ketua umum PKB untuk periode jabatan 2019-2024",
        imageKandidat: KandidatMuhaimin,
        namaKandidat: "Prabowo Subianto",
        posisiKandidat: "Calon Wakil Presiden",
        pasanganKandidat: "Anies Baswedan",
        sectionPencapain: "Pencapaian",
        biografi:
            "Muhaimin Iskandar saat ini berumur 54 Tahun, Lahir di Jombang, 24 September 1966, yang lebih dikenal sebagai Cak Imin, adalah seorang politikus Indonesia yang lahir di Jombang, Jawa Timur, pada 24 September 1966. Ia merupakan anak dari pasangan Muhammad Iskandar dan Muhassonah, yang keduanya adalah pengajar di Pondok Pesantren Mambaul Ma’arif. Ia juga merupakan keponakan dari mantan Presiden Abdurrahman Wahid atau Gus Dur. Cak Imin menempuh pendidikan di Universitas Negeri Malang, Universitas Gadjah Mada, Universitas Indonesia, dan Universitas Airlangga. Ia mengambil jurusan hukum, ilmu politik, dan komunikasi. Ia juga aktif dalam organisasi kemahasiswaan, seperti Himpunan Mahasiswa Islam (HMI) dan Ikatan Mahasiswa Muhammadiyah (IMM). Ia mendapatkan gelar doktor dari Universitas Airlangga pada tahun 2008. Cak Imin memulai karir politiknya dengan bergabung dengan Partai Kebangkitan Bangsa (PKB) pada tahun 1998. Ia pernah menjabat sebagai anggota DPR, Wakil Ketua DPR, Menteri Tenaga Kerja dan Transmigrasi, dan Wakil Ketua MPR. Ia juga menjabat sebagai Ketua Umum PKB sejak tahun 2005. Ia dikenal sebagai politikus yang peduli dengan nasib buruh, petani, dan rakyat kecil. Ia juga dikenal sebagai politikus yang berjiwa nasionalis dan toleran. Ia disebut-sebut sebagai calon wakil presiden yang akan mendampingi Anies Baswedan pada pemilihan presiden 2024",
        icon: "",
        keterangan:
            "Kami memilih untuk memasukan 3 pencapaian/kontroversi agar memberi gambaran yang berimbang. Oleh karena itu, pembaca disarankan untuk melakukan riset lebih lanjut. Daftar pencapaian/kontroversi akan diperbaharui jika ditemukan fakta/informasi relevan terkait dan tim Bijak Memilih menganggap diperlukannya perubahan.",
        judulPencapaian1: "Menyelamatkan PKB dari Konflik Internal",
        judulPencapaian2: "Menjadi Menteri Tenaga Kerja dan Transmigrasi",
        judulPencapaian3: "Aktivis PMII hingga Pendiri PKB",
        isiPencapaian1: "Muhaimin Iskandar berhasil mengamankan PKB dari konflik internal dan memimpin partai keluar dari tantangan besar dalam pemilu 2009.",
        isiPencapaian2:
            "Muhaimin Iskandar mencapai ketenaran melalui kepemimpinannya sebagai Menteri Tenaga Kerja dan Transmigrasi, fokus pada perlindungan tenaga kerja dan penyelesaian kasus-kasus penting terkait buruh migran.",
        isiPencapaian3:
            "Muhaimin Iskandar adalah seorang aktivis yang memimpin gerakan mahasiswa dan menjadi salah satu pendiri PKB, menunjukkan kepemimpinan yang kuat dalam menghadirkan perubahan politik di Indonesia.",
        judulKontroversi1: "Mengeluarkan Gus Dur dari PKB",
        judulKontroversi2: "Mengusulkan Penundaan Pemilu 2024",
        judulKontroversi3: "Mendeklarasikan Diri sebagai Calon Wakil Presiden",
        isiKontroversi1: "Muhaimin Iskandar kontroversial karena mengeluarkan pendiri PKB, Abdurrahman Wahid, dari keanggotaan partai pada tahun 2008, menciptakan perselisihan besar.",
        isiKontroversi2:
            "Usulan Muhaimin Iskandar untuk menunda Pemilu 2024 karena pandemi COVID-19 dan aspirasi pelaku UMKM menuai kritik karena dituduh mencari keuntungan politik, dihadang oleh KPU yang memegang jadwal konstitusional.",
        isiKontroversi3:
            "Deklarasi diri sebagai calon wakil presiden bersama Anies Baswedan tanpa persetujuan Anies di Pemilu 2024 dianggap terlalu dini dan tidak etis oleh sejumlah tokoh politik dan analis.",
    },
    {
        id: 5,
        eventKey: 4,
        noUrut: "NO. 2",
        judul: "Gibran Rakabuming Raka",
        posisiMenjabat: "Calon Wakil Presiden No.2",
        jabatan: "Wali Kota Surakarta periode 2021-2026",
        imageKandidat: KandidatGibran,
        namaKandidat: "Gibran Rakabuming Raka ",
        posisiKandidat: "Calon Wakil Presiden",
        pasanganKandidat: "Prabowo Subianto",
        sectionPencapain: "Pencapaian",
        biografi:
            "Gibran Rakabuming Raka saat ini berumur 36 Tahun, lahir di Surakarta  1 Oktober 1978. adalah seorang pengusaha dan politisi Indonesia yang saat ini menjabat sebagai Wali Kota Surakarta sejak 26 Februari 2021. Ia lahir pada 1 Oktober 1987 di Surakarta, Jawa Tengah, sebagai putra sulung dari Presiden Joko Widodo dan Iriana. Sejak kecil, ia sudah tertarik dengan dunia bisnis dan kuliner. Ia menempuh pendidikan di Singapura dan Australia sebelum kembali ke Indonesia dan memulai bisnis katering Chilli Pari dan martabak Markobar. Pada tahun 2015, Gibran menikahi Selvi Ananda, mantan Putri Solo 2009, dan dikaruniai dua orang anak, Jan Ethes Srinarendra dan La Lembah Manah. Selain berbisnis di bidang kuliner, Gibran juga terlibat dalam berbagai usaha lain, seperti aplikasi pencari pekerja lepas Kerjaholic dan restoran Mangkokku. Ia juga aktif dalam berbagai organisasi sosial dan kemasyarakatan, seperti HIPMI, KADIN, dan Yayasan Solo Peduli. Pada tahun 2020, Gibran memulai karir politiknya dengan maju sebagai calon wali kota Solo dari PDI-P, mengikuti jejak ayahnya, dan berhasil memenangkan pemilihan dengan perolehan suara 85,62%. Ia dilantik sebagai wali kota Solo pada 26 Februari 2021. Sebagai wali kota, Gibran berkomitmen untuk melanjutkan pembangunan dan pemberdayaan Solo, serta mengatasi berbagai tantangan, seperti pandemi COVID-19, banjir, dan kemiskinan.",
        icon: "",
        keterangan:
            "Kami memilih untuk memasukan 3 pencapaian/kontroversi agar memberi gambaran yang berimbang. Oleh karena itu, pembaca disarankan untuk melakukan riset lebih lanjut. Daftar pencapaian/kontroversi akan diperbaharui jika ditemukan fakta/informasi relevan terkait dan tim Bijak Memilih menganggap diperlukannya perubahan.",
        judulPencapaian1: "Menjadi Wali Kota Solo termuda dalam sejarah kota Solo",
        judulPencapaian: "Ditunjuk sebagai Ketua Pelaksana Indonesia ASEAN Para Games 2022",
        judulPencapaian3: "Terpilih sebagai Wali Kota terpopuler sepanjang 2021",
        isiPencapaian1: "Gibran menjadi Wali Kota Solo termuda, mewarisi semangat dan kepemimpinan dari ayahnya, menunjukkan dedikasi dalam memimpin kota kelahiran Presiden Joko Widodo.",
        isiPencapaian2: "Dengan kehormatan dari Presiden, Gibran memastikan kesuksesan acara olahraga bagi atlet difabel ASEAN, sambil mempromosikan inklusi dan solidaritas melalui ajang tersebut.",
        isiPencapaian3:
            "Dengan kebijakan dan program yang menarik, Gibran meraih popularitas tinggi di media sosial serta menerima penghargaan sebagai Wali Kota paling populer di Indonesia Indicator, mencerminkan pengaruhnya dalam masyarakat.",
        judulKontroversi1: "Salah Menyebutkan Asam Folat",
        judulKontroversi2: "Keterlibatan Hakim Konstitusi Anwar Usman dalam Putusan MK",
        judulKontroversi3: "Dituduh mendapat keuntungan dari keputusan Mahkamah Konstitusi (MK)",
        isiKontroversi1:
            "Gibran Rakabuming kena sorotan karena kesalahan menyebut asam sulfat sebagai zat yang dibutuhkan ibu hamil, padahal seharusnya asam folat, memicu kritik dan cemoohan dari warganet terkait pemahaman kesehatan dan gizi.",
        isiKontroversi2:
            "Keterlibatan Hakim Konstitusi Anwar Usman dalam putusan yang memungkinkan kepala daerah menjadi calon wakil presiden memunculkan pertanyaan akan konflik kepentingan karena hubungan keluarga antara Anwar Usman, Jokowi, dan Gibran.",
        isiKontroversi3:
            "Gibran dituduh mendapat keuntungan dari putusan Mahkamah Konstitusi yang menghapus syarat usia minimum untuk calon presiden/cawapres, mempertanyakan keadilan keputusan yang mengizinkan orang muda dengan pengalaman politik di tingkat daerah, terutama karena hubungan keluarga yang terlibat dalam proses keputusan tersebut.",
    },
    {
        id: 6,
        eventKey: 5,
        noUrut: "NO. 3",
        judul: "Mahfud MD",
        posisiMenjabat: "Calon Wakil Presiden No.3",
        jabatan: " Menteri Koordinator Bidang Politik, Hukum, dan Keamanan",
        imageKandidat: KandidatMahfud,
        namaKandidat: "Mahfud MD",
        posisiKandidat: "Calon Wakil Presiden",
        umur: "54",
        tglLahir: "Sampang, 13 Mei 1957 ",
        pasanganKandidat: "Ganjar Pranowo",
        sectionPencapain: "Pencapaian",
        biografi:
            "Mahfud MD adalah seorang akademisi, hakim, dan politisi Indonesia yang lahir di Sampang, Madura, Jawa Timur pada 13 Mei 1957. Ia merupakan anak dari pasangan Mahmodin dan Siti Khadijah. Ia menikah dengan Zaizatoen Nirhajati dan memiliki tiga orang anak, yaitu Mohammad Ikhwan Zein, Vina Amalia, dan Royhan Akbar12 Mahfud MD menempuh pendidikan di Sekolah Pendidikan Guru Agama (PGA) Negeri di Pamekasan, Madura, kemudian melanjutkan ke Pendidikan Hakim Islam Negeri (PHIN) di Yogyakarta. Ia lulus sebagai sarjana hukum dari Universitas Islam Indonesia (UII) pada tahun 1984, dan meraih gelar doktor dari Universitas Gadjah Mada (UGM) pada tahun 1993. Ia menjadi dosen di UII dan UGM, serta menjabat sebagai rektor UII pada tahun 1998-2000. Mahfud MD memulai karir politiknya dengan menjadi anggota DPR dari Partai Kebangkitan Bangsa (PKB) pada tahun 1999-2004. Ia juga menjabat sebagai Menteri Pertahanan dan Menteri Kehakiman dan HAM pada era pemerintahan Abdurrahman Wahid (Gus Dur). Pada tahun 2008, ia terpilih sebagai Ketua Mahkamah Konstitusi dan menjabat hingga tahun 2013. Pada tahun 2019, ia diangkat sebagai Menteri Koordinator Bidang Politik, Hukum, dan Keamanan oleh Presiden Joko Widodo. Pada tahun 2023, ia diusung sebagai calon wakil presiden mendampingi Ganjar Pranowo dalam pemilihan presiden Indonesia 2024.",
        icon: "",
        keterangan:
            "Kami memilih untuk memasukan 3 pencapaian/kontroversi agar memberi gambaran yang berimbang. Oleh karena itu, pembaca disarankan untuk melakukan riset lebih lanjut. Daftar pencapaian/kontroversi akan diperbaharui jika ditemukan fakta/informasi relevan terkait dan tim Bijak Memilih menganggap diperlukannya perubahan.",
        judulPencapaian1: "Menteri Pertahanan dan Menteri Kehakiman dan HAM:",
        judulPencapaian2: "Ketua Mahkamah Konstitusi",
        judulPencapaian3: "Menteri Koordinator Bidang Politik, Hukum, dan Keamanan",
        isiPencapaian1: "Sukses dalam penyusunan UU Pertahanan Negara (UU No 3/2002) yang mengatur strategi pertahanan nasional dan peran TNI.",
        isiPencapaian2: "Integritas dalam menangani kasus hukum seperti sengketa pemilu, uji materi, dan judicial review.",
        isiPencapaian3: "Fokus pada Isu-Isu Strategis Nasional dalam Penanganan Pandemi, Penegakan Hukum, dan Reformasi Birokrasi.",
        judulKontroversi1: "Pengucapan Terhadap Warga Meninggal di Antrean COVID-19: ",
        judulKontroversi2: "Pernyataan tentang LGBT sebagai Kodrat Tuhan",
        judulKontroversi3: "Panggilan Anggota DPR sebagai 'Copet' dan 'Markus",
        isiKontroversi1:
            "Kontroversi terjadi saat Mahfud MD menyebut meninggalnya warga kaya raya di Jawa Timur yang antre penanganan COVID-19 sebagai 'mengharukan', memicu kritik karena dianggap tidak sensitif dan tidak mencerminkan tanggung jawab sebagai pejabat.",
        isiKontroversi2:
            "Mahfud MD menimbulkan kontroversi dengan menyatakan LGBT sebagai kodrat Tuhan, menyoroti perbedaan antara pandangan agama dan pandangan pemerintah yang dinilai tidak konsisten dalam pendekatan terhadap LGBT.",
        isiKontroversi3:
            "Saat Mahfud MD menyebut anggota DPR yang mempertanyakan transaksi mencurigakan sebagai 'copet' dan 'markus', kontroversi muncul karena bahasa yang dianggap tidak pantas dan reaksi panas dari anggota parlemen, menyoroti gesekan antara pemerintah dan legislatif serta etika dalam komunikasi publik.",
    },
];

export const isu = [
    {
        id: 1,
        icon: IsuHam,
        judul: "Hak Asasi Manusia",
        LinkId: "/isu#ham",
        deskripsi: "Minimnya data dan dokumentasi",
        delay: "0",
    },
    {
        id: 2,
        icon: IsuHln,
        judul: "Hubungan Luar Negeri",
        LinkId: "/isu#hln",
        deskripsi: "Peran aktif indonesia dalam politik luar negeri",
        delay: "500",
    },
    {
        id: 3,
        icon: IsuSda,
        judul: "Sumber Daya Alam",
        LinkId: "/isu#sda",
        deskripsi: "Krisis Sumber daya alam dan ketidakefisienan dalam penggunaan",
        delay: "1000",
    },
];

export const event = [
    {
        id: 1,
        image: EventVolunteer,
        judul: "Volunteer",
        deskripsi: "Bergabunglah menjadi volunteer Suarasa Pemilih dan jadi bagian perubahan untuk Indonesia maju",
    },
    {
        id: 2,
        image: EventPartnership,
        judul: "Partnership",
        deskripsi: "Sinergi dan kerjasama untuk mencapai tujuan bersama. Kolaborasi yang memajukan potensi kedua belah pihak",
    },
];

// TODO| TimPage Start//
export const anggotaTim = [
    {
        id: 1,
        fotoTim: TimArsya,
        namaTim: "Arsya Yan Duribta",
        npmTim: "4522210117",
        kalimatPemilu: "Penentuan nasib bangsa melalui pemilu adalah hak dan kewajiban kita bersama",
        delay: "0",
    },
    {
        id: 2,
        fotoTim: TimGibran,
        namaTim: "Gibran Kahlil",
        npmTim: "4522210128",
        kalimatPemilu: "Rakyat adalah kunci utama untuk menentukan masa depan negara",
        delay: "500",
    },
    {
        id: 3,
        fotoTim: TimHotra,
        namaTim: "Muhammad Abduh Harry Malhotra",
        npmTim: "4522210133",
        kalimatPemilu: "Suaramu adalah kekuatanmu, pilihlah dengan bijak untuk masa depan yang lebih baik!",
        delay: "1000",
    },
];

export const tentangTim = [
    {
        id: 1,
        iconTim: IconInfo2,
        judulTentangTim: "Apa itu Suarasa Pemilih?",
        isiTentangTim:
            "Suarasa Pemilih merangkum konsep suara, rasa, dan pemilih dalam satu nama. Ini mencerminkan fokus pada ekspresi dan pendapat setiap pemilih, mengakui dimensi emosional dan nilai-nilai yang memengaruhi keputusan, serta menekankan kebermaknaan partisipasi setiap individu dalam proses demokratis. Sebagai platform yang berkomitmen, Suarasa Pemilih mengajak setiap pemilihuntuk berkontribusi aktif dalam membangun demokrasi yang inklusif dan representatif.",
        delay: "0",
    },
    {
        id: 2,
        iconTim: IconInfo2,
        judulTentangTim: "Website Informasi seputar Pemilihan Presiden",
        isiTentangTim:
            "Suarasa Pemilih adalah sebuah platform online yang bertujuan memberdayakan setiap pemilih dalam proses demokrasi. Dengan komitmen terhadap keterbukaan, transparansi, dan partisipasi penuh, Suarasa Pemilih menyediakan wadah untuk pemilih agar dapat mengakses informasi yang jelas dan mendalam mengenai calon, isu-isu kunci, dan proses pemilihan. Melalui sumber daya edukatif, pemantauan pemilihan, dan fasilitas suara, platform ini membantu membangun masyarakat yang berpartisipasi aktif dalam memilih pemimpin dan merangkul perubahan positif.",
        delay: "500",
    },
];
// TODO| TimPage End//

// TODO| Partai Start //
export const daftarPartai = [
    {
        id: 1,
        eventKey: 0,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo1Pkb,
        namaPartai: "Partai Kebangkitan Bangsa (PKB)",
        rekamJejak:
            "Partai Kebangkitan Bangsa (PKB) didirikan pada tahun 1998 dan saat ini dipimpin oleh Muhaimin Iskandar. Partai ini menduduki urutan No.1 pada KPU dan berhasil meraih 58 dari 575 kursi DPR pada periode 2019-2024, dengan persentase sebesar 10,1% dari total kursi anggota DPR.",
        deskripsiPartai:
            "Partai Kebangkitan Bangsa (PKB) adalah partai politik yang berakar pada nilai-nilai Islam-Nasionalis, dan didirikan pada tahun 1998 di awal era reformasi Indonesia. Carnegie Endowment menggambarkan PKB sebagai partai sayap kanan yang memiliki keterkaitan sejarah yang kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU). PKB awalnya didirikan oleh tokoh terkemuka Nahdlatul Ulama dan Presiden Indonesia keempat, Abdurrahman Wahid, yang lebih dikenal sebagai Gus Dur. Kemudian kepemimpinan PKB diambil alih oleh Muhaimin Iskandar atau yang akrab disapa Cak Imin. Menurut Media Survei Nasional, basis utama pendukung PKB terdiri dari umat Muslim yang terafiliasi dengan NU, terutama di pulau Jawa. Hal ini dikarenakan PKB memiliki hubungan yang erat dengan para pemimpin agama (kyai) yang memiliki pengaruh besar di kalangan pengikut mereka. Namun, perlu dicatat bahwa Ketua Umum Pengurus Besar Nahdlatul Ulama (PBNU) Yahya Cholil Staquf atau yang biasa dikenal sebagai Gus Yahya menegaskan bahwa PKB bukanlah partai yang mewakili Nahdlatul Ulama (NU), karena NU telah menjaga jaraknya dari politik praktis.",
        tokohPartai1: "Muhaimin Iskandar",
        ketTokohPartai1:
            "Muhaimin Iskandar, yang lebih dikenal sebagai 'Cak Imin', telah menjabat sebagai Ketua PKB sejak 2014. Karir politiknya meroket saat ia diangkat sebagai Menteri Tenaga Kerja selama masa kepemimpinan SBY. Belakangan ini, nama Cak Imin kembali mencuat dalam skandal 'Kardus Durian', yang merupakan kasus korupsi terkait Program Percepatan Pembangunan Infrastruktur Daerah (PPID) transmigrasi. Meskipun demikian, ia tetap konsisten membantah keterlibatannya dalam skandal tersebut.",
        tokohPartai2: "Abdurrahman Wahid",
        ketTokohPartai2:
            "Abdurrahman Wahid, lebih dikenal dengan sebutan Gus Dur, adalah pemuka agama Islam di Indonesia, salah satu pendiri PKB, dan menjabat sebagai Presiden Indonesia keempat dari tahun 1999 hingga 2001. Selama masa kepresidenannya, ia terkenal karena advokasi demokrasi, intelektualisme, dan kebijakannya terhadap toleransi, termasuk langkah-langkah seperti melegalkan perayaan Imlek secara terbuka. Upayanya ini menjadikan nama Gus Dur dihormati di kalangan keturunan Tionghoa di Indonesia. Tidak hanya itu, Gus Dur juga adalah cucu dari salah satu pendiri Nahdlatul Ulama, sebuah organisasi Islam terbesar di Indonesia. Beliau meninggal dunia pada tahun 2009.",
        faktaMenarik:
            "Kontes Miss World 2013 sempat menimbulkan kontroversi di Indonesia, khususnya di kalangan beberapa umat Muslim garis keras yang menganggap acara tersebut tidak menghormati nilai-nilai Islam. Namun, dalam suatu kejutan, Partai Kebangkitan Bangsa (PKB), yang merupakan partai berbasis Islam, mengejutkan banyak pihak dengan merilis pernyataan dukungan terhadap keputusan Indonesia menjadi tuan rumah Miss World 2013 di Bali.",
    },
    {
        id: 2,
        eventKey: 1,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo2Gerindra,
        namaPartai: "Partai Gerakan Indonesia Raya (Gerindra)",
        rekamJejak:
            "Partai Gerakan Indonesia Raya (Gerindra) didirikan pada tahun 2008 dan dipimpin oleh Prabowo Subianto. Dalam pemilu, partai ini menempati urutan No.2 berdasarkan KPU dan berhasil meraih 78 kursi dari total 575 kursi DPR pada periode 2019-2024, dengan persentase sebesar 13,6% dari jumlah kursi anggota DPR.",
        deskripsiPartai:
            "Gerindra adalah partai dengan ideologi yang berlandaskan nasionalisme dan pertahanan kesatuan negara. Menurut Institut Riset Carnegie Endowment for International Peace, Gerindra didirikan dan secara luas berfungsi sebagai wadah politik bagi Prabowo Subianto setelah ia gagal memenangkan nominasi ketua umum Golkar pada tahun 2004. Menurut kader senior Gerindra, ideologi partai ini sangat terkait erat dengan pandangan Prabowo, yang menitikberatkan pada penarikan investasi asing sambil tetap mempertahankan kedaulatan nasional. Ini sejalan dengan visi Gerindra yang menyatakan keinginan untuk menggunakan kekuatan politik guna memperkuat ekonomi nasional dengan menjaga nilai-nilai kultural.",
        tokohPartai1: "Prabowo Subianto",
        ketTokohPartai1:
            "Selain menjabat sebagai Ketua Gerindra, Prabowo Subianto adalah seorang pengusaha dan mantan Letnan Jenderal TNI yang saat ini menjabat sebagai Menteri Pertahanan. Prabowo telah mencalonkan diri sebagai presiden dua kali, namun kalah dalam pemilihan presiden dari presiden saat ini, Joko Widodo, pada tahun 2019 dan 2014. Menurut laporan CNN, Prabowo tetap menolak tuduhan pelanggaran hak asasi manusia (HAM) terkait kehilangan puluhan aktivis pada tahun 1997-98 ketika ia masih menjabat di TNI. Asmin Fransiska, seorang dosen HAM di Universitas Katolik Indonesia Atma Jaya, juga menyatakan bahwa Prabowo belum memberikan tanggapan terkait tuduhan pelanggaran HAM tahun 1998 dan dugaan bahwa ia mengetahui pembunuhan ratusan warga sipil di Santa Cruz, Timor-Leste pada tahun 1991.",
        tokohPartai2: "",
        ketTokohPartai2: "",
        faktaMenarik:
            "Gerindra saat ini telah diakui sebagai salah satu partai politik Indonesia yang sangat aktif di Twitter. Tidak hanya berinteraksi dengan pemilih muda, tapi juga aktif dalam kampanye resmi. Sebagai contoh, Gerindra bahkan mengadakan giveaway tiket konser Blackpink melalui platform Twitter pada awal tahun 2023.",
    },
    {
        id: 3,
        eventKey: 2,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo3Pdip,
        namaPartai: "Partai Demokrasi Indonesia Perjuangan (PDI-P)",
        rekamJejak:
            "Partai Demokrasi Indonesia Perjuangan (PDI-P) didirikan pada tahun 1973 dan dipimpin oleh Megawati Soekarnoputri. Dalam pemilu, partai ini menempati urutan No.3 berdasarkan KPU dan berhasil meraih 128 kursi dari total 575 kursi DPR pada periode 2019-2024, dengan persentase sebesar 22,3% dari jumlah kursi anggota DPR.",
        deskripsiPartai:
            "Partai Demokrasi Indonesia Perjuangan (PDI-P) saat ini merupakan partai politik terbesar di Indonesia, mengingat perolehan kursi DPR RI sebesar 22,3%. PDI-P didirikan pada tahun 1999 setelah berakhirnya era Suharto dan pencabutan pembatasan partai politik. Menurut pernyataan dari ketua umumnya, Megawati, sebagai partai yang berorientasi nasionalis, PDI-P diidentifikasi sebagai 'partai wong cilik' yang mewakili suara masyarakat miskin. Sebagai penerus Partai Nasional Indonesia (PNI) yang didirikan oleh presiden pertama Indonesia, Soekarno, pada tahun 1927, faktor daya tarik terhadap Soekarno juga diakui sebagai elemen penting dalam menjaga basis dukungan PDI-P selama pemilihan umum, menurut Tenggara Strategics.",
        tokohPartai1: "Megawati Soekarnoputri",
        ketTokohPartai1:
            "Megawati Sukarnoputri adalah Ketua Umum PDI-P dan sekaligus putri dari presiden pertama Indonesia, Soekarno. Megawati memiliki catatan sebagai presiden perempuan pertama dan satu-satunya di negara ini. Saat ini, ia menjabat sebagai Ketua Komite Pengarah Badan Pembinaan Ideologi Pancasila (BPIP) dan Badan Riset dan Inovasi Nasional (BRIN).",
        tokohPartai2: "Joko Widodo",
        ketTokohPartai2:
            "Joko Widodo, yang lebih akrab dikenal sebagai Jokowi, adalah Presiden Indonesia saat ini. Jokowi telah menjabat sejak tahun 2014 dan berhasil terpilih kembali pada tahun 2019. Ia menjadi presiden Indonesia pertama yang tidak berasal dari keluarga elit atau memiliki latar belakang militer. Jokowi dikenal karena gaya politik ‘blusukan’nya, yang mengutamakan interaksi langsung dengan masyarakat. Menurut Tenggara Strategics, popularitas Jokowi berkontribusi pada keberhasilan PDI-P dalam meraih kursi terbanyak di DPR RI pada pemilihan umum tahun 2014 dan 2019.",
        faktaMenarik:
            "PDI-P tahu betul bagaimana berpose, dan gerakan andalan mereka adalah salam metal. PDI-P sudah menggunakan pose ini selama bertahun-tahun dan sudah menjadi ciri khas mereka. Di politik Indonesia, Metal bukan cuma genre musik - tapi singkatan dari merah total, seperti warna logo partai PDI-P.",
    },
    {
        id: 4,
        eventKey: 3,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo4Golkar,
        namaPartai: "Partai Golongan Karya (Golkar)",
        rekamJejak:
            "Partai Golongan Karya (Golkar) didirikan pada tahun 1964 dan saat ini dipimpin oleh Airlangga Hartarto. Dalam pemilu, partai ini menempati urutan No.4 berdasarkan KPU, berhasil meraih 85 kursi dari total 575 kursi DPR pada periode 2019-2024, dengan persentase sebesar 14,8% dari jumlah kursi anggota DPR.1964",
        deskripsiPartai:
            "Partai Golongan Karya (Golkar), yang didirikan pada tahun 1964, merupakan salah satu partai politik tertua di Indonesia. Menurut penelitian dari ilmuwan politik Ulla Fionna dan Dirk Tomsa, Golkar masih sering diingat sebagai kendaraan politik kalangan elit pada masa rezim Presiden Suharto. Saat ini, Golkar tetap menjadi partai yang berpengaruh dengan pandangan politik tengah-kanan. Wakil Sekretaris Jenderal Golkar, Puteri Komarudin, menjelaskan bahwa Golkar telah 'matang' dengan fokus pada pemberdayaan pemuda, pengembangan ekonomi kreatif, dan reformasi sektor publik.",
        tokohPartai1: "Airlangga Hartarto",
        ketTokohPartai1:
            "Airlangga, yang menjabat sebagai Menteri Koordinator Bidang Perekonomian saat ini, memiliki latar belakang pengalaman di bidang usaha pertanian. Fokus kebijakannya mencakup digitalisasi industri, integrasi energi hijau, dan program bantuan untuk usaha menengah kecil. Namun, akhir-akhir ini, Airlangga menghadapi ancaman kehilangan posisinya di Golkar karena adanya dorongan internal untuk memilih ketua umum yang dianggap dapat menjamin kemenangan Golkar dalam Pemilu 2024.",
        tokohPartai2: "Luhut Binsar Pandjaitan",
        ketTokohPartai2:
            "Luhut Binsar Pandjaitan saat ini menjabat sebagai Menteri Koordinator Bidang Kemaritiman dan Investasi serta mengepalai Dewan Penasihat Golkar. Sebelumnya, beliau pernah menjabat sebagai Kepala Staf Kepresidenan Republik Indonesia pada tahun 2014, Menteri Koordinator Bidang Politik, Hukum, dan Keamanan pada tahun 2015, serta Plt. Menteri Energi dan Sumber Daya Mineral pada tahun 2016. Banyak yang berpendapat bahwa peran Luhut sangat signifikan selama pemerintahan Joko Widodo, terutama dalam konteks penanganan pandemi. Menurut laporan Tempo, Luhut mendapatkan dukungan dari kelompok yang bertujuan untuk mengambil alih status Ketua Umum Partai Golkar dari Airlangga.",
        faktaMenarik:
            "Warna kuning ikonik dari logo Golkar melambangkan kejayaan partai. Desain logo ini mencakup 17 bunga kapas, 8 cabang pohon beringin, dan 45 butir padi, yang secara simbolis mewakili tanggal kemerdekaan Indonesia. Latar belakang putih pada logo tersebut mencerminkan kemurnian agama, yang merupakan prinsip pertama dari Pancasila. Dengan elemen-elemen ini, logo Golkar menjadi representasi visual yang kuat dari sejarah dan nilai-nilai yang dijunjung tinggi oleh partai tersebut.",
    },
    {
        id: 5,
        eventKey: 4,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo5Nasdem,
        namaPartai: "Partai Nasional Demokrat (NasDem)",
        rekamJejak:
            "Partai Nasional Demokrat (NasDem) didirikan pada tahun 2011 dan saat ini dipimpin oleh Surya Paloh. Dalam pemilu, partai ini menempati urutan No,5 berdasarkan KPU, berhasil meraih 59 kursi dari total 575 kursi DPR pada periode 2019-2024, dengan persentase sebesar 10,3% dari jumlah kursi anggota DPR.",
        deskripsiPartai:
            "Partai Nasional Demokrat (NasDem) awalnya didirikan sebagai organisasi masyarakat oleh sejumlah pemimpin Golkar pada tahun 2010. Pada tahun 2011, NasDem mengalami rebranding menjadi sebuah partai yang dipimpin oleh Surya Paloh. Dengan kekuatan organisasi dan dukungan finansial dari Surya Paloh, NasDem dengan cepat memenuhi syarat untuk berpartisipasi dalam pemilihan legislatif tahun 2014. Menurut keterangan di situs web mereka, NasDem mendorong agenda pemulihan Indonesia, dengan menempatkan fokus pada kedaulatan nasional dan identitas gotong royong sesuai dengan Konstitusi 1945.",
        tokohPartai1: "Surya Paloh",
        ketTokohPartai1:
            "Surya Paloh adalah seorang pengusaha media massa dan menjabat sebagai Ketua Media Group, perusahaan induk dari Harian Media Indonesia dan stasiun berita Metro TV. Sebelumnya, ia pernah menjabat sebagai Ketua Dewan Penasihat Golkar hingga mengundurkan diri pada tahun 2011. Keputusan tersebut diambil dengan alasan bahwa Golkar tidak lagi mendukung ide-ide progresifnya dan nilai-nilai moral yang diyakininya. Surya Paloh juga dikenal sebagai advokat kebebasan pers selama era Reformasi di Indonesia.",
        tokohPartai2: "",
        ketTokohPartai2: "",
        faktaMenarik:
            "NasDem mencatat sejarah sebagai partai politik Indonesia pertama yang memperkenalkan asisten virtual. Asisten virtual bernama 'Rubi' ini diperkenalkan pada perayaan HUT ke-9 partai pada tahun 2020, dengan tujuan untuk memenuhi kebutuhan pemilih Generasi Z dan Milenial yang terus berkembang. Dalam kutipan dari Kompas, para desainer Rubi menyatakan bahwa asisten virtual ini dirancang untuk memberikan layanan publik virtual secara real-time kepada masyarakat, membawa revolusi dalam keterlibatan partai dengan rakyat.",
    },
    {
        id: 6,
        eventKey: 5,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo7Gelora,
        namaPartai: "Partai Gelombang Rakyat Indonesia (Gelora)",
        rekamJejak:
            "Partai Gelombang Rakyat Indonesia (Gelora) didirikan pada tahun 2020 dan dipimpin oleh Muhammad Anis Matta. Dalam pemilihan umum, partai ini menempati urutan No.7 menurut KPU dan tidak memperoleh kursi anggota DPR pada periode 2019-2024, sehingga mencapai 0% dari jumlah kursi yang ada.",
        deskripsiPartai:
            "Partai Gelombang Rakyat Indonesia (Gelora) didirikan pada tahun 2020. Sebelumnya dikenal sebagai Gerakan Arah Baru Indonesia (Garbi), partai ini, menurut Kompas, berfokus pada gagasan religius-nasionalis dengan banyaknya kader dari Partai Keadilan Sejahtera (PKS). Menurut ilmuwan politik Adhi Primarizki, Partai Gelora bisa dilihat sebagai versi PKS yang lebih moderat, karena Gelora terdiri dari fraksi mantan anggota PKS yang lebih moderat dalam penerapan ajaran Islam di masyarakat Indonesia.",
        tokohPartai1: "Muhammad Anis Matta",
        ketTokohPartai1:
            "Anis adalah salah satu pendiri PKS yang pernah menjabat sebagai Sekretaris Jenderal pada tahun 2003. Ia menjadi Anggota DPR RI dari 2004 sampai 2014. Setelah dinonaktifkan dari PKS, Anis bersama Fahri mendirikan Partai Gelora dan menjabat sebagai Ketua Umum. Beberapa bukunya tentang Islam-nasionalis tetap berpengaruh di kalangan Muslim.",
        tokohPartai2: "Fahri Hamzah",
        ketTokohPartai2:
            "Fahri, yang dulunya aktif dalam gerakan Reformasi, memimpin Kesatuan Aksi Mahasiswa Muslim Indonesia (KAMMI). Ia menjadi Anggota DPR RI pada tahun 2004 dan menjabat sebagai Wakil Ketua DPR RI sejak tahun 2014. Ia dinonaktifkan oleh PKS karena ketidaksesuaian dengan tuntutan Dewan Partainya. Pada tahun 2011, ia sempat menciptakan kontroversi dengan menyebut bahwa KPK tidak demokratis secara institusional.",
        faktaMenarik:
            "Logo Partai Gelora terinspirasi oleh filosofi Tionghoa, Yin dan Yang, menurut Fahri Hamzah. Warna biru melambangkan langit dan air Indonesia, merah melambangkan kekuatan, dan putih melambangkan niat baik partai untuk mengangkat Indonesia ke jenjang yang baru.",
    },
    {
        id: 7,
        eventKey: 6,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo8Pks,
        namaPartai: "Partai Keadilan Sejahtera (PKS)",
        rekamJejak:
            "Partai Keadilan Sejahtera (PKS) didirikan pada tahun 1998 dan saat ini dipimpin oleh Ahmad Syaikhu. Dalam pemilu, partai ini menempati urutan No.8 berdasarkan KPU, berhasil meraih 50 kursi dari total 575 kursi DPR pada periode 2019-2024, dengan persentase sebesar 8,7% dari jumlah kursi anggota DPR.",
        deskripsiPartai:
            "Partai Keadilan Sejahtera (PKS) berawal sebagai gerakan yang menentang rezim Suharto dan kebijakannya yang mewajibkan setiap organisasi menjadikan Pancasila sebagai dasar mereka. PKS mengambil pendekatan yang lebih berfokus pada aspek keagamaan dalam tatanan negara. Awalnya dikenal sebagai Partai Keadilan (PK), partai ini kemudian berubah menjadi PKS pada tahun 2003 sebagai upaya untuk mengadopsi sikap yang lebih moderat. Menurut Kompas dan ilmuwan politik Yon Machmudi, PKS dapat dijelaskan sebagai partai Islam konservatif yang mengambil inspirasi dari gerakan Ikhwanul Muslimin di Mesir, yang mengusung gagasan universalitas nilai Islam di berbagai aspek kehidupan sosial. Oleh karena itu, menurut Carnegie Endowment, basis pemilih utama PKS terdiri dari umat Muslim kelas menengah yang menganut pandangan Islam moderat.",
        tokohPartai1: "Ahmad Syaikhu",
        ketTokohPartai1:
            "Ahmad menjadi Ketua PKS sejak tahun 2020 dan menjadi Anggota DPR RI sejak tahun 2019. Sebelumnya, ia pernah menjabat sebagai Wakil Wali Kota Bekasi pada tahun 2013 dan menduduki beberapa posisi kepemimpinan lainnya, termasuk di Yayasan Islamic Center IQRO. Ahmad dikenal sebagai sosok tegas yang menentang Omnibus Law UU Cipta Kerja, dan ia memiliki visi bahwa PKS dapat meraih 15 persen suara dalam pemilihan legislatif 2024.",
        tokohPartai2: "",
        ketTokohPartai2: "",
        faktaMenarik:
            "Seorang perwakilan dari PKS, Rafli, mengajukan usulan legalisasi penggunaan ganja untuk keperluan medis dan rekreasi pada tahun 2020. Rafli meyakini bahwa ekspor ganja dapat memberikan kontribusi positif terhadap pertumbuhan ekonomi, terutama bagi Provinsi Aceh yang dikenal sebagai produsen dan konsumen barang yang dilarang di daerah lain.",
    },
    {
        id: 8,
        eventKey: 7,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo10Hanura,
        namaPartai: "Partai Hati Nurani Rakyat (Hanura)",
        rekamJejak:
            "Partai Hati Nurani Rakyat (Hanura) didirikan pada tahun 2006 dan saat ini dipimpin oleh Oesman Sapta Odang. Dalam pemilu, partai ini menempati urutan No.10 berdasarkan KPU, namun tidak berhasil meraih kursi anggota DPR pada periode 2019-2024.",
        deskripsiPartai:
            "Partai Hati Nurani Masyarakat (Hanura) adalah partai politik yang dapat dianggap relatif kecil namun memiliki dampak di Indonesia. Partai ini didirikan pada tahun 2006 oleh sejumlah jenderal angkatan darat yang sudah pensiun. Menurut Kompas, tujuan utama Partai Hanura sejak awal adalah menggabungkan berbagai ideologi politik ke dalam suatu kerangka kebersatuan dan kebersamaan. Berdasarkan informasi dari situs resminya, Partai Hanura memiliki fokus dalam mempromosikan ideologi nasionalis. Namun, adanya konflik internal di dalam partai telah menghasilkan dua kepengurusan yang berbeda, sehingga mengakibatkan penurunan prestasi partai ini dalam pemilihan-pemilihan sebelumnya.",
        tokohPartai1: "Oesman Sapta Odang",
        ketTokohPartai1:
            "Oesman Sapta Odang adalah Ketua Partai Hanura. Ia membangun karir sebagai seorang pengusaha sukses di Kalimantan Barat yang terlibat dalam berbagai bidang komoditas. Meskipun naik pangkat menjadi Wakil Ketua MPR pada tahun 2014, elektabilitasnya sempat terpengaruh karena dituduh terlibat dalam pencucian uang melalui sebuah kasino di Genting, Malaysia, antara tahun 2014 dan 2019.",
        tokohPartai2: "Wiranto",
        ketTokohPartai2:
            "Wiranto adalah seorang mantan jenderal militer yang mendirikan Partai Hanura pada tahun 2006. Ia pernah mencalonkan diri dalam pemilihan presiden pada tahun 2009, tetapi tidak berhasil. Pada tahun 2019, Wiranto, yang saat itu menjabat sebagai Menteri Koordinator Bidang Politik, Hukum, dan Keamanan, diserang oleh seorang penyerang tak dikenal yang diyakini terkait dengan ISIS. Saat ini, Wiranto lebih fokus pada perannya sebagai Ketua Dewan Pertimbangan Presiden (Wantimpres).",
        faktaMenarik:
            "Pendiri dan mantan Ketua Partai Hanura, Wiranto, memutuskan untuk melepaskan lebih dari 100 mantan kader Hanura agar dapat pindah dan bergabung dengan Partai Persatuan Pembangunan (PPP) sebagai kandidat legislatif baru dalam Pemilu 2024. Wiranto menyatakan bahwa ia tidak akan memaksa dan memberikan kebebasan kepada para kader untuk memilih rumah perjuangan yang sesuai dengan aspirasi politik mereka.",
    },
    {
        id: 9,
        eventKey: 8,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo11Garuda,
        namaPartai: "Partai Garda Perubahan Indonesia (Garuda)",
        rekamJejak:
            "Partai Garda Perubahan Indonesia (Garuda) berdiri pada tahun 2015 dan dipimpin oleh Ahmad Ridha Sabana. Dalam pemilihan umum, partai ini menempati urutan No.11 menurut KPU dan tidak memperoleh kursi anggota DPR pada periode 2019-2024, sehingga mencapai 0% dari jumlah kursi yang ada.",
        deskripsiPartai:
            "Partai Garuda Perubahan Indonesia (Garuda) adalah partai politik relatif baru yang didirikan pada tahun 2015 dan berpartisipasi dalam pemilihan umum tahun 2019. Dengan menekankan motto dibangun oleh para pemuda, Partai Garuda memposisikan dirinya sebagai wadah bagi mayoritas generasi muda yang ingin berkontribusi pada pembangunan nasional dan diwakili dalam pengambilan keputusan politik.",
        tokohPartai1: "Ahmad Ridha Sabana",
        ketTokohPartai1:
            "Ahmad adalah Ketua Partai Garuda saat ini, menjabat sejak 2015. Dia aktif terlibat dalam Komite Pemuda Indonesia Pusat (KNPI). Dia merupakan adik dari Ahmad Riza Patria, yang menjabat sebagai Wakil Gubernur Jakarta dari 2020 hingga 2022. Pada tahun 2014, Ahmad mencalonkan diri sebagai calon anggota Dewan Perwakilan Rakyat Daerah (DPRD) DKI Jakarta, mewakili Partai Gerindra.",
        tokohPartai2: "",
        ketTokohPartai2: "",
        faktaMenarik:
            "Struktur Partai Garuda didominasi oleh generasi milenial dan Gen-Z, menduduki sekitar 80% dari keanggotannya. Statistik ini konsisten dengan citra partai yang mengusung semangat pemuda yang ingin dibentuk olehnya.",
    },
    {
        id: 10,
        eventKey: 9,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo12Pan,
        namaPartai: "Partai Amanat Nasional (PAN)",
        rekamJejak:
            "Partai Amanat Nasional (PAN) didirikan pada tahun 1998 dan saat ini dipimpin oleh Zulkifli Hasan. Dalam pemilu, partai ini menempati urutan No.12 berdasarkan KPU dan berhasil meraih 44 kursi anggota DPR pada periode 2019-2024, mencapai 7,7% dari jumlah kursi yang tersedia.",
        deskripsiPartai:
            "Partai Amanat Nasional (PAN) didirikan oleh Amien Rais, seorang reformis demokratis, pada tahun 1998, meskipun kemudian beliau keluar dan mendirikan Partai Ummat. Menurut ilmuwan politik Ahmad Najib Burhani, PAN secara tidak resmi berafiliasi dengan Muhammadiyah, salah satu organisasi Muslim terbesar dan tertua di Indonesia. PAN unik karena menjadi satu-satunya partai berbasis Islam yang memiliki perwakilan di DPW Papua dan mensponsori beberapa calon DPD Kristen pada pemilihan legislatif mendatang. Saat ini, PAN terlibat dalam persaingan dengan Partai berbasis Islam yang baru, yaitu Partai Ummat, untuk mendapatkan dukungan dari demografis Muslim urban kelas menengah. Pada umumnya, PAN digambarkan oleh Kompas sebagai partai Muslim nasionalis yang berupaya mempromosikan prinsip inklusif dan nasionalis sambil tetap menjunjung tinggi Pancasila.",
        tokohPartai1: "Zulkifli Hasan",
        ketTokohPartai1:
            "Menteri Perdagangan Zulkifli Hasan menjabat sebagai Ketua Umum PAN, dan sebelumnya sering mewakili PAN di berbagai tingkatan pemerintahan. Pada tanggal 9 Juni 2023, Zulkifli mengambil langkah untuk memusnahkan sitaan impor ilegal bahan pokok senilai Rp 13,3 miliar, bertujuan untuk mendukung dan melindungi usaha kecil dan menengah (UKM). Meskipun demikian, Hasan tidak lepas dari kontroversi. Saat menjabat sebagai Menteri Kehutanan, ia mendapat banyak kritikan karena melepaskan dan menjual 1,64 juta hektar wilayah hutan untuk kepentingan bisnis.",
        tokohPartai2: "Hatta Rajasa",
        ketTokohPartai2:
            "Kader senior PAN, Hatta Rajasa, sebelumnya menjabat sebagai Menteri Koordinator Bidang Perekonomian (2009-2014), Menteri Perhubungan (2004-2007), dan Menteri Riset dan Teknologi (2001-2004). Masa jabatannya sebagai Menteri Perhubungan ditandai oleh beberapa tragedi transportasi, seperti kecelakaan Garuda Indonesia Penerbangan 200 dan hilangnya Adam Air 574. Meskipun demikian, mengutip dari website Kemenko Perekonomian RI, banyak yang memuji kinerjanya sebagai Menteri Koordinator Bidang Perekonomian karena berhasil memperkuat ekonomi Indonesia dan memperkokoh hubungan perdagangan bilateral.",
        faktaMenarik:
            "Pendiri PAN, Amien Rais, meninggalkan PAN pada tahun 2020 untuk mendirikan partai baru, Partai Ummat, setelah adanya konflik internal akibat kritikannya terhadap pemerintahan Jokowi (PAN adalah bagian dari koalisi Jokowi). Hanafi Rais, putra dari Amien Rais, juga meninggalkan partai tersebut dan mengundurkan diri dari jabatannya sebagai anggota legislatif dan Ketua PAN di Dewan Perwakilan Rakyat.",
    },
    {
        id: 11,
        eventKey: 10,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo13Pbb,
        namaPartai: "Partai Bulan Bintang (PBB)",
        rekamJejak:
            "Partai Bulan Bintang (PBB) didirikan pada tahun 1999 dan saat ini dipimpin oleh Yusril Ihza Mahendra. Dalam pemilu, partai ini menempati urutan No.13 berdasarkan KPU dan tidak memperoleh kursi anggota DPR pada periode 2019-2024.",
        deskripsiPartai:
            "Sebagai Partai berbasis Islam yang terinspirasi oleh Masyumi di era Soekarno, Partai Bulan Bintang (PBB) memegang teguh prinsip universalitas nilai-nilai Islam dalam politik. Pendiriannya pada tahun 1999 mendapat dukungan kuat dari organisasi Islam di berbagai daerah di Indonesia, dan Pemilu Legislatif 2004 menjadi puncak kesuksesan PBB. Menurut Kompas, partai ini mengusung visi Indonesia yang berlandaskan Islam, di mana hukum dan regulasi melindungi agama Islam, umat Muslim, dan ulama yang, menurut mereka, selama ini merasa ditindas. Situs resmi PBB juga mencerminkan komitmen partai untuk mempromosikan nilai-nilai Islam dalam konteks politik nasional.",
        tokohPartai1: "Yusril Ihza Mahendra",
        ketTokohPartai1:
            "Dengan latar belakang pendidikan di bidang Hukum dan Studi Islam, Yusril adalah pendiri dan Ketua Partai Bulan Bintang (PBB). Karirnya mencakup jabatan sebagai Sekretaris Negara, anggota DPR, Menteri Hukum dan Perundang-Undangan, serta Menteri Hukum dan Hak Asasi Manusia di pemerintahan Megawati dan SBY. Sebelum terlibat dalam dunia politik, Yusril adalah seorang aktivis Reformasi. Saat ini, selain memimpin PBB, dia juga menjalankan kantor hukumnya dan berupaya memenangkan kursi dalam pemilihan legislatif tahun 2024.",
        tokohPartai2: "",
        ketTokohPartai2: "",
        faktaMenarik:
            "Aldi Taher, seorang artis yang memiliki gaya unik, mencoba mencalonkan diri sebagai perwakilan di Dewan Perwakilan Rakyat (DPR) mewakili partai PBB dan Perindo. Wawancaranya di TvOne menjadi terkenal sebagai meme karena memberikan jawaban-jawaban yang unik ketika ditanya tentang isu-isu penting.",
    },
    {
        id: 12,
        eventKey: 11,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo14Demokrat,
        namaPartai: "Partai Demokrat",
        rekamJejak:
            "Partai Demokrat didirikan pada tahun 2001 dan saat ini dipimpin oleh Agus Harimurti Yudhoyono (AHY). Pada pemilihan umum, partai ini menempati urutan No.14 berdasarkan KPU dan berhasil memperoleh 54 kursi anggota DPR pada periode 2019-2024, yang setara dengan 9,4% dari jumlah kursi.",
        deskripsiPartai:
            "Partai Demokrat didirikan pada tahun 2001 oleh Susilo Bambang Yudhoyono (SBY), yang merupakan Presiden Indonesia pertama yang dipilih langsung oleh rakyat secara demokratis pada tahun 2004. Dengan visi mereformasikan institusi demokrasi Indonesia, New Mandala menyebut Demokrat sebagai partai tengah-kanan. Menurut ilmuwan politik Diego Fossati dan Carnegie Endowment, Demokrat adalah partai yang berbasis figur pemimpin (figur-centric) dan tidak memiliki ideologi yang konsisten. Partai Demokrat memiliki catatan dukungan terhadap kebijakan ekonomi yang cenderung liberal, pluralisme budaya, dan pentingnya kerjasama internasional bagi Indonesia.",
        tokohPartai1: "Agus Harimurti Yudhoyono (AHY)",
        ketTokohPartai1:
            "AHY adalah Ketua Umum Partai Demokrat saat ini, yang sebelumnya bertugas di TNI Angkatan Darat. Ia sempat mencalonkan diri sebagai Gubernur DKI Jakarta pada tahun 2017 tetapi kalah. Masih dalam proses mengembangkan citranya sebagai figur terpercaya, ia sering melakukan safari politik bersama tokoh-tokoh bangsa dari berbagai partai. AHY kerap mengkritik pemerintahan Jokowi yang menurutnya terlalu fokus pada infrastruktur dan kurang membantu rakyat kecil. AHY adalah putra dari pendiri Partai Demokrat dan mantan Presiden Susilo Bambang Yudhoyono (SBY).",
        tokohPartai2: "Susilo Bambang Yudhoyono (SBY)",
        ketTokohPartai2:
            "SBY adalah Presiden Indonesia pertama yang dipilih langsung oleh rakyat secara demokratis. Menjabat dari tahun 2004 hingga 2014, ia memulai karirnya di militer dan kemudian menjabat sebagai Menteri Pertambangan dan Energi, serta Menteri Koordinator Bidang Politik dan Keamanan di era Presiden Megawati. Di bawah kepemimpinannya, PDB Indonesia mengalami pertumbuhan sebesar 300%, Komisi Pemberantasan Korupsi (KPK) diberikan kewenangan untuk menginvestigasi kasus korupsi di kalangan elit, dan Indonesia memperkuat statusnya sebagai negara berpengaruh di Asia Tenggara.",
        faktaMenarik:
            "Ketua Umum Partai Demokrat, Agus Harimurti Yudhoyono (AHY), dan Kepala Staf Kepresidenan, Moeldoko, sempat terlibat persaingan posisi pada tahun 2021, yang hampir merusak nama baik Partai Demokrat. Sebagai Panglima TNI di masa kepresidenan Yudhoyono, Moeldoko dianggap sebagai pengkhianat oleh Demokrat karena mencoba mengklaim kemenangan dalam Kongres Luar Biasa (KLB) Demokrat di Deli Serdang.",
    },
    {
        id: 13,
        eventKey: 12,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo15Psi,
        namaPartai: "Partai Solidaritas Indonesia (PSI)",
        rekamJejak:
            "Partai Solidaritas Indonesia (PSI) didirikan pada tahun 2014 dan saat ini dipimpin oleh Kaesang Pangarep. Pada pemilihan umum, partai ini menempati urutan No.15 berdasarkan KPU dan tidak memperoleh kursi anggota DPR pada periode 2019-2024.",
        deskripsiPartai:
            "Partai Solidaritas Indonesia (PSI) adalah partai politik baru di Indonesia yang didirikan pada tahun 2014 dan dikenal sebagai 'partai milenial'. Dengan pendekatan tengah-kiri dan progresif, PSI aktif mendorong transparansi dan memberikan platform bagi suara kelompok minoritas. Sebagai partai yang mengutamakan kesetaraan gender, hampir setengah dari kader PSI adalah perempuan. Basis pendukung utamanya terdiri dari pemilih urban, terdidik, kelas menengah atas hingga atas. Meskipun fokus pada milenial dan Gen Z, beberapa pihak mempertanyakan sikap pro-milenial PSI, mengingat adanya elit dan konglomerat yang berperan di dalam dewan PSI.",
        tokohPartai1: "Kaesang Pangarep",
        ketTokohPartai1:
            "Putra bungsu Presiden Joko Widodo, Kaesang Pangarep, resmi dilantik sebagai Ketua Umum Partai Solidaritas Indonesia (PSI), menggantikan Giring Ganesha. Kaesang menyatakan bahwa ia telah mengenal teman-teman di PSI cukup lama dan memiliki kesamaan visi misi terkait peran penting generasi muda sebagai penerus bangsa. Pengamat politik Cecep Hidayat menilai keputusan Kaesang untuk tidak bergabung dengan PDIP memberi sinyal kuat bahwa Jokowi terlibat dalam politik dua kaki menjelang Pemilu 2024.",
        tokohPartai2: "Grace Natalie",
        ketTokohPartai2:
            "Grace Natalie adalah salah satu pendiri dan mantan Ketua Partai Solidaritas Indonesia (PSI). Sebelum terlibat dalam dunia politik, Grace Natalie memiliki latar belakang sebagai reporter dan jurnalis televisi. Sebelum mendirikan PSI, Grace pernah bergabung dengan lembaga survei Saiful Mujani Research and Consulting (SMRC). Ia dikenal karena sikap berani dalam menyuarakan pendapatnya terutama terkait isu-isu kontroversial, seperti argumen menentang praktik poligami.",
        faktaMenarik:
            "Dalam Partai Solidaritas Indonesia (PSI), anggota saling menyapa dengan sebutan 'bro' dan 'sis' sebagai strategi untuk menarik perhatian pemilih muda dan menciptakan lingkungan yang lebih inklusif, di mana hierarki tradisional yang berbasis usia dihapuskan. Pendekatan ini mencerminkan upaya PSI untuk membangun citra sebagai partai yang lebih progresif dan sesuai dengan nilai-nilai pemilih muda.",
    },
    {
        id: 14,
        eventKey: 13,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo16Perindo,
        namaPartai: "Partai Perindo",
        rekamJejak:
            "Partai Persatuan Indonesia (Perindo) didirikan pada tahun 2015 dan saat ini dipimpin oleh Hary Tanoesoedibjo. Pada pemilihan umum, partai ini menempati urutan No.16 berdasarkan KPU dan tidak memperoleh kursi anggota DPR pada periode 2019-2024.",
        deskripsiPartai:
            "Partai Persatuan Indonesia (Perindo) didirikan pada tahun 2014 oleh pengusaha media besar, Hary Tanoesoedibjo. Menurut penelitian ilmu komunikasi oleh Redi Panuju dan Kompas, fokus utama Perindo adalah menjaga keberagaman dan pluralitas Indonesia. Keunikan Perindo terletak pada kritikannya terhadap kapitalisme dan pasar bebas, yang dianggapnya kurang sesuai dengan kondisi pembangunan Indonesia saat ini. Meskipun tidak berhasil mencapai ambang batas parlemen pada tahun 2019, popularitas Perindo meningkat secara signifikan karena program-program pemberdayaan masyarakat di bidang bisnis, kesehatan, dan pendidikan. Menurut ilmuwan politik Ahmad Zaki Fadlur Rohman, Perindo mencerminkan munculnya model 'partai bisnis' di Indonesia, yang didominasi oleh kelas elit lama dan baru, cenderung mengambil langkah aman, dan tidak memiliki pendirian ideologi yang jelas.",
        tokohPartai1: "Hary Tanoesoedibjo",
        ketTokohPartai1:
            "Hary Tanoesoedibjo adalah pendiri dan Komisaris Media Nusantara Citra (MNC) Group, yang membuatnya menjadi orang terkaya ke-39 di Indonesia pada tahun 2022. Karir politiknya dimulai sebagai Wakil Ketua Majelis Nasional Partai NasDem pada tahun 2011, sebelum akhirnya pindah ke Hanura pada tahun 2012. Pada tahun 2023, Hary mengundurkan diri dari posisi CEO MNC Group untuk sepenuhnya berkomitmen sebagai Ketua Perindo.",
        tokohPartai2: "",
        ketTokohPartai2: "",
        faktaMenarik:
            "Hary Tanoesoedibjo bersama istri dan lima anaknya secara bersama-sama mendaftarkan diri sebagai calon legislatif (caleg) di tujuh Daerah Pemilihan (Dapil) yang berbeda melalui Partai Persatuan Indonesia (Perindo). Hary sendiri mendaftar di Dapil Banten III, sementara istri Liliana mendaftar di DKI Jakarta II. Anak-anaknya, yaitu Angela di Dapil Jawa Timur I, Valencia di DKI Jakarta III, Jessica di Nusa Tenggara Timur II, Clarissa di Jawa Barat I, dan Warren di Jawa Tengah I, juga ikut mendaftar sebagai caleg.",
    },
    {
        id: 15,
        eventKey: 14,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo17Ppp,
        namaPartai: "Partai Persatuan Pembangunan (PPP)",
        rekamJejak:
            "Partai Persatuan Pembangunan (PPP) didirikan pada tahun 1973 dan saat ini dipimpin oleh Muhammad Mardiono. Pada pemilihan umum, partai ini menempati urutan No.17 berdasarkan KPU dan memperoleh 19 kursi anggota DPR pada periode 2019-2024, mencapai 3,3% dari jumlah kursi yang ada.",
        deskripsiPartai:
            "Partai Persatuan Pembangunan (PPP) adalah partai Islam tertua di Indonesia, didirikan pada tahun 1973 sebagai hasil penggabungan paksa empat kelompok berbasis Islam pada masa Orde Baru. Menurut Carnegie Endowment, partai ini digambarkan sebagai partai konservatif Islam dan sayap kanan yang memiliki basis luas, menggabungkan nilai-nilai Islam dengan pembangunan sosial-ekonomi. Dilihat dari website resmi, visi dan tujuan PPP adalah untuk mewakili aspirasi komunitas Muslim Indonesia sambil tetap sejalan dengan prinsip-prinsip nasionalisme.",
        tokohPartai1: "Muhammad Mardiono",
        ketTokohPartai1:
            "Muhammad Mardiono adalah Ketua PPP saat ini. Sebagai kader PPP yang telah lama dikenal, ia pernah menjabat sebagai anggota Dewan Pertimbangan Presiden (Wantimpres) dari tahun 2019 hingga November 2022. Mardiono juga memiliki sejumlah perusahaan, termasuk layanan logistik dan peralatan militer.",
        tokohPartai2: "Sandiaga Uno",
        ketTokohPartai2:
            "Sandiaga Uno lebih dikenal sebagai pengusaha muda sukses sebelum terjun ke politik dan mencalonkan diri sebagai calon wakil presiden bersama Prabowo Subianto dalam pemilihan presiden 2019. Kampanye Sandiaga difokuskan pada pemberdayaan pengusaha muda dan usaha kecil menengah. Saat ini, ia menjabat sebagai Menteri Pariwisata dan Ekonomi Kreatif (awalnya sebagai kader Partai Gerindra sebelum keluar pada tahun 2023) dan pernah menjabat sebagai Wakil Gubernur Jakarta (juga sebagai kader Partai Gerindra). Dalam dunia bisnis, ia aktif di berbagai sektor, seperti industri energi, logam berharga, dan infrastruktur.",
        faktaMenarik:
            "PPP memulai perjalanan mereka dengan bangga menampilkan simbol Ka'bah - situs suci penting dalam agama Islam - sebagai logo mereka. Namun, kemudian mereka memutuskan untuk mengubah logo mereka menjadi bintang lima berwarna kuning emas. Saat ini, PPP kembali memutuskan untuk mengembalikan simbol ikonik Ka'bah, sejalan dengan ideologi mereka.",
    },
    {
        id: 16,
        eventKey: 15,
        sectionTokoh: "Tokoh Partai",
        sectionRekamJejak: "Rekam Jejak",
        image: PartaiNo24Ummat,
        namaPartai: "Partai Ummat (PU)",
        rekamJejak:
            "Partai Ummat (PU) didirikan pada tahun 2021 dan saat ini dipimpin oleh Ridho Rahmadi. Dalam pemilihan umum, partai ini menempati urutan No.24 menurut KPU dan tidak memperoleh kursi anggota DPR pada periode 2019-2024, sehingga mencapai 0% dari jumlah kursi yang ada.",
        deskripsiPartai:
            "Partai Ummat adalah partai politik berbasis Islam yang didirikan pada April 2021. Partai ini dibentuk oleh mantan kader Partai Amanat Nasional (PAN), Amien Rais, setelah mengalami perpecahan internal dengan kepemimpinan PAN (pelajari lebih lanjut di sini). Sejak pendiriannya, menurut ilmuwan politik Alexander Arifianto, Partai Ummat memposisikan dirinya sebagai partai Islam konservatif dengan nilai monoteisme Islam sebagai azas intinya.",
        tokohPartai1: "Ridho Rahmadi",
        ketTokohPartai1:
            "Ridho Rahmadi, yang saat ini menjabat sebagai Ketua Partai Ummat, adalah menantu termuda dari pendiri partai, Amien Rais. Sebelum menjadi ketua partai, Ridho adalah seorang dosen di Departemen Teknik Informatika Universitas Islam Indonesia. Menariknya, di usia 38 tahun, Ridho ditunjuk sebagai ketua partai dan menjadi salah seorang Ketua Umum partai politik termuda yang ikut Pemilu 2024.",
        tokohPartai2: "Amien Rais",
        ketTokohPartai2:
            "Amien Rais adalah pendiri Partai Ummat dan tokoh kunci dalam gerakan reformasi tahun 1998 yang mengakhiri rezim Orde Baru. Sebagai mantan ketua Muhammadiyah, ia juga mendirikan Partai Amanat Nasional (PAN), sebelum kemudian memutuskan untuk keluar dan mendirikan Partai Ummat. Amien Rais dikenal luas karena kritiknya yang tajam terhadap Presiden Jokowi.",
        faktaMenarik:
            "Kalau kita lihat secara visual, logo Partai Ummat terdapat bintang emas di tengah, persis seperti perisai di dada Garuda Pancasila. Ini adalah simbol dari sila pertama, yaitu 'Ketuhanan yang Maha Esa.' Sesuai dengan ideologi partainya, partai ini menerapkan politik identitas Islam untuk menarik pemilih.",
    },
];
// TODO| Partai End //

// TODO| IsuPage Start //
export const isuPage = [
    {
        id: 1,
        eventKey: 0,
        icon: IsuHam,
        judul: "Hak Asasi Manusia",
        LinkId: "#ham",
        deskripsi:
            "Isu Hak Asasi Manusia membahas perlindungan, penghormatan, dan penegakan hak-hak dasar individu. Dari kebebasan berekspresi hingga hak atas keadilan, isu ini memperjuangkan kesejahteraan manusia secara universal.",
        judulCalon1: "Anies Rasyid Baswedan",
        judulCalon2: "Prabowo Subianto",
        judulCalon3: "Ganjar Pranowo",
        tanggapanCalon1:
            "Anies menilai bahwa aparat penegak hukum belum bersikap adil, dan hanya berani memberikan tindakan tegas pada kelompok yang lemah, sementara kelompok yang kuat jarang mendapat perlakuan serupa.",
        tanggapanCalon2:
            "Menyelesaikan kasus-kasus pelanggaran HAM berat di masa lalu, seperti Trisakti, Semanggi, Tanjung Priok, Talangsari, Timor Leste, dan Papua, dengan membentuk tim ad hoc yang independen dan profesional, serta mengadili para pelaku di pengadilan HAM.",
        tanggapanCalon3:
            "Ganjar Pranowo menganggap isu HAM sebagai PR yang harus diselesaikan oleh pemerintah, dan berjanji untuk menuntaskan 12 kasus pelanggaran HAM berat yang sudah direkomendasikan oleh DPR jika terpilih sebagai presiden.",
    },
    {
        id: 2,
        eventKey: 1,
        icon: IsuHln,
        judul: "Hubungan Luar Negeri",
        LinkId: "hln",
        deskripsi:
            "Isu Hubungan Luar Negeri membicarakan interaksi, diplomasi, dan kerjasama antarnegara. Meliputi kerja sama perdagangan, keamanan global, serta hubungan politik antarbangsa untuk menjaga kestabilan dan kepentingan bersama.",
        judulCalon1: "Anies Rasyid Baswedan",
        judulCalon2: "Prabowo Subianto",
        judulCalon3: "Ganjar Pranowo",
        tanggapanCalon1:
            "Anies mengkritik politik luar negeri Indonesia yang bersifat transaksional, artinya Indonesia hanya bergerak ketika mendapat keuntungan investasi atau perdagangan, dan bukan sebagai tanggung jawab sebagai warga dunia. ",
        tanggapanCalon2:
            "Prabowo Subianto mengusung Kebijakan Bertetangga yang Baik atau Good Neighbor Policy sebagai arah dan strategi politik luar negri Indonesia jika ia terpilih menjadi presiden. Kebijakan ini berangkat dari tradisi gerakan non-blok yang selama ini dijalankan oleh Indonesia, yang independen dan tidak bergabung dengan blok geopolitik mana pun.",
        tanggapanCalon3:
            "Ganjar Pranowo memaparkan arah dan strategi politik luar negerinya jika ia terpilih menjadi Presiden RI 2024-2029. Secara umum, Ganjar menyebut, Kementerian Luar Negeri sebagai garda terdepan dalam hubungan luar negeri Indonesia dengan negara-negara di dunia. Bahkan, ia sempat memuji kepiawaian diplomat Indonesia.",
    },
    {
        id: 3,
        eventKey: 2,
        icon: IsuSda,
        judul: "Sumber Daya Alam",
        LinkId: "#sda",
        deskripsi:
            "Isu Sumber Daya Alam mengupas pemanfaatan, pelestarian, dan keberlanjutan sumber daya alam. Dari pengelolaan air hingga keberlanjutan energi, isu ini menyoroti pentingnya menjaga dan memanfaatkan sumber daya dengan bijak bagi masa depan yang berkelanjutan.",
        judulCalon1: "Anies Rasyid Baswedan",
        judulCalon2: "Prabowo Subianto",
        judulCalon3: "Ganjar Pranowo",
        tanggapanCalon1:
            " Anies menekankan outcome yang harus dicapai berupa pengembangan kualitas manusia yang merata, pemerataan akses ekonomi dan pengelolaan sumber daya alam berkelanjutan, peningkatan produktivitas dan kesejahteraan sosial, serta peningkatan kemudahan berbisnis dan investasi inklusif.",
        tanggapanCalon2:
            "Prabowo Subianto ingin menghentikan ekspor bahan mentah hasil sumber daya alam Indonesia, dan membuat pabrik-pabrik pengolahan yang akan meluaskan lapangan pekerjaan dan meningkatkan nilai tambah.",
        tanggapanCalon3:
            "Ganjar Pranowo, calon presiden 2024, menyoroti perlunya kajian ulang pola ekstraksi sumber daya alam (SDA) di Indonesia untuk memastikan kepatuhan aturan dan perlindungan lingkungan. Ganjar menekankan bahwa ekstraksi legal memiliki potensi positif terhadap lingkungan, dengan pengawasan dan proses yang baik.",
    },
    {
        id: 4,
        eventKey: 3,
        icon: IsuLp,
        judul: "Lapangan Pekerjaan",
        deskripsi:
            "Isu lapangan pekerjaan menjadi fokus saat ini, mencerminkan kekhawatiran masyarakat terhadap ketersediaan pekerjaan dan pertumbuhan ekonomi. Calon presiden dan wakil presiden diharapkan memberikan rencana konkret untuk meningkatkan lapangan kerja, dan mengurangi tingkat pengangguran.",
        judulCalon1: "Anies Rasyid Baswedan",
        judulCalon2: "Prabowo Subianto",
        judulCalon3: "Ganjar Pranowo",
        tanggapanCalon1:
            "Kita menginginkan dan merencanakan kota-kota di seluruh Indonesia minimal 14 kota menjadi mesin penggerak perekonomian yang memungkinkan bagi semua untuk bisa mendapatkan lapangan pekerjaan yang setara.",
        tanggapanCalon2:
            "Kita harus melanjutkan hilirisasi dan industrialisasi, menghentikan ekspor murah, serta mewajibkan pengolahan di Republik Indonesia. Bayangkan potensi jika kita memiliki pengolahan di Indonesia, seperti pabrik nikel dan smelter di Indonesia. Dengan adanya infrastruktur tersebut, dapat dibayangkan berapa ratus ribu pabrik dan perusahaan yang dapat dibangun di Indonesia. Hal ini menciptakan peluang pekerjaan bagi saudara-saudara sekalian, mahasiswa-mahasiswa, dan anak-anak kita.",
        tanggapanCalon3:
            "Bagaimana link and match ini betul-betul bisa dilakukan, termasuk menentukan kebutuhan tenaga kerja, spesifikasinya, dan kapan dibutuhkan. Seperti halnya perencanaan kebutuhan tenaga kerja, dapat dilakukan sejak awal. Enterpreneurship yang perlu dibangun hari ini, dan ruang itu harus segera dibuka.",
    },
];
// TODO| IsuPage End //

// TODO| FAQ Component Start //
export const faq = [
    {
        id: 1,
        eventKey: 0,
        title: "Bagaimana cara saya mendaftar untuk memilih dalam pemilu?",
        desc: "Proses pendaftaran untuk pemilih biasanya dilakukan melalui daftar pemilih tetap (DPT) yang dikelola oleh instansi terkait. Pastikan Anda terdaftar pada DPT untuk dapat memberikan suara.",
    },
    {
        id: 2,
        eventKey: 1,
        title: "Apa syarat yang diperlukan agar saya bisa memberikan suara?",
        desc: "Beberapa syarat umum termasuk memiliki KTP yang masih berlaku dan terdaftar dalam DPT. Pastikan Anda memenuhi syarat-syarat yang berlaku di wilayah Anda.",
    },
    {
        id: 3,
        eventKey: 2,
        title: "Apakah ada batasan usia untuk memilih dalam pemilu?",
        desc: "Ya, biasanya batasan usia untuk memberikan suara dalam pemilu adalah 17 tahun ke atas.",
    },
    {
        id: 4,
        eventKey: 3,
        title: "Apa yang harus saya lakukan jika tidak dapat memberikan suara secara langsung di tempat pemungutan suara pada hari pemilihan?",
        desc: "Anda dapat mempertimbangkan menggunakan hak pilih melalui sistem surat suara atau menggunakan mekanisme lain yang tersedia untuk memilih.",
    },
    {
        id: 5,
        eventKey: 4,
        title: "Apa yang harus saya bawa saat hari pemilihan?",
        desc: "Pastikan untuk membawa kartu identitas resmi yang sah seperti KTP, SIM, atau paspor yang masih berlaku pada hari pemilihan.",
    },
    {
        id: 6,
        eventKey: 5,
        title: "Bagaimana saya bisa mengetahui lokasi tempat pemungutan suara terdekat?",
        desc: " Informasi tentang lokasi tempat pemungutan suara dapat ditemukan melalui situs web resmi KPU.",
    },
    {
        id: 7,
        eventKey: 6,
        title: "Apa yang harus saya lakukan jika saya tidak terdaftar sebagai pemilih?",
        desc: "Anda dapat memeriksa status pendaftaran Anda di lembaga pemilihan setempat atau mendatangi kantor pemilihan untuk informasi lebih lanjut.",
    },
    {
        id: 8,
        eventKey: 7,
        title: "Apa yang harus dilakukan jika saya mengalami masalah teknis atau kebingungan saat memilih?",
        desc: "Anda dapat meminta bantuan petugas pemilihan di tempat pemungutan suara untuk bantuan teknis atau petunjuk lebih lanjut.",
    },
    {
        id: 9,
        eventKey: 8,
        title: "Apakah saya bisa memberikan suara jika saya terlambat datang ke tempat pemungutan suara?",
        desc: "Pemilih yang terlambat tetap berhak memberikan suara, namun, pastikan untuk datang sebelum waktu penutupan tempat pemungutan suara.",
    },
    {
        id: 10,
        eventKey: 9,
        title: "Apa itu Suarasa Pemilu?",
        desc: "Suarasa Pemilu adalah platform online yang bertujuan memberdayakan pemilih melalui informasi mendalam mengenai calon, isu-isu kunci, dan tahapan pemilihan. Kami berkomitmen untuk mendorong partisipasi aktif dalam proses demokrasi.",
    },
    {
        id: 11,
        eventKey: 10,
        title: "Bagaimana saya dapat menggunakan Suarasa Pemilu?",
        desc: "Untuk menggunakan Suarasa Pemilu, cukup kunjungi situs web kami dan jelajahi informasi terkini mengenai pemilihan, calon, serta sumber daya edukatif. Anda juga dapat berpartisipasi dalam jajak pendapat dan mendukung diskusi terbuka di komunitas pemilih.",
    },
    {
        id: 12,
        eventKey: 11,
        title: "Apakah Suarasa Pemilu hanya untuk pemilu tertentu?",
        desc: "Ya, Suarasa Pemilu dirancang untuk berfokus pemilihan umum di tingkat presiden dan wakil presiden saja. Kami berupaya memberikan informasi yang relevan untuk pemilihan agar pemilih dapat membuat keputusan terinformasi.",
    },
    {
        id: 13,
        eventKey: 12,
        title: "Bagaimana keamanan informasi saya di Suarasa Pemilu?",
        desc: "Kami menjaga keamanan informasi pengguna. Data pribadi Anda akan dikelola sesuai dengan kebijakan privasi kami. Kami tidak akan menyebarkan atau menjual informasi pribadi Anda kepada pihak ketiga tanpa izin.",
    },
    {
        id: 14,
        eventKey: 13,
        title: "Bagaimana cara berkontribusi di Suarasa Pemilu?",
        desc: "Anda dapat berkontribusi dengan berpartisipasi dalam laman Aspirasimu, menyumbangkan informasi yang relevan, atau berbagi pandangan Anda. Suarasa Pemilu memberikan ruang untuk setiap pemilih untuk bersuara dan berbagi pengalaman.",
    },
    {
        id: 15,
        eventKey: 14,
        title: "Apakah Suarasa Pemilu menyediakan informasi tentang semua calon?",
        desc: "Kami berupaya menyajikan informasi tentang calon presiden dan wakil presiden sebanyak mungkin , tetapi ketersediaan data tergantung pada ketersediaan informasi yang dapat diakses secara publik. Kami terus berusaha untuk memberikan liputan yang seimbang dan komprehensif.",
    },
    {
        id: 16,
        eventKey: 15,
        title: "Apakah Suarasa Pemilu menyediakan informasi tentang semua calon?",
        desc: "Kami berupaya menyajikan informasi tentang calon presiden dan wakil presiden sebanyak mungkin , tetapi ketersediaan data tergantung pada ketersediaan informasi yang dapat diakses secara publik. Kami terus berusaha untuk memberikan liputan yang seimbang dan komprehensif.",
    },
    {
        id: 17,
        eventKey: 16,
        title: "Apakah Suarasa Pemilu mendukung pemilihan di tingkat lokal?",
        desc: "Tidak, Suarasa Pemilu didesain untuk mendukung pemilihan hanya pada tingkat pemilihan presiden dan wakil presiden, tidak termasuk pemilihan lokal. Kami mengakui memiliki keterbatasan informasi dan waktu dalam pemilihan tingkat lokal.",
    },
    {
        id: 18,
        eventKey: 17,
        title: "Apakah Suarasa Pemilu terbuka untuk kolaborasi atau mitra?",
        desc: "Kami selalu terbuka untuk kolaborasi dan mitra yang dapat memperkuat misi kami untuk meningkatkan partisipasi pemilih dan memberikan informasi yang berkualitas. Jika Anda tertarik bekerja sama, dapat mengklik bagian Partnership di laman Homepage, atau silakan hubungi tim kami di kolaborasi@suarasapemilu.com.",
    },
    {
        id: 19,
        eventKey: 18,
        title: "Bagaimana cara memberikan umpan balik atau melaporkan masalah di Suarasa Pemilu?",
        desc: "Kami menghargai umpan balik dari pengguna. Untuk memberikan umpan balik atau melaporkan masalah, silakan gunakan laman Aspirasimu di situs web atau kirim email ke feedback@suarasapemilu.com. Kami akan dengan senang hati menerima kontribusi Anda untuk meningkatkan platform kami.",
    },
    {
        id: 20,
        eventKey: 19,
        title: "Bagaimana cara Suarasa Pemilu memastikan akurasi informasi yang disediakan?",
        desc: "Kami melakukan upaya maksimal untuk memastikan akurasi informasi yang disediakan di Suarasa Pemilu. Kami mengandalkan sumber-sumber yang dapat dipercaya dan terus memperbarui konten kami untuk mencerminkan perkembangan terkini.",
    },
];
// TODO| FAQ Component End //
