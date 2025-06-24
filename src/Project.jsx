function Project() {
    return (
        <>
            <div className="wrapper" id="project">
                <div className="container mb-5">
                    <h4>My <span>Projects</span> </h4>
                    <div className="row mt-5 mb-5">
                        <div className="col-4 project-card" >
                              <img src="/Images/vx.jpg" alt="" className="project-image" />
                            <div className="project-content">
                                <h4>DreamWay</h4>
                                <p>
                                    DreamWay website is created using MERN which is the
                                    replica of the popular streaming platform - Airbnb, complete with
                                    similar features and user interface.
                                </p>
                                <a href="https://dreamhome-tgsp.onrender.com" target="_blank"><i className="fa-solid fa-square-arrow-up-right"></i></a>
                            </div>
                        </div>
                        <div className="col-4 project-card">
                            <img src="/Images/Vyapara.jpg" alt="" className="project-image" />
                            <div className="project-content">
                                <h4>VyaparaX</h4>
                                <p>
                                    VyaparaX website is created using ReactJS which is the
                                    replica of the popular streaming platform - Zerodha, complete with
                                    similar features and user interface.
                                </p>
                                <a href="https://vyaparax.netlify.app/" target="_blank"><i className="fa-solid fa-square-arrow-up-right"></i></a>
                            </div>
                        </div>
                        <div className="col-4 project-card">
                            <img src="/Images/kitev.jpg" alt="" className="project-image" />
                            <div className="project-content">
                                <h4>Kite Dashboard</h4>
                                <p>
                                    Kite-Dashboard is link of VyaparaX products, It is 
                                    replica of the popular streaming platform - ZerodhaKite, complete with
                                    similar features and user interface.
                                </p>
                                <a href="https://vyaparaxkite.netlify.app/login" target="_blank"><i className="fa-solid fa-square-arrow-up-right"></i></a>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
        </>);
}

export default Project;