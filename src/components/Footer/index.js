import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="jumbotron-fluid">
          <p className="lead">you can seek into my reposatry or contact me below!</p>
          <hr className="my-4" />
                  <p className="lead">
            <a href="https://github.com/mohamed0group"><i className="fa fa-github fa-3x coverPageLink" /></a>
            <a href="https://facebook.com/mohamed0group"><i className="fa fa-facebook fa-3x coverPageLink" /></a>
            <a href="mailto:mohamed0group@gmail.com"><i className="fa fa-envelope fa-3x coverPageLink" /></a>
          </p>
        </div>
    </footer>
  )
}
export default Footer;
