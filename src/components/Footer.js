// import React, { useRef} from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function MyComponent() {
//   const burgerRef = useRef();
//   const videosRef = useRef([]);
        
//   // const showNavbar = () => {
    
//     const burger = burgerRef.current;
//     const videos = videosRef.current;

//       if (burger.classList.contains("active")) {
//         gsap.to(".links", { x: "100%" });
//         gsap.to(".line", { stroke: "white" });
//         gsap.set("body", { overflow: "auto" });
//         gsap.set("body", { overflowX: "hidden" });
//       } else {
//         gsap.to(".links", { x: "0%" });
//         gsap.to(".line", { stroke: "black" });
//         gsap.fromTo(
//           ".links a",
//           { opacity: 0, y: 0 },
//           { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
//         );
//         gsap.set("body", { overflow: "hidden" });
//       }
//       burger.classList.toggle("active");

//     videos.forEach((video) => {
//       ScrollTrigger.create({
//         trigger: video,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => {
//           gsap.to(video, { opacity: 1 });
//           video.play();
//         },
//         onEnterBack: () => video.play(),
//         onLeave: () => video.pause(),
//         onLeaveBack: () => video.pause(),

//       });

//     });


   

//   return (
//     <div>
     
//       <div className="video-container">
//         <video ref={(el) => videosRef.current.push(el)} className="video" src="path/to/video1.mp4" />
//         <video ref={(el) => videosRef.current.push(el)} className="video" src="path/to/video2.mp4" />
//         <video ref={(el) => videosRef.current.push(el)} className="video" src="path/to/video3.mp4" />
//       </div>
//     </div>
//   );
// }

// export default MyComponent;
