import Navbar from "../components/Navbar/Navbar";
import CategorySection from "../components/CategorySection/CategorySection";
import "./../css/Culinaries.css";
import kategori from "../konten/kategori";
import { useEffect, useState } from "react";

const Culinaries = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(kategori.kategori);
  }, [categories]);

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="culinaries-container">
          {
            categories.map((item, index) => {
              return (
                <CategorySection
                  key={index}
                  title={item.nama}
                  slug={item.slug}
                />
              )
            })
          }
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Culinaries;
