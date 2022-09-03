import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fcon">
        <h3>Eatery</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div className="social">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="cp">
          © Copyright{" "}
          <strong>
            <span>Eatery</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
