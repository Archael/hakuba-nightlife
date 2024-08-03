// import { ReactNode } from 'react';

import './Hero.css';

interface HeroProps {
  //   children: ReactNode;
  image3Src: string;
  image1Src: string;
  action2: string;
  image11Alt: string;
  image4Src: string;
  image3Alt: string;
  image7Src: string;
  heading1: string;
  image9Src: string;
  image2Alt: string;
  image5Src: string;
  image1Alt: string;
  image4Alt: string;
  image7Alt: string;
  image9Alt: string;
  image2Src: string;
  image5Alt: string;
  image11Src: string;
  image6Alt: string;
  image10Src: string;
  image8Alt: string;
  action1: string;
  image8Src: string;
  image6Src: string;
  image12Alt: string;
  image10Alt: string;
  content1: string;
  image12Src: string;
}
const images = {
  image3Src:
    'https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1479762937580-3b682a10a0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzYwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Plan Your Night Out',
  image11Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1577892210326-4b00a7a9cb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Discover the Best Nightlife in Hakuba, Japan',
  image9Src:
    'https://images.unsplash.com/photo-1529589585661-8fb5cdc75c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Ski town nightlife image',
  image4Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzYwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  action1: 'Explore Bars',
  image8Src:
    'https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  content1:
    'Explore our curated selection of bars and nightlife venues in the heart of the mountains.',
  image12Src:
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTM5MzU5OHw&ixlib=rb-4.0.3&q=80&w=1080',
};

const Hero = () => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content">
          <h1 className="hero-text thq-heading-1">{images.heading1}</h1>
          <p className="hero-text1 thq-body-large">{images.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button">
            <span className="thq-body-small">{images.action1}</span>
          </button>
          <button className="thq-button-outline hero-button1">
            <span className="thq-body-small">{images.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content1">
        <div className="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={images.image1Alt}
              src={images.image1Src}
              className="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image2Alt}
              src={images.image2Src}
              className="hero-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image3Alt}
              src={images.image3Src}
              className="hero-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image4Alt}
              src={images.image4Src}
              className="hero-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image5Alt}
              src={images.image5Src}
              className="hero-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image6Alt}
              src={images.image6Src}
              className="hero-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={images.image1Alt}
              src={images.image1Src}
              className="hero-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image2Alt}
              src={images.image2Src}
              className="hero-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image3Alt}
              src={images.image3Src}
              className="hero-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image4Alt}
              src={images.image4Src}
              className="hero-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image5Alt}
              src={images.image5Src}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={images.image7Alt}
              src={images.image7Src}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image8Alt}
              src={images.image8Src}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image9Alt}
              src={images.image9Src}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image10Alt}
              src={images.image10Src}
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image11Alt}
              src={images.image11Src}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image12Alt}
              src={images.image12Src}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={images.image7Alt}
              src={images.image7Src}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image8Alt}
              src={images.image8Src}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image9Alt}
              src={images.image9Src}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image10Alt}
              src={images.image10Src}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={images.image11Alt}
              src={images.image11Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
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
