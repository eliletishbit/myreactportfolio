import React ,  {useState , useEffect} from 'react';
import "./Home.css";



function Home() {

  // STATES AU NIVEAU Home
  const [experience, setExperience] = useState(0);
  const [projets, setProjets] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  //  useEffect AU NIVEAU Home
  useEffect(() => {
    const handleCounter = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    handleCounter(setExperience, 4);
    handleCounter(setProjets, 5);
    handleCounter(setSatisfaction, 100);
  }, []);


  return (
    <div className="home-container">
      <section className="hero-section container-fluid py-5 position-relative">
        <div className="row align-items-center min-vh-80">
          {/* ✅ COLONNE GAUCHE : Titre + Texte + CTA */}
          <div className="col-lg-6 col-md-12 ps-lg-5 order-2 order-lg-1 col-gauche-hero ">
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-4 hero-title">
                Frontend React<br />
                <span className="text-accent">Developper</span>
              </h1>
              <p className="lead fs-4 mb-4 hero-subtitle">
               Ui Integrator| React | UI/UX | laravel
              </p>
              <p className="mb-5  description">
               Je crée des interfaces React modernes et intègre vos designs Figma en pixel-perfect.
Laravel backend en bonus pour projets complets. voici mon portfolio
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 hero-cta">
                <a
                  href="/portfolio"
                  className="btn btn-primary btn-lg px-5 py-3 hero-btn-primary btn1"
                >
                  Voir Mes Projets
                </a>
                <a
                  href="/contact"
                  className="btn btn-outline-light btn-lg px-5 py-3 hero-btn-secondary btn2"
                >
                  Me Contacter
                </a>
              </div>
            </div>
          </div>

          {/* ✅ COLONNE DROITE : Image */}
          <div className="col-lg-6 col-md-12 pe-lg-5 order-1 order-lg-2 text-center col-droite-hero">
            <div className="hero-image-wrapper position-relative">
              {/* Placeholder image - remplacez par votre photo */}
              <img
                src="./images/myphoto.png"
                alt="Développeur Full-Stack"
                className="img-fluid rounded-4 shadow-lg hero-image"
              />              
            </div>
          </div>
        </div>

              {/* Classes prêtes pour effets lumineux */}
              <div className="hero-glow-left "></div>
              <div className="hero-glow-right "></div>
      </section>

      {/* ✅ SECTION 1 : COMPÉTENCES */}
      <section className="skills-section container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Mes Compétences</h2>
            <p className="section-subtitle">Technologies que je maîtrise parfaitement</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="fab fa-php skill-icon"></i>
                <h4>PHP</h4>
                <p>Laravel,  OOP</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="fab fa-react skill-icon"></i>
                <h4>React</h4>
                <p>Frontend moderne</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="fab fa-wordpress skill-icon"></i>
                <h4>WordPress</h4>
                <p>Thèmes & Plugins</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="fas fa-database skill-icon"></i>
                <h4>Base de Données</h4>
                <p>MySQL, PostgreSQL</p>
              </div>
            </div>
              <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="fas fa-database skill-icon"></i>
                <h4>Ui/Ux</h4>
                <p>Intégration de maquettes ui/ux figma, xd etc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SECTION 2 : À PROPOS */}
       <section className="about-section container-fluid py-5 px-5" style={{background: 'var(--bg-card)'}}>
      <div className="row align-items-center">
        <div className="col-lg-6 order-2 order-lg-1">
          <h2 className="section-title">À Propos</h2>
          <p className="about-text">
            Rodrigue Elie K.T. APOTHEY, <strong>Frontend React Spécialiste</strong> (2+ ans).
            <br />
            <strong>5+ ans expérience</strong> développement web (HTML/CSS/JS/PHP/Laravel).
            <br />
            Intégration <strong>Figma pixel-perfect</strong> → interfaces ultra-modernes.
          </p>

          <div className="stats-row">
            <div className="stat-item">
              <h3>{experience}<span>+</span></h3>
              <p>Ans d'expérience</p>
            </div>
            <div className="stat-item">
              <h3>{projets}<span>+</span></h3>
              <p>Projets réalisés</p>
            </div>
            <div className="stat-item">
              <h3>{satisfaction}%</h3>
              <p>Satisfaction client</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <div className="about-image">
            <img src="./images/about.jpg" alt="À propos" className="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </section>

      {/* ✅ SECTION 3 : SERVICES */}
      <section className="services-section container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Mes Services</h2>
            <p className="section-subtitle">Solutions web sur mesure</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">🚀</div>
                <h4>Développement Web</h4>
                <p>Applications Laravel/React performantes</p>
                <a href="/services" className="btn btn-outline-primary mt-3">En savoir plus</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h4>UI/UX Design</h4>
                <p>Interfaces modernes et intuitives</p>
                <a href="/services" className="btn btn-outline-primary mt-3">En savoir plus</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">⚙️</div>
                <h4>Formation</h4>
                <p>Développement web, freelancing, ui/ux , graphisme etc</p>
                <a href="/services" className="btn btn-outline-primary mt-3">En savoir plus</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ✅ SECTION 5 : CTA FINAL */}
      <section className="cta-section container py-5 text-center">
        <h2 className="section-title mb-4">Prêt pour votre projet ?</h2>
        <p className="lead mb-5">Transformons vos idées en réalité web</p>
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
          <a href="/contact" className="btn btn-primary btn-lg px-5 py-3">
            Démarrer mon projet
          </a>
          <a href="/portfolio" className="btn btn-outline-primary btn-lg px-5 py-3">
            Voir Portfolio
          </a>
        </div>
      </section>

    </div>
  );
}

export default Home;
