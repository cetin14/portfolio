import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solution
        </p>
      </div>
      <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="src/assets/img04.png" alt="" />
            </div>
            <img src="src/assets/img11.jpg" alt="" />
        </div>
        <div>
            <div className="tech-icon">
                <img src="src/assets/img01.png" alt="" />
            </div>
            <div className="tech-icon">
                <img src="src/assets/img02.png" alt="" />
            </div>
            <div className="tech-icon">
                <img src="src/assets/img03.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
