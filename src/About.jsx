import  { useEffect, useRef, useState } from "react";
import "./style.css"; // Make sure you import your CSS

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="wrapper" id="about" ref={aboutRef}>
      <div className="container mt-5 mb-5">
        <div className={`row mt-5 mb-5 about-section ${isVisible ? "visible" : ""}`}>
          <div className="col-12">
            <h4>
              About <span style={{ color: "#d50000" }}>Me</span>
            </h4>
            <p style={{ textAlign: "justify" }}>
              I'm a Full Stack Developer with a solid foundation in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, SQL, MongoDB, Node.js, Express.js, React.js, and Figma. I’m passionate about building user-friendly, innovative web applications that solve real-world problems.

Always eager to learn, I’m continuously expanding my knowledge in web development and digital marketing. I thrive in environments that challenge me and allow me to grow both technically and creatively.

Currently, I’m seeking opportunities to join a forward-thinking team that values innovation, collaboration, and a shared enthusiasm for technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
