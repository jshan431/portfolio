import React, {Fragment} from 'react';
import Header from '../layouts/Header';
import AboutFreelance from '../layouts/AboutFreelance';
import Features from '../layouts/Features';
import FeaturedProjects from '../layouts/FeaturedProjects';
import ContactMe from '../layouts/ContactMe';
import Footer from '../layouts/Footer';
const Homepage = () => {
  return(
    <Fragment>
      <Header />
      <AboutFreelance />
      <Features />
      <FeaturedProjects />
      <ContactMe />
      <Footer />
    </Fragment>
  );
}

export default Homepage;