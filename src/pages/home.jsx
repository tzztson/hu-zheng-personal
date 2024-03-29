import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";

import SwiperTestimonial from "../component/swiper-testimonial";

const Home = () => {

    const { darkMode } = useContext(DarkContext);
    return (
        <div>
            <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex  shadow-lg`}>
                <div className="flex-[1_1_70%] px-12 max-sm:px-0 flex flex-col gap-4">
                    <img src={require('../assets/img/hu-logo.png')} className="rounded-full w-64 h-64 max-sm:w-56 max-sm:h-56" alt="hu-zheng-logo" />
                    <h1 className="font-black text-4xl leading-[48px]">Web Developer, Writer, <br />Open-Source Developer</h1>
                    <p className="font-light text-xl">I’m <span className="font-medium underline">Hu Zheng</span>, a web developer and open-source contributor based in Taipei, Taiwan🏝.  I’m lead developer of <a href="https://tzztson.com/" className="underline text-sky-600">tzztson federation</a>, where we develop technologies that grow and consolidate industries.</p>
                    <div className="flex gap-8 items-center py-2">
                        <a href="https://www.linkedin.com/in/hu-zheng-a2208925a/" target="_blank" rel="noreferrer"><img src={require('../assets/img/linkedin.png')} className="w-8 h-8" alt="" /></a>
                        <a href="https://github.com/tzztson" target="_blank" rel="noreferrer"><img src={require('../assets/img/github.png')} className="w-8 h-8" alt="" /></a>
                        <a href="https://tzztson.medium.com/" target="_blank" rel="noreferrer"><img src={require('../assets/img/medium.png')} className="w-8 h-8" alt="" /></a>
                        <a href="https://stackoverflow.com/users/19992928/tzztson" target="_blank" rel="noreferrer"><img src={require('../assets/img/stackoverflow.png')} className="w-8 h-8" alt="" /></a>
                    </div>
                </div>
                <div className="flex-[1_1_30%]  max-sm:hidden px-12 flex flex-col gap-4"></div>
            </div>
            <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex flex-col gap-4 py-16  shadow-lg`}>
                <p className="text-2xl font-black py-2">Client Testimonials</p>
                <SwiperTestimonial />
            </div>
        </div>
    )
}

export default Home;