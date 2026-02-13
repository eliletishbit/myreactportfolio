// pagecomponents/Services.jsx
import React from 'react';
import './Portfolio.css';


// pagecomponents/Portfolio.jsx
function Portfolio() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero container-fluid py-5">
        <h1 className="display-3 text-center">Portfolio</h1>
        {/* <p>Je crée des interfaces React modernes et intègre vos designs(Figma/xd) <br/> → HTML/CSS/JS/WordPress/React pixel-perfect</p> */}
      </section>

      <section className="portfolio-grid container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img src="./images/portfolioimg1.png" alt="Projet 1" />
              <div className="portfolio-overlay">
                <h4>Eclat d'or : Wordpress ui</h4>
                <a href="https://eclatsdor.free.nf/?i=1" className="btn btn-primary">Voir Projet</a>
              </div>
            </div>
          </div>
          {/* Répéter pour 5-6 projets */}

           <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img src="./images/portfolioimg3.png" alt="Projet 3" />
              <div className="portfolio-overlay">
                <h4>Payconnect: Reactjs </h4>
                <a href="https://payconnect-tau.vercel.app/" className="btn btn-primary">Voir Projet</a>
              </div>
            </div>
          </div>

           <div className="col-lg-4 col-md-6">
            <div className="portfolio-item">
              <img src="./images/portfolioimg2.png" alt="Projet 2" />
              <div className="portfolio-overlay">
                <h4>Gkacom : wordpress ui</h4>
                <a href="https://gkacom.rf.gd/" className="btn btn-primary">Voir Projet</a>
              </div>
            </div>
          </div>

          

        </div>
      </section>
    </div>
  );
}


export default Portfolio