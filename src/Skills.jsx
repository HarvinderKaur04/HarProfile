
import SelectActionCard from "./components/SelectActionCard";

function Skills() {
    return (<>
        <div className="wrapper2"id="skills">
            <div className="container mt-5 mb-5" >
                <div className="row mt-5 mb-5 text-center">
                    <h4>Technical  <span>Skills</span></h4>
                </div>
                <div className="row mt-5 mb-5 text-center">
                    <SelectActionCard />
                </div>
            </div>
        </div>

    </>);
}

export default Skills;