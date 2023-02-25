import about from "../../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="continer">
        <div className="row">
          <div className="col-md-6">
            <img src={about} alt="About" />
          </div>
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>My Name Ahmed Ragab IM Frontend Developer</p>
            <p>Skill "HTML - CSS - JS -React"</p>
            <p>Using "SASS - PUGJS - GulpJS - Github"</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
