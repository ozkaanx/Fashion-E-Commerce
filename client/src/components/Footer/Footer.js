import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";
import {
  TiSocialTwitterCircular,
  TiSocialPinterestCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footer mt-5" >
      <hr />
      <div className="container" style={{ maxWidth: 1200 }}>
        <div className="row ">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="footer-about">
              <p>ReactApp Logo</p>
              <span>
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat.{" "}
              </span>
              <div className="footer-social">
                <a href="">
                  <RiFacebookCircleLine />
                </a>
                <a href="">
                  <TiSocialTwitterCircular />
                </a>
                <a href="">
                  <RiInstagramLine />
                </a>
                <a href="">
                  <TiSocialPinterestCircular />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="footer-widget">
              <p>Title</p>
              <ul>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="footer-widget ">
              <p>Title</p>
              <ul>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="footer-widget">
              <p>Title</p>
              <ul>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
                <li>
                  <Link>Link Adress</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
