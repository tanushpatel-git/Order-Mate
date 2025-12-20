import React, {useEffect, useRef} from 'react'
import WelcomeAnimation from '../Component/ComponentOfAboutPage/WelcomeAnimation.jsx'
import MagicBento from '../Component/ComponentOfAboutPage/MagicBento.jsx'
import ScrollReveal from '../Component/ComponentOfAboutPage/ScrollReveal.jsx'
import AboutPageScrollDirectionAnimation from '../Component/ComponentOfAboutPage/AboutPageScrollDirectionAnimation.jsx'
import ChromaGrid from '../Component/ComponentOfAboutPage/ChromaGrid.jsx'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

const About = () => {

    const textOfThankURef = useRef(null);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(textOfThankURef.current, {
            x:"-2500px",
            duration:4,
            ease:"easeInOut",
            scrollTrigger: {
                trigger: textOfThankURef.current,
                start: "top -25%",
                end: "top -150%",
                scrub: true,
                pin:true
            },
        })
    },[])
    const items = [
        {
            image: "data:image/jpeg;base64,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",
            title: "Real Time Order Management.",
            subtitle: "RTOM",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(145deg, #3B82F6, #000)",
        },
        {
            image: "https://cdn.prod.website-files.com/5fd7fbc7a22801581173149a/679d30ed98028bf9adf463fb_679d2ea56fe386b3455a545b_Drag-and-Drop.gif",
            title: "Drag and Drop Kitchen Workflow.",
            subtitle: "DDKW",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
        },
        {
            image: 'https://www.slideteam.net/media/catalog/product/cache/1280x720/s/t/status_icon_showing_pending_progress_and_complete_Slide01.jpg',
            title: 'Icons Clear order status tracking (New → In Process → Done).',
            subtitle: 'ICOST',
            borderColor: '#EF4444',
            gradient: 'linear-gradient(195deg,#EF4444,#000)',
        },
        {
            image: 'https://content.kota.co.uk/app/uploads/2024/08/UI.png',
            title: 'Fast and intuitive user interface',
            subtitle: 'FIUI',
            borderColor: '#8B5CF6',
            gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
        },
        {
            image: 'https://deonde.co/img/restto-restaurants-feature-temp.webp',
            title: 'Designed specifically for food ordering systems.',
            subtitle: 'DSFOS',
            borderColor: '#06B6D4',
            gradient: 'linear-gradient(135deg,#06B6D4,#000)',
        }
    ];

    return (
        <div className="relative top-0 left-0 w-full min-h-screen bg-black text-white overflow-hidden">
            <div className="relative top-[20vh] left-0 w-full min-h-screen">
                <div className="flex items-center justify-center">
                    <WelcomeAnimation
                        distance={200}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.5}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}>
                        <div className="text-center">
                            <h1 className="text-6xl underline">About Us</h1>
                            <h5 className="text-2xl p-10">OrderMate is a smart and efficient food ordering platform designed to simplify order management for restaurants and kitchens. From placing an order to preparing and completing it, OrderMate keeps everything organized, fast, and visual.</h5>
                            <MagicBento
                                textAutoHide={true}
                                enableStars={true}
                                enableSpotlight={true}
                                enableBorderGlow={true}
                                enableTilt={true}
                                enableMagnetism={true}
                                clickEffect={true}
                                spotlightRadius={300}
                                particleCount={12}
                                glowColor="132, 0, 255"
                            />
                        </div>
                    </WelcomeAnimation>
                </div>
                <div className="text-center mt-10 p-4">
                    <h1 className="text-center text-6xl underline">.!How Order Mate Works!.</h1>
                    <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={13}
                    blurStrength={20}>
                        All new orders appear instantly in the Order Board, giving staff a clear overview of incoming requests
                        Orders can be easily dragged from the Order Board into the Kitchen section, making it simple to start preparation.
                        Once an order is being prepared, it moves to the In Process stage so everyone knows its current status.
                        After preparation, orders can be marked as Done, ensuring smooth tracking from start to finish.
                    </ScrollReveal>
                </div>
                <AboutPageScrollDirectionAnimation
                texts={['This is a journey from order to deliver.', 'Scroll Down']}
                className="custom-scroll-text"/>
                <div className="flex flex-col gap-44">
                    <h1 className="text-6xl underline mt-[20vh] text-center">Key Features</h1>
                    <div style={{ height: '1000px', position: 'relative' ,width: '100%' }}>
                        <ChromaGrid
                            items={items}
                            radius={200}
                            damping={0.45}
                            fadeOut={0.6}
                            ease="power3.out"
                        />
                    </div>
                </div>
                <h1 ref={textOfThankURef} className="text-[100vh] whitespace-nowrap underline">.Order Now.</h1>
            </div>
        </div>
    )
}
export default About



