import Navbar from "../components/Navbar/Navbar";
//import Footer from "../components/Footer/Footer";
//import RestaurantCard from "../components/RestoCard/RestoCard";
import CategorySection from "../components/CategorySection/CategorySection";
import "./../css/Culinaries.css";

const jakarta = [
  {
    image: "public/images/sate-sabang.jpg",
    nama_lokasi: "Sate Sabang Pak Heri",
    rating: 4,
    lokasi: "Jalan Sabang, Jakarta Pusat",
  },
  {
    image: "public/images/sate-sabang.jpg",
    nama_lokasi: "Sate Sabang Pak Heri",
    rating: 4,
    lokasi: "Jalan Sabang, Jakarta Pusat",
  },
  {
    image: "public/images/sate-sabang.jpg",
    nama_lokasi: "Sate Sabang Pak Heri",
    rating: 4,
    lokasi: "Jalan Sabang, Jakarta Pusat",
  },
  {
    image: "public/images/sate-sabang.jpg",
    nama_lokasi: "Sate Sabang Pak Heri",
    rating: 4,
    lokasi: "Jalan Sabang, Jakarta Pusat",
  },
];

const bogor = [
  {
    image: "public/images/bumi-aki-puncak.jpg",
    nama_lokasi: "RM Bumi Aki Puncak",
    rating: 4,
    lokasi: "Jalan Raya Puncak Ciloto, Bogor",
  },
  {
    image: "public/images/bumi-aki-puncak.jpg",
    nama_lokasi: "RM Bumi Aki Puncak",
    rating: 4,
    lokasi: "Jalan Raya Puncak Ciloto, Bogor",
  },
  {
    image: "public/images/bumi-aki-puncak.jpg",
    nama_lokasi: "RM Bumi Aki Puncak",
    rating: 4,
    lokasi: "Jalan Raya Puncak Ciloto, Bogor",
  },
  {
    image: "public/images/bumi-aki-puncak.jpg",
    nama_lokasi: "RM Bumi Aki Puncak",
    rating: 4,
    lokasi: "Jalan Raya Puncak Ciloto, Bogor",
  },
];

const tangerang = [
  {
    image: "public/images/december-cafe.jpg",
    nama_lokasi: "December Coffee",
    rating: 4,
    lokasi: "Jl. Ir.Sukarno No.6, Cihuni, Kec. Pagedangan, Kabupaten Tangerang",
  },
  {
    image: "public/images/december-cafe.jpg",
    nama_lokasi: "December Coffee",
    rating: 4,
    lokasi: "Jl. Ir.Sukarno No.6, Cihuni, Kec. Pagedangan, Kabupaten Tangerang",
  },
  {
    image: "public/images/december-cafe.jpg",
    nama_lokasi: "December Coffee",
    rating: 4,
    lokasi: "Jl. Ir.Sukarno No.6, Cihuni, Kec. Pagedangan, Kabupaten Tangerang",
  },
  {
    image: "public/images/december-cafe.jpg",
    nama_lokasi: "December Coffee",
    rating: 4,
    lokasi: "Jl. Ir.Sukarno No.6, Cihuni, Kec. Pagedangan, Kabupaten Tangerang",
  },
];

const depok = [
  {
    image: "public/images/sedjuk.jpg",
    nama_lokasi: "Sedjuk Bakmi & Kopi",
    rating: 4,
    lokasi: "Jl. Madrasah 1 No.52, Gandul, Kec. Cinere, Kota Depok",
  },
  {
    image: "public/images/sedjuk.jpg",
    nama_lokasi: "Sedjuk Bakmi & Kopi",
    rating: 4,
    lokasi: "Jl. Madrasah 1 No.52, Gandul, Kec. Cinere, Kota Depok",
  },
  {
    image: "public/images/sedjuk.jpg",
    nama_lokasi: "Sedjuk Bakmi & Kopi",
    rating: 4,
    lokasi: "Jl. Madrasah 1 No.52, Gandul, Kec. Cinere, Kota Depok",
  },
  {
    image: "public/images/sedjuk.jpg",
    nama_lokasi: "Sedjuk Bakmi & Kopi",
    rating: 4,
    lokasi: "Jl. Madrasah 1 No.52, Gandul, Kec. Cinere, Kota Depok",
  },
];

const Culinaries = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="culinaries-container">
          <CategorySection
            title="Street Food Legendaris di Jakarta"
            restaurants={jakarta}
          />
          <CategorySection
            title="Kuliner Keluarga di Bogor"
            restaurants={bogor}
          />
          <CategorySection
            title="Cafe Hits di Tangerang"
            restaurants={tangerang}
          />
          <CategorySection
            title="Spot Makan Populer di Depok"
            restaurants={depok}
          />
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Culinaries;
