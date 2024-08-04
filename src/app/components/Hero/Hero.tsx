import './Hero.css';
import galleryImages from '../../data';

const GalleryImages = Object.entries(galleryImages);

const Hero = () => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content">
          <h1 className="hero-text thq-heading-1">
            Discover the Best Nightlife in Hakuba, Japan
          </h1>
          <p className="hero-text1 thq-body-large">
            Explore our curated selection of bars and nightlife venues in the
            heart of the mountains.
          </p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button">
            <span className="thq-body-small">Explore Bars</span>
          </button>
          <button className="thq-button-outline hero-button1">
            <span className="thq-body-small">Plan Your Night Out</span>
          </button>
        </div>
      </div>
      <div className="hero-content1">
        <div className="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            {GalleryImages.slice(0, 5).map(([key, image], index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
              />
            ))}
          </div>
        </div>
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            {GalleryImages.slice(6, 10).map(([key, image], index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container1"></div>
      </div>
    </div>
  );
};

export default Hero;
