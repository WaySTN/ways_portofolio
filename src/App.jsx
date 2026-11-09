import { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import ErrorBoundary from "./components/ErrorBoundary";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./components/Services";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Tools from "./components/Tools";
import AboutContent from "./components/AboutContent";
AOS.init();

function App() {

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  // Removed reload redirect - no longer needed with base: "/"



  return (
    <>
      <ErrorBoundary fallback={<div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />}>
        <div className="absolute top-0 left-0 w-full h-full -z-10 ">
          <Aurora
            colorStops={["#577870", "#1F97A6", "#127B99"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      </ErrorBoundary>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/wahyu2.png" className="w-10 rounded-md" />
              <q>Build, Learn, Learn and Repeat!</q>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Wahyu Setiawan" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="Software Engineer building web and mobile applications, integrating APIs, and creating practical digital solutions for real users."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex flex-wrap items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV_Wahyu_Setiawan.pdf"
                download="Wahyu_Setiawan_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-3 px-4 sm:p-4 sm:px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors text-sm sm:text-base"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-3 px-4 sm:p-4 sm:px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors text-sm sm:text-base">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Wahyu Setiawan"
              title="Software Engineer"
              handle="wakzuuu"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/wahyu.png"
              miniAvatarUrl="./assets/wahyu1.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open('https://wa.me/6283834954405', '_blank')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-2 sm:px-8">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <AboutContent />
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <ErrorBoundary fallback={<div className="w-full h-64 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">3D element unavailable</div>}>
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </ErrorBoundary>
            </div>
          </div>

        </div>

        <Experience />

        {/* Layanan / Services */}
        <Services />

        <Tools />
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-sm sm:text-base/loose text-center opacity-50 px-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


        <p className="mt-6 text-center text-sm text-zinc-400">More projects coming soon.</p>

        <Achievements />
        <Training />

        <Contact />
      </main >

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
