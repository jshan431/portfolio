import React from 'react';
const Features = () => {
  return(
    <section className="section-features">          
      <div className="row">
          <div className="col-1-of-4">
              <div className="feature-box">
                  <i className="feature-box__icon icon-basic-webpage-img-txt"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                  <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
              </div>
          </div>

          <div className="col-1-of-4">
              <div className="feature-box">
                  <i className="feature-box__icon icon-basic-smartphone"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                  <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
              </div>
          </div>

          <div className="col-1-of-4">
              <div className="feature-box">
                  <i className="feature-box__icon icon-basic-bolt"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                  <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
              </div>
          </div>

          <div className="col-1-of-4">
              <div className="feature-box">
                  <i className="feature-box__icon icon-basic-server2"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                  <p className="feature-box__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
              </div>
          </div>
      </div>
    </section>    
  );
}

export default Features;