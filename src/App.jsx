import "./App.css";
import Body from "./Components/Body/Body";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Header";
import Landing from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <br />
      <Body
        l1={"Akses yang Mudah & Cepat"}
        l2={"Tampilan Modern & User-Friendly"}
        l3={"Pelayanan 24jam"}
        l4={"Tenaga Ahli Mumpuni"}
        l5={"Hemat Biaya Operasional"}
      />

      <div className="card-wrapper">
        <Card
          title={"Pelayanan"}
          benefit1={"🩺 Konsultasi Dokter Online"}
          benefit2={"💊 Pemesanan Obat Cepat"}
          benefit3={"📄 Informasi Kesehatan Terpercaya"}
          benefit4={"🧑‍🤝‍🧑 Komunitas & Dukungan"}
        />
        <Card
          title={"Jaminan"}
          benefit1={"👍 Akan Ganti Kerugian Jika Ada Kesalahan"}
          benefit2={"👍 Pengiriman Obat Cepat"}
          benefit3={"👍 Gratis Saat Konsultasi"}
          benefit4={"👍 Konsultasi Dengan Dokter Ahli"}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
