import "./Body.css";

const Body = ({ l1, l2, l3,l4,l5 }) => {
  return (
    <>
      <div className="tentangkami">Tentang Kami</div>
      <article>
        <div className="container">
          <p style={{ textAlign: "justify" }}>
            Kami adalah platform layanan kesehatan online yang menyediakan
            solusi cepat, aman, dan terpercaya bagi masyarakat. Dengan dukungan
            tenaga medis profesional, kami berkomitmen memberikan layanan
            konsultasi dan pemesanan obat secara efisien, akurat, dan
            terjangkau. Visi kami adalah menghadirkan layanan kesehatan digital
            yang mudah diakses oleh siapa pun, di mana pun, dengan kualitas
            terbaik dan sentuhan empati manusia. Melalui platform ini, kami
            ingin memastikan setiap orang dapat memperoleh informasi kesehatan
            yang tepat, layanan medis yang responsif, serta akses terhadap
            kebutuhan obat tanpa harus mengalami proses yang rumit. Selain itu,
            kami juga terus meningkatkan kualitas layanan dengan memanfaatkan
            teknologi modern, sistem keamanan data yang terjamin, dan standar
            operasional yang mengikuti regulasi kesehatan. Dengan mengutamakan
            kenyamanan pengguna, kami membuka kesempatan bagi masyarakat untuk
            mendapatkan layanan kesehatan secara lebih fleksibel, hemat waktu,
            dan tetap terpercaya. Kami percaya bahwa kesehatan adalah hak setiap
            orang, dan melalui inovasi digital, kami hadir untuk mendekatkan
            layanan tersebut ke tangan Anda.
          </p>
        </div>
        <aside>
          <h2>Visi</h2>
          <p>
            “Mewujudkan kemudahan dalam melayani dan konsultasi kesehatan dengan
            tenaga ahli yang mumpuni.”
          </p>
          <br />
          <h2>Keunggulan</h2>
          <ul>
            <li>{l1}</li>
            <li>{l2}</li>
            <li>{l3}</li>
            <li>{l4}</li>
            <li>{l5}</li>
          </ul>
        </aside>
      </article>
    </>
  );
};
export default Body;
