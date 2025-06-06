import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import "./../css/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Hero image={"./images/About-US.jpg"}></Hero>
        <header className="hero-section">
          <div className="container">
            <h1 style={{ color: "black" }}>Tentang Kami</h1>
            <p style={{ color: "black" }}>
              Website ini menyajikan informasi rekomendasi tempat makan dengan
              rating tinggi di wilayah Jabodetabek. Mulai dari jajanan street
              food legendaris di Jakarta, hingga cafe-cafe estetik dan nyaman di
              Tangerang—semuanya dipilih berdasarkan kualitas, pengalaman
              pengunjung, dan daya tarik visualnya.
            </p>
          </div>
        </header>

        <section className="stats-section">
          <h2>Honorable Mention</h2>
          <div className="sub-text">
            Website ini dikembangkan sebagai bagian dari pemenuhan Projek UAS
            mata kuliah Pemograman Web Dasar oleh Farrel dan Mecca Mahasiswa/i
            Program Studi Teknik Informatika, Politeknik Negeri Jakarta.
          </div>
        </section>

        <section className="image-grid">
          <div className="grid-item">
            <img src="./images/logotik.jpg" alt="logo tik" />
            <p className="card-title">
              Jurusan Teknik Informatika dan Komputer
            </p>
          </div>
          <div className="card">
            <img
              src="./images/logopnj.jpg"
              alt="logo pnj"
              className="logo-img"
            />
            <img
              src="./images/pelataran-pnj.jpg"
              alt="pelataran pnj"
              className="kampus-img"
            />
            <p className="card-title">Politeknik Negeri Jakarta</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
