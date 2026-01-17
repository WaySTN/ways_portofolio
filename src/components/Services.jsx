import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaPalette } from 'react-icons/fa';

const services = [
    {
        id: 1,
        title: "Web Development",
        desc: "Developing responsive web applications with modern technologies like HTML, CSS, JavaScript, React, and Laravel.",
        icon: <FaLaptopCode className="text-4xl text-violet-500" />
    },
    {
        id: 2,
        title: "Mobile Development",
        desc: "Creating cross-platform mobile apps with Flutter, Android Studio, Java for responsive and high-performance user experiences.",
        icon: <FaMobileAlt className="text-4xl text-violet-500" />
    },
    {
        id: 3,
        title: "Database Management",
        desc: "Designing and managing databases using MySQL, MongoDB, Firebase to ensure data integrity and efficiency.",
        icon: <FaDatabase className="text-4xl text-violet-500" />
    },
    {
        id: 4,
        title: "UI/UX Design",
        desc: "Designing intuitive and visually appealing interfaces that prioritize user satisfaction and engagement.",
        icon: <FaPalette className="text-4xl text-violet-500" />
    }
];

const Services = () => {
    return (
        <div className="services mt-32" id="services">
            <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">My Services</h1>
            <p className="text-base/loose text-center opacity-50 mb-14 px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                What I offer to help your business grow
            </p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {services.map((service, index) => (
                    <div key={service.id} className="bg-zinc-800 p-6 rounded-2xl hover:bg-zinc-700/50 transition-all duration-300 border border-violet-500/20 hover:border-violet-500/50 group hover:-translate-y-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100} data-aos-once="true">
                        <div className="bg-zinc-900/50 w-fit p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-violet-500/10">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
