import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import "../../modern-business.css";
import { Link } from "react-router-dom";  

class Services extends React.Component {
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
                <li className="nav-item">
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
                    <a className="dropdown-item" href="portfolio-1-col.html">
                      1 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-2-col.html">
                      2 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-3-col.html">
                      3 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-4-col.html">
                      4 Column Portfolio
                    </a>
                    <a className="dropdown-item" href="portfolio-item.html">
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
                    <a className="dropdown-item" href="blog-home-1.html">
                      Blog Home 1
                    </a>
                    <a className="dropdown-item" href="blog-home-2.html">
                      Blog Home 2
                    </a>
                    <a className="dropdown-item" href="blog-post.html">
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
                    <a className="dropdown-item" href="full-width.html">
                      Full Width Page
                    </a>
                    <a className="dropdown-item" href="sidebar.html">
                      Sidebar Page
                    </a>
                    <a className="dropdown-item" href="faq.html">
                      FAQ
                    </a>
                    <a className="dropdown-item" href="404.html">
                      404
                    </a>
                    <a className="dropdown-item" href="pricing.html">
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
            Contact
            <small>Subheading</small>
          </h1>

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Contact</li>
          </ol>

          <div className="row">
            <div className="col-lg-8 mb-4">
              <iframe
                width="100%"
                height="400px"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"
              />
            </div>

            <div className="col-lg-4 mb-4">
              <h3>Contact Details</h3>
              <p>
                3481 Melrose Place
                <br />
                Beverly Hills, CA 90210
                <br />
              </p>
              <p>
                <abbr title="Phone">P</abbr>: (123) 456-7890
              </p>
              <p>
                <abbr title="Email">E</abbr>:
                <a href="mailto:name@example.com">name@example.com</a>
              </p>
              <p>
                <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00
                PM
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mb-4">
              <h3>Send us a Message</h3>
              <form name="sentMessage" id="contactForm" novalidate>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block" />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      required
                      data-validation-required-message="Please enter your phone number."
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Message:</label>
                    <textarea
                      rows="10"
                      cols="100"
                      className="form-control"
                      id="message"
                      required
                      data-validation-required-message="Please enter your message"
                    />
                  </div>
                </div>
                <div id="success" />
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
