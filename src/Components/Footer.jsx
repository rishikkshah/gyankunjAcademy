import React from "react";
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-5 mt-5">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <h3 className="mb-3">About Gyankunj Academy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sint eos molestias. Aut consequatur sequi et magnam
            ipsam unde molestiae.
          </p>
        </div>
        <div className="col-sm-6 col-md-4">
          <h3 className="mb-3">Connect with us</h3>
          <p>
            Gauriganj-3, Jhapa
            <br />
            Nepal
          </p>
          <ul className="p-0">
            <li style={{ listStyleType: "none" }}>
              <i class="fab fa-facebook"></i> Facebook
            </li>
            <li style={{ listStyleType: "none" }}>
              <i class="fab fa-instagram"></i> Instagram
            </li>
            <li style={{ listStyleType: "none" }}>
              <i class="far fa-envelope"></i> Gmail
            </li>
            <li style={{ listStyleType: "none" }}>
              <i class="fas fa-phone-alt"></i> Phone
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-4">
          <h3 className="mb-3">Suscribe to our Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sint eos molestias. Aut consequatur sequi et magnam
            ipsam unde molestiae.
          </p>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-warning text-muted mt-1 w-100">
              Suscribe
            </button>
          </div>
        </div>
      </div>

      <p className="text-center">
        <small>copyright @ 2021, Gyankunj Academy</small>
        <br />
        <small>Made with love ❤ by The modified RARA</small>
      </p>
    </footer>
  );
};

export default Footer;
