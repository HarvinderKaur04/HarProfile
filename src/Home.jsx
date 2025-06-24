
import IconAvatars from "./components/IconAvatars";
import  { useEffect, useRef, useState } from "react";
import "./style.css"; 

function Home() {
    const homeRef=useRef(null);
    const [isVisible,setisVisible]=useState(false);
    useEffect(()=>{
        const obj=new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setisVisible(true);
                }
            },
            {threshold:0.1}
        )
        if(homeRef.current){
            obj.observe(homeRef.current);
        }
        return()=>{
            if(homeRef.current){
                obj.unobserve(homeRef.current);
            }
        }
    },[]);
    return (
        <>
            <div className="container mt-5 mb-5 "id="home" ref={homeRef}>
                <div className="row">
                <div className="col-8 mt-5 mb-5">
                    <div className="car">
                        <div className="carbody">
                            <h6 className={`home-h6 ${isVisible ? "visible" : ""}`}>Hello, I am</h6>
                            <h5 className={`home-h5 ${isVisible ? "visible" : ""}`}>Harvinder Kaur</h5>
                           <h5 className={`home-h5 ${isVisible ? "visible" : ""}`}> <span>I'm a Full Stack</span></h5>
                            <h5 className={`home-h5 ${isVisible ? "visible" : ""}`}><span>Developer</span></h5>
                            <p className={`home-p ${isVisible ? "visible" : ""}`}>Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality</p>
                           <IconAvatars/>
                            <a href="\pdf\HarvinderKaur.pdf" type="button" className="button">Download <i className="fa-solid fa-download"></i></a>                     
                        
                        </div>
                    </div>
                </div>

                <div className="col-4 mt-5 mb-5">
             
                  <img  src="/Images/har.jpg" alt="harvinder"className="home-img img-fluid rounded-circle  "/>
                  </div>
               
            </div>
            </div>

        </>
    );
}

export default Home;
