const http = require("http");
const port = 3000;

const pantun = [
  "Si Anda bernyanyi dengan kecapi,Sambil bernyanyi, ia menari sebisanya. | Siapa orang yang tidak akan tertawa hati,Disangka waras eh ternyata orang gila.",
  "Jalan-jalan ke kebun rawa,Jika capai, duduklah di pohon asem. | Geli hati ini menahan tawa,Melihat kepala adik terjepit helm.",
  "Hujan gerimis mengguyur-guyur,Tak jua reda meski sudah jam satu. | Jangan kau menangis-nangis di atas kasur,Nanti kasurnya jadi rumah kutu.",
  "Anjing bermain dengan tali,Kera duduk membaca koran. | Bagaimana hati tak geli, Kepala botak suka sisiran.",
  "Berenang jauh para ikan,Mereka bebas hatinya senang. | Badan kurus kurang makan, Kalau ditiup goyang-goyang.",
  "Pak Markum sarapan pagi,Makan roti dengan bubur | Makan roti dengan bubur, Kita riang, hati bersyukur.",
  "Orang menganyam sambil duduk, Kalau sudah bawa ke balai.| Melihat ayam memakai tanduk, Datang musang meminta berdamai. ",
  "Kalau ketam datang ke rawa, Lintah turun ke dalam kali. | Kalau monyet sedang tertawa, Mukanya jelas lucu sekali",
  "Asam kandis asam jawa, Satu peti di dalam kereta | Jikalau nenek sudah tua, Hati atuk tetaplah cinta ",
  "Disini kosong di sana kosong, Tidak terdapat batang tembakau | Bukannya aku berkata bohong, Ada katak memikul kerbau",
  "Ikan gabus di rawa-rawa, Ikan belut nyangkut di jaring | Ikan belut nyangkut di jaring, Gigi palsu loncat ke piring",
  "Sayur yang busuk harus dibuang, Lalu ambil dua siung bawang | Seandainya teman seperti uang, Palsu aslinya cukup diterawang.",
  "Hari Minggu pergi ke pasar, Di tengah jalan bertemu kancil | Persahabatan bukan sebuah hal besar, Tetapi tentang jutaan hal kecil",
  "Ke hutan cari kayu bakar,Jauh berjalan sampai petang | Sudah lama tak dengar kabar, Pas berkabar, mau berutang ",
  "Tujuh belasan ada pawai, Semua nonton ramai-ramai | Kemana saja bawa gawai, Tapi selalu tanya password Wi-Fi.",
  "Ada lomba makan kerupuk,Minum susu bikin badan sehat |Siapa bilang pacarku gemuk? Itu supaya lebih gampang dilihat",
  "Ada drama Korea judulnya Dong-Yi, Nonton sambil minum teh dan gula | Cinta mestinya seperti shampoo bayi, Yang mengandung “no tears” formula",
  "Ada seekor lebah madu, Hinggap di pohon akasia. | Sekolah itu seperti candu, Kalau tidak mahal biayanya.",
  "Tiap pagi minum jamu, Jamu pahit dibawa tamu | Selalu Ikuti kata hatimu,Jangan lupa bawa otakmu",
  "Main di pantai nemu kerang, Main di taman metik tabebuya | Buat apa mikirin omongan orang, Orangnya tak ingat omongannya",
  "Pergi berenang ke laut dalam,Bunga kertas dihinggapi kupu. | Jika tak baik makan tengah malam, Kenapa kulkas punya lampu?",
  "Rumah kantor disingkat rukan, Di depannya anak main gasing | Andai olahraga semudah makan, Sekarang pasti aku sudah langsing",
  "Nonton tivi acara Si Unyil,Nontonnya sambil rebahan. | Kenangan indah masa kecil,Tidak pernah terima tagihan",
  "Di dahan pohon cempaka,Hinggap seekor burung kutilang. | Meski tak jago matematika,Aku jagoan menghitung uang.",
  "Beli buah di pasar Jakarta,Tidak lupa beli tomat |Jadi orang jangan sering lupa,Karena lupa itu tidak ingat",
  "Hari Minggu pergi berenang,Berenangnya bareng teman-teman | Kepala akan jadi pusing,Kalau belum dapat gaji bulanan",
  "Makan lele pakai sambal terik,Jangan lupa dengan lalapan | Hati akan terasa sepi,Kalau tidak ada pasangan",
  "Pergi ke stasiun Tebet,Dilanjut lagi ke Tanah Abang | Siapa yang tidak takut,Melihat kecoa terbang",
  "Pulang sekolah bermain layang-layang,Mainnya bersama-sama | Pikiran akan bingung,Ketika melihat katak berbicara",
];

const requestHandler = (request, response) => {
  const randomIndex = Math.floor(Math.random() * pantun.length);
  response.end(pantun[randomIndex]);
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`API pantun running on port ${port}`);
});
