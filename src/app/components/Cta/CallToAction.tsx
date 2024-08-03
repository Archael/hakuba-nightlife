import './cta.css';

const CallToAction = () => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container1">
              <div className="cta-content">
                <span className="thq-heading-2">
                  Discover the Best Nightlife in Ski Town
                </span>
                <p className="thq-body-large">
                  Explore our curated selection of bars, clubs, and events to
                  make the most of your nights in the mountains.
                </p>
              </div>
              <div className="cta-actions">
                <button type="button" className="thq-button-filled cta-button">
                  Find Your Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
