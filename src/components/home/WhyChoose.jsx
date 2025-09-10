import React from 'react';

export default function WhyChoose() {
  const cards = [
    { id: 1, icon: '/images/why-choose/icon-1.svg', title: 'Expertly Experiences', text: '' },
    { id: 2, icon: '/images/why-choose/icon-2.svg', title: 'Seamless Travel Plan', text: '' },
    { id: 3, icon: '/images/why-choose/icon-3.svg', title: 'All-Inclusive Packages', text: '' },
    { id: 4, icon: '/images/why-choose/icon-4.svg', title: '', text: '' }
  ];

  return (
    <section className="why-choose-area section-gap section-bg">
      <div className="container">
        <div className="why-choose-inner">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="why-choose-content">
                <div className="theme-section-head">
                  <span> Why Choose Us </span>
                  <h3>We Make Travel Easy & Memorable</h3>
                </div>
                <div className="why-choose-card-wrapper">
                  {cards.map(card => (
                    <div key={card.id} className="why-choose-card">
                      <div className="why-choose-icon">
                        <img src={card.icon} alt={`icon-${card.id}`} />
                      </div>
                      <div className="why-choose-card-content">
                        {card.title && <h4 className="why-choose-title">{card.title}</h4>}
                        {card.text && <p className="why-choose-text">{card.text}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="why-choose-images">
                <div className="why-choose-img">
                  <img src="/images/why-choose/why-choose-img.png" alt="why-choose-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
