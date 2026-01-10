import "./Landing.css";
import gambar1 from "../img/medicine.svg";

function Landing() {
  return (
    <div class="hero">
      <div class="hero-left">
        <h2 class="hero-title">Informasi Kesehatan</h2>
        <p class="hero-desc">
          Mau membaca artikel Kesehatan terbaru? Yuk, lihar artikel seputar
          Kesehatan di Medconnect
        </p>
        <button class="hero-button">Selengkapnya</button>
      </div>
      <div class="hero-right">
        <img src={gambar1} alt="programer" class="hero-image" />
      </div>
    </div>
  );
}

export default Landing;
