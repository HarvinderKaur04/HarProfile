import { useEffect, useRef, useState } from "react";
import "./style.css";

function Contact() {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    console.log("Submitting data:", data);

    try {
      const res = await fetch("https://profilebackend-3krh.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      setIsSuccess(true);
      setResponseMessage(result.message || "Submitted successfully!");
      e.target.reset();

      setTimeout(() => {
        setResponseMessage("");
      }, 3000);

    } catch (err) {
      setIsSuccess(false);
      setResponseMessage("Error sending message!");

      setTimeout(() => {
        setResponseMessage("");
      }, 3000);
    }
  };

  return (
    <div className="wrapper2" id="contact">
      <div className="container mt-5 mb-5" ref={contactRef}>
        <div className={`row mt-5 mb-5 text-center contact-section ${isVisible ? "visible" : ""}`}>
          <h4>
            Contact <span>me</span>
          </h4>
        </div>

        {/* Alert Box */}
        {responseMessage && (
          <div className={`custom-alert ${isSuccess ? "success" : "error"}`}>
            {responseMessage}
          </div>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`row mt-5 mb-5 g-3 contact-section ${isVisible ? "visible" : ""}`}
        >
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              rows={5}
              className="form-control"
              placeholder="Message"
              required
            />
          </div>
          <div className="col-12 text-center">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
