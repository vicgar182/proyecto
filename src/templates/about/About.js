import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import "../../modern-business.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownPortfolio"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Portfolio
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <a className="dropdown-item" href="portfolio-1-col.js">
                      1 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-2-col.js">
                      2 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-3-col.js">
                      3 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-4-col.js">
                      4 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-item.js">
                      Single Portfolio Item
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownBlog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <a className="dropdown-item" href="blog-home-1.js">
                      Blog Home 1
                    </a>
                    <a className="dropdown-item" href="blog-home-2.js">
                      Blog Home 2
                    </a>
                    <a className="dropdown-item" href="blog-post.js">
                      Blog Post
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownBlog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Other Pages
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <a className="dropdown-item" href="full-width.js">
                      Full Width Page
                    </a>
                    <a className="dropdown-item" href="sidebar.js">
                      Sidebar Page
                    </a>
                    <a className="dropdown-item" href="faq.js">
                      FAQ
                    </a>
                    <a className="dropdown-item" href="404.js">
                      404
                    </a>
                    <a className="dropdown-item" href="pricing.js">
                      Pricing Table
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <h1 className="mt-4 mb-3">
            About
            <small>Subheading</small>
          </h1>

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">About</li>
          </ol>

          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4"
                src="http://placehold.it/750x450"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h2>About Modern Business</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                voluptate nihil eum consectetur similique? Consectetur, quod,
                incidunt, harum nisi dolores delectus reprehenderit voluptatem
                perferendis dicta dolorem non blanditiis ex fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                magni, aperiam vitae illum voluptatum aut sequi impedit non
                velit ab ea pariatur sint quidem corporis eveniet. Odit,
                temporibus reprehenderit dolorum!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
                ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
                necessitatibus perspiciatis quis?
              </p>
            </div>
          </div>

          <h2>Our Team</h2>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img
                  className="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img
                  className="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img
                  className="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
          </div>

          <h2>Our Customers</h2>
          <div className="row">
            <div className="col-lg-2 col-sm-4 mb-4">
              <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
