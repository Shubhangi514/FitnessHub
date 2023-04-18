import React, {  useRef,useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import heroImg from './asset/assets/hero.png';
import logoImg from './asset/assets/logo.svg';
import pilatesVideo from './asset/assets/pilates.mp4';
import yogaVideo from './asset/assets/yoga.mp4';
import meditationVideo from './asset/assets/meditation.mp4';
import ourStoryImg from './asset/assets/our-story.png';
// import burger from './asset/assets/bruger.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HashLoader from 'react-spinners/HashLoader';
// import gymPage from './asset/assets/new gym page';


gsap.registerPlugin(ScrollTrigger);

export default function Header(){
    
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])

    const burgerRef = useRef()
    const videosRef = useRef([]);
    

        const videos = videosRef.current;
        videos.forEach((video) => {
            ScrollTrigger.create({
              trigger: video,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                gsap.to(video, { opacity: 1 });
                video.play();
              },
              onEnterBack: () => video.play(),
              onLeave: () => video.pause(),
              onLeaveBack: () => video.pause(),
      
            });
      
          });
      
    const handleButtonClick = () => {
        window.location.href = "https://www.google.com";
    };
    
    
    const showNavbar = () => {
    const burger = burgerRef.current
        // const burger = burgerRef.current;
        // const videos = videosRef.current;
    
          if (burger.classList.contains("active")) {
            gsap.to(".links", { x: "100%" });
            gsap.to(".line", { stroke: "white" });
            gsap.set("body", { overflow: "auto" });
            gsap.set("body", { overflowX: "hidden" });
          } else {
            gsap.to(".links", { x: "0%" });
            gsap.to(".line", { stroke: "black" });
            gsap.fromTo(
              ".links a",
              { opacity: 0, y: 0 },
              { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
            );
            gsap.set("body", { overflow: "hidden" });
          }
          burger.classList.toggle("active");
    
        
    
    
      } 
    
      return(
          <div>
            {
                loading?
                <div className="loader">
                    <HashLoader className=''
                color={'#000000'}
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"/>
                {/* <img src={workoutIcon} alt="workout" /><br /> */}
                <p>IT'S ABOUT YOUR DEDICATION </p>
                </div> :(
                
                    <>   
          
        <section className="front-page">
        
                <img className= "hero" src={heroImg} alt="meditation" />
            <nav>
                <div className="logo"> 
                    <img src={logoImg} alt="mind &body"/>
                    <h1>Mind & Body</h1>
                </div>
                <div className="links">
                    <a href="https://www.bodybuilding.com/content/15-transformations-that-prove-you-can-change-your-life.html" onClick={handleButtonClick}>Our Story</a>
                    <a href="https://www.health.harvard.edu/exercise-and-fitness/the-4-most-important-types-of-exercise" onClick={handleButtonClick}>Practice</a>
                    <a href="/">Class Names</a>

                </div>
                <svg ref={burgerRef} onClick={showNavbar} width="44" height="18" viewBox="0 0 44 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="44" y2="1" stroke="white" strokeWidth="2"/>
                    <line y1="9" x2="27" y2="9" stroke="white" strokeWidth="2"/>
                    <line y1="17" x2="11" y2="17" stroke="white" strokeWidth="2"/>
                    </svg> 
            </nav>
            <div className="selling-point">
                <h2>Let your mind breathe</h2>
                <h3>Get unlimited access to yoga , pilatis , meditation classNamees that fits the way you feel</h3>
                <div className="ctas">
                    <button className="cta-sec">Explore Class</button>
                    <button className="cta-main"> <a href="https://koalendar.com/e/meet-with-shubhangi-dewangan">Sign up today</a> </button>

                </div>
            </div>
        </section>
        <section className="classNamees">
            <div className="classNamees-description">
                <h2>Classes Tailored For You</h2>
                <h3>It's time to heal your mind and body</h3>
            </div>
            <div className="videos">
                <div className="pilates">
                    <h3>Pilatis</h3>
                    <video muted ref={videosRef.current[0]} loop className="video" src={pilatesVideo}></video>
                </div>
                <div className="yoga">
                    <h3>Yoga</h3>
                    <video muted ref={videosRef.current[1]} loop className="video" src={yogaVideo}></video>
                </div>
                <div className="meditation">
                    <h3>Meditation</h3>
                    <video muted ref={videosRef.current[2]} loop className="video" src={meditationVideo}></video>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="our-story">
                <h2>Our Story</h2>
                <p>
                    We have 1000+ satisfied customers but you have to remember that the key is Your Dedication & Hard Work... so join us for a new level of living approach stay fit and healthy with us 🏋🏻Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo unde fugit est eius sint, reprehenderit voluptatibus, id corrupti assumenda amet ut recusandae debitis dolorem earum? Repudiandae cum hic saepe nemo aperiam, laboriosam quasi! Placeat vitae tempore recusandae voluptates mollitia unde quae, facilis, harum, ullam aperiam dolore ut! Aliquam quis, nulla excepturi enim, neque dolore rem voluptatem eius laboriosam optio aperiam, maiores quod! Praesentium, qui corrupti. Laboriosam quo pariatur voluptate aperiam illum eius eligendi, quisquam necessitatibus expedita excepturi labore molestiae beatae corporis delectus quis a suscipit doloremque dolores odio fuga enim. Deleniti vero corrupti id alias amet laborum qui aut.
                </p>
            </div>
            <img src={ourStoryImg} alt="our-story"/>
            
        </section>
        
        
            
        
        </>
               )}  </div>
        );
        }