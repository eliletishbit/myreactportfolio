// pagecomponents/Services.jsx
import React from 'react';
import './Contact.css';

// pagecomponents/Contact.jsx
function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero container-fluid py-5">
        <div className="row align-items-center min-vh-80">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">Contact</h1>
            <p className="lead fs-3 mb-5">Devis gratuit sous 24h</p>
          </div>
        </div>
      </section>

      <section className="contact-form container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form>
              <div className="row g-4">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Nom" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="6" placeholder="Votre projet..."></textarea>
                </div>
                <div className="col-12">
                  <a href="https://wa.me/2290140747805?text=Bonjour%20je%20suis%20intéressé(e)%20par%20vos%20services%20!" 
                    className="btn btn-primary btn-lg w-100 py-3" 
                    target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp me-2"></i> WhatsApp Devis
                  </a>

                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Contact