import React from 'react';

const Header = () => {
  return(
    <header className="header">
      <div className="header__text-box">
          <h1 className="heading-primary">
              <span className="heading-primary--main">Jack Shan</span>
              <span className="heading-primary--sub">Web Developer</span>
          </h1>

          <a href="#section-tours" className="btn btn--white btn--animated">About Me</a>
      </div>     
    </header>
  );
}

export default Header;