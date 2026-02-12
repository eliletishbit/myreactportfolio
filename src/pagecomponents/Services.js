// pagecomponents/Services.jsx
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      {/* Hero Services */}
      <section className="services-hero container-fluid py-5">
        <div className="row align-items-center min-vh-80">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-3 fw-bold mb-4">Mes Services</h1>
            <p className="lead fs-2 mb-5">Solutions web sur mesure pour votre entreprise</p>
            <a href="#tarifs" className="btn btn-primary btn-lg px-5 py-3">Voir les Tarifs</a>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="pricing-section container py-5">
        <div className="row text-center mb-5">
          <h2 className="section-title">Tarifs</h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="price-card popular">
              <div className="price-header">
                <h3>Site WordPress</h3>
                <div className="price">150 000<span>FCFA</span></div>
              </div>
              <ul className="price-features">
                <li>✓ Thème premium custom</li>
                <li>✓ 5 pages principales</li>
                <li>✓ Responsive mobile</li>
                <li>✓ Formation 2h</li>
              </ul>
             <a href="https://wa.me/2290140747805?text=Bonjour%2C%20intéressé%20Site%20WordPress%20150kFCFA" 
              className="btn btn-primary w-100 mt-4" 
              target="_blank" rel="noopener noreferrer">
              Commander Site WordPress
            </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="price-card">
              <div className="price-header">
                <h3>App Laravel</h3>
                <div className="price">400 000<span>FCFA</span></div>
              </div>
              <ul className="price-features">
                <li>✓ Backend complet</li>
                <li>✓ Base de données</li>
                <li>✓ Admin panel</li>
                <li>✓ API REST</li>
              </ul>
              <a href="https://wa.me/2290140747805?text=Bonjour%2C%20intéressé%20App%20Laravel%20400kFCFA" 
                className="btn btn-primary w-100 mt-4" 
                target="_blank" rel="noopener noreferrer">
                Commander App Laravel
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="price-card">
              <div className="price-header">
                <h3>Site React</h3>
                <div className="price">300 000<span>FCFA</span></div>
              </div>
              <ul className="price-features">
                <li>✓ Frontend moderne</li>
                <li>✓ Animations fluides</li>
                <li>✓ SEO optimisé</li>
                <li>✓ 10+ pages</li>
              </ul>
              <a href="https://wa.me/2290140747805?text=Bonjour%2C%20intéressé%20Frontend%20React%20300kFCFA" 
                className="btn btn-primary w-100 mt-4" 
                target="_blank" rel="noopener noreferrer">
                Frontend React
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="process-section container-fluid py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Mon Processus</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="process-step">
                <div className="step-number">01</div>
                <h5>Découverte</h5>
              </div>
            </div>
             <div className="col-lg-2 col-md-4 col-6">
              <div className="process-step">
                <div className="step-number">02</div>
                <h5>Analyse</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="process-step">
                <div className="step-number">03</div>
                <h5>Design ui/ux</h5>
              </div>
            </div>
             <div className="col-lg-2 col-md-4 col-6">
              <div className="process-step">
                <div className="step-number">04</div>
                <h5>Développement / intégration</h5>
              </div>
            </div>
             <div className="col-lg-2 col-md-4 col-6">
              <div className="process-step">
                <div className="step-number">05</div>
                <h5>Test</h5>
              </div>
            </div>
             <div className="col-lg-2 col-md-4 col-6">
              <div className="process-step">
                <div className="step-number">06</div>
                <h5>Livraison / deploiement</h5>
              </div>
            </div>
            {/* Continue 03 Dév, 04 Test, 05 Livraison */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;