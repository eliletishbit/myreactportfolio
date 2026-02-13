// pagecomponents/Services.jsx
import React from 'react';
import './Formations.css';


// pagecomponents/Formations.jsx
function Formations() {
  return (
    <div className="formations-page">
      <section className="formations-hero container-fluid py-5">
        <h1 className="display-4 text-center">Formations</h1>
        <p className="lead text-center mt-3">Devenez développeur web complet en 8 semaines</p>
      </section>

      <section className="formations-grid container py-5">
        <div className="row g-4">
          
          {/* ✅ FORMATION 1 : HTML/CSS/BOOTSTRAP */}
          <div className="col-lg-6">
            <div className="formation-card">
              <h3>Initiation HTML/CSS <br/><small>Bootstrap</small></h3>
              <div className="price">30 000 FCFA</div>
              <ul>
                <li>HTML5 sémantique</li>
                <li>CSS Flexbox/Grid</li>
                <li>Bootstrap 5 complet</li>
                <li>Responsive mobile-first</li>
                <li>Formulaires avancés</li>
                <li>Pratiques </li>
                <li>Et bien plus... </li>
              </ul>
              <a href="https://wa.me/2290140747805?text=Bonjour%2C%20inscription%20Initiation%20HTML%20CSS%20Bootstrap%2030kFCFA" 
                 className="btn btn-success w-100 mt-3" 
                 target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp me-2"></i> S'inscrire WhatsApp
              </a>
            </div>
          </div>

          {/* ✅ FORMATION 2 : LARAVEL COMPLET */}
          <div className="col-lg-6">
            <div className="formation-card popular">
              <div className="popular-badge">POPULAIRE</div>
              <h3>Laravel Complet <br/><small>Backend Pro</small></h3>
              <div className="price">80 000 FCFA</div>
              <ul>
                <li>Installation & Vite</li>
                <li>Routes, Controllers, Vues Blade</li>
                <li>Modèles Eloquent + Relations</li>
                <li>Authentification complète</li>
                <li>Dashboard Admin</li>
                <li>Middlewares & Policies</li>
                <li>API REST + Sanctum</li>
                <li>Validation & Upload fichiers</li>
                 <li>Pratique </li>
                <li>Deployment Railway/Heroku</li>
                <li>Et bien plus... </li>
              </ul>
              <a href="https://wa.me/2290140747805?text=Bonjour%2C%20inscription%20Laravel%20Complet%2080kFCFA" 
                 className="btn btn-success w-100 mt-3" 
                 target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp me-2"></i> S'inscrire WhatsApp
              </a>
            </div>
          </div>

          {/* ✅ FORMATION 3 : JAVASCRIPT MODERNE */}
          <div className="col-lg-6">
            <div className="formation-card">
              <h3>JavaScript Moderne</h3>
              <div className="price">45 000 FCFA</div>
              <ul>
                <li>✅ Variables ES6 (let/const)</li>
                <li>✅ Arrow Functions</li>
                <li>✅ Destructuring & Spread</li>
                <li>✅ Modules import/export</li>
                <li>✅ Async/await + Promises</li>
                <li>✅ DOM Manipulation</li>
                <li>✅  pratiques</li>
                <li>➕ <strong>Et bien plus...</strong></li>
              </ul>
              <a href="https://wa.me/2290140747805?text=Bonjour%2C%20inscription%20JavaScript%20Moderne%2045kFCFA" 
                className="btn btn-success w-100 mt-3" 
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp me-2"></i> S'inscrire WhatsApp
              </a>
            </div>
          </div>


          {/* ✅ FORMATION 4 : REACT (Bonus) */}
          <div className="col-lg-6">
            <div className="formation-card">
              <h3>React Moderne</h3>
              <div className="price">60 000 FCFA</div>
              <ul>
                <li>Vite + React 18</li>
                <li>Components & Props</li>
                <li>React Router v6</li>
                <li>useState/useEffect</li>
                <li>API Fetch/Axios</li>
                <li>React Bootstrap</li>
                 <li>Pratiques </li>
                <li>Et bien plus... </li>
              </ul>
              <a href="https://wa.me/2290140747805?text=Bonjour%2C%20inscription%20React%20Moderne%2060kFCFA" 
                 className="btn btn-success w-100 mt-3" 
                 target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp me-2"></i> S'inscrire WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Formations;