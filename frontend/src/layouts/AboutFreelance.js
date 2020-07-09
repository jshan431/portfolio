import React from 'react';
import photoOne from '../img/nat-1-large.jpg';
import photoTwo from '../img/nat-2-large.jpg';
import photoThree from '../img/nat-3-large.jpg';
import photoFour from '../img/nat-1-large.jpg';
import photoFive from '../img/nat-2-large.jpg';
import photoSixe from '../img/nat-3-large.jpg';
const AboutFreelance = () => {
  return(
    <section className="section-about-freelance">
      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
              Explore my Freelancing Work
          </h2>
      </div>
      <div className="row">
        <div className="composition">
          <img src={photoOne} alt="Photo 1" className="composition__photo composition__photo--p1" />
          <img src={photoTwo} alt="Photo 2" className="composition__photo composition__photo--p2" />
          <img src={photoThree} alt="Photo 3" className="composition__photo composition__photo--p3" />
          <img src={photoFour} alt="Photo 4" className="composition__photo composition__photo--p4" />
          <img src={photoFive} alt="Photo 5" className="composition__photo composition__photo--p5" />
          <img src={photoSixe} alt="Photo 6" className="composition__photo composition__photo--p6" />
        </div>
      </div>
    </section>
  );
}

export default AboutFreelance;