import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// Tools imports
import ToolsVscode from "/assets/tools/vscode.png";
import ToolsAntigravity from "/assets/tools/antigravity.png";
import ToolsReact from "/assets/tools/reactjs.png";
import ToolsLaravel from "/assets/tools/laravel.png";
import ToolsNext from "/assets/tools/nextjs.png";
import ToolsTailwind from "/assets/tools/tailwind.png";
import ToolsJs from "/assets/tools/js.png";
import ToolsJava from "/assets/tools/java.png";
import ToolsPhp from "/assets/tools/php.png";
import ToolsHtml from "/assets/tools/html.png";
import ToolsCss from "/assets/tools/css.png";
import ToolsVite from "/assets/tools/vite.png";
import ToolsMysql from "/assets/tools/mysql.png";
import ToolsMongodb from "/assets/tools/mongodb.png";
import ToolsFirebase from "/assets/tools/firebase.png";
import ToolsFigma from "/assets/tools/figma.png";
import ToolsGithub from "/assets/tools/github.png";
import ToolsNodejs from "/assets/tools/nodejs.png";
import ToolsCanva from "/assets/tools/canva.png";
import ToolsFlutter from "/assets/tools/flutter.png";



export const listTools = [
  {
    id: 1,
    gambar: ToolsVscode,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: ToolsAntigravity,
    nama: "Antigravity",
    ket: "AI Code Editor",
    dad: "200",
  },
  {
    id: 3,
    gambar: ToolsReact,
    nama: "React JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: ToolsLaravel,
    nama: "Laravel",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: ToolsNext,
    nama: "Next JS",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: ToolsTailwind,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: ToolsJs,
    nama: "JavaScript",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: ToolsJava,
    nama: "Java",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: ToolsPhp,
    nama: "PHP",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: ToolsHtml,
    nama: "HTML",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: ToolsCss,
    nama: "CSS",
    ket: "Language",
    dad: "1100",
  },
  {
    id: 12,
    gambar: ToolsVite,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1200",
  },
  {
    id: 13,
    gambar: ToolsMysql,
    nama: "MySQL",
    ket: "Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: ToolsMongodb,
    nama: "MongoDB",
    ket: "Database",
    dad: "1400",
  },
  {
    id: 15,
    gambar: ToolsFirebase,
    nama: "Firebase",
    ket: "Backend Service",
    dad: "1500",
  },
  {
    id: 16,
    gambar: ToolsFigma,
    nama: "Figma",
    ket: "Design Tool",
    dad: "1600",
  },
  {
    id: 17,
    gambar: ToolsGithub,
    nama: "GitHub",
    ket: "Version Control",
    dad: "1700",
  },
  {
    id: 18,
    gambar: ToolsNodejs,
    nama: "Node JS",
    ket: "Runtime",
    dad: "1800",
  },
  {
    id: 19,
    gambar: ToolsCanva,
    nama: "Canva",
    ket: "Design Tool",
    dad: "1900",
  },
  {
    id: 20,
    gambar: ToolsFlutter,
    nama: "Flutter",
    ket: "Framework",
    dad: "2000",
  },
];


import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "SmartTani",
    subtitle: "Penyiraman Otomatis Berbasis IoT dengan Mobile Apps",
    fullDescription: "SmartTani adalah sistem penyiraman tanaman otomatis berbasis Internet of Things (IoT) yang terintegrasi dengan aplikasi mobile. Proyek ini dikembangkan dalam program MBKM Pemberdayaan Masyarakat oleh Mahasiswa. Sistem ini memungkinkan petani untuk memantau dan mengontrol penyiraman tanaman secara otomatis melalui smartphone, meningkatkan efisiensi penggunaan air dan produktivitas pertanian.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/WaySTN/Smart_Tani_IoT",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Apps AksaraPeduli",
    subtitle: "Platform Donasi Pendidikan Berbasis Mobile Apps",
    fullDescription: "AksaraPeduli Mobile adalah aplikasi mobile platform donasi yang berfokus pada sektor pendidikan, mendukung pencapaian SDGs No. 4 (Quality Education). Aplikasi ini menyediakan fitur-fitur untuk mempermudah proses donasi, melacak dampak kontribusi, dan menghubungkan donatur dengan penerima manfaat di bidang pendidikan.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/WaySTN/pemmob_semeru_aksarapeduli",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Web AksaraPeduli",
    subtitle: "Platform Donasi Web untuk Pendidikan",
    fullDescription: "AksaraPeduli Web adalah sebuah platform donasi berbasis website yang berfokus pada sektor pendidikan, mendukung pencapaian Sustainable Development Goals (SDGs) No. 4 yaitu Quality Education. Platform ini menyediakan antarmuka yang user-friendly untuk memfasilitasi proses donasi dan transparansi dalam pengelolaan dana pendidikan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/farrelega/AksaraPeduli",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "SITANDES Kampunganyar",
    subtitle: "Sistem Peminjaman Alat Pertanian Desa",
    fullDescription: "SITANDES (Sistem Peminjaman Alat Pertanian Desa) adalah aplikasi mobile yang dikembangkan untuk Desa Kampunganyar, Banyuwangi. Proyek ini merupakan bagian dari program MBKM Pemberdayaan Masyarakat oleh Mahasiswa. Aplikasi ini membantu masyarakat desa untuk mengelola peminjaman alat-alat pertanian secara digital, meningkatkan efisiensi dan transparansi dalam pengelolaan aset pertanian desa.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/WaySTN/sitandes_kampunganyar",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Web Talent Market",
    subtitle: "Ekosistem Rekrutmen Digital PT Konsulta Semen Gresik",
    fullDescription: "Talent Market adalah sebuah platform web yang menjadi solusi ekosistem rekrutmen digital untuk PT Konsulta Semen Gresik. Platform ini menyediakan fitur-fitur untuk mengelola proses rekrutmen secara efisien, mulai dari posting lowongan, screening kandidat, hingga manajemen talent pool. Sistem ini dirancang untuk mengoptimalkan proses pencarian dan pengelolaan talenta perusahaan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/muhrohman/fe_talent_marketplace",
    dad: "500",
  },
];
