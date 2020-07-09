import React from 'react';
import Logo from '../img/logo-green-2x.png';
const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={Logo} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" class="footer__link"><i class="fa fa-facebook fa-3x"></i></a></li>
                    <li className="footer__item"><a href="#" class="footer__link"><i class="fa fa-linkedin fa-3x"></i></a></li>
                    <li className="footer__item"><a href="#" class="footer__link"><i class="fa fa-instagram fa-3x"></i></a></li>
                    <li className="footer__item"><a href="#" class="footer__link"><i class="fa fa-github fa-3x"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="col-1-of-2">
            <p className="footer__copyright">
                Built by <a href="#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" class="footer__link">Advanced CSS and Sass</a>.
                Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                Schmedtmann, is of course highly appreciated!
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;