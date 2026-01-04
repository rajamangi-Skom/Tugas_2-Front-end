import "./App.css";
import AboutMe from "./components/Body/Body";
import ListNamaDoctor from "./components/Body/Doctor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <h1> 👨‍⚕️👩‍⚕️Daftar Dokter dan Spesialis</h1>
      <ListNamaDoctor name="Mamat Sedan" spesialis="Organ Dalam" />
      <ListNamaDoctor name="Reza Alkuah" spesialis="Organ Luar" />
      <ListNamaDoctor name="Ida Nurjaman" spesialis="Kandungan" />
      <hr />
 <Footer nama = "Raja" />
    </>
  );
}

export default App;
