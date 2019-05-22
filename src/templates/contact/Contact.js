import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import "../../modern-business.css";

class Services extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownPortfolio"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Portfolio
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <a class="dropdown-item" href="portfolio-1-col.html">
                      1 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-2-col.html">
                      2 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-3-col.html">
                      3 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-4-col.html">
                      4 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-item.html">
                      Single Portfolio Item
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownBlog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <a class="dropdown-item" href="blog-home-1.html">
                      Blog Home 1
                    </a>
                    <a class="dropdown-item" href="blog-home-2.html">
                      Blog Home 2
                    </a>
                    <a class="dropdown-item" href="blog-post.html">
                      Blog Post
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownBlog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Other Pages
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <a class="dropdown-item" href="full-width.html">
                      Full Width Page
                    </a>
                    <a class="dropdown-item" href="sidebar.html">
                      Sidebar Page
                    </a>
                    <a class="dropdown-item" href="faq.html">
                      FAQ
                    </a>
                    <a class="dropdown-item" href="404.html">
                      404
                    </a>
                    <a class="dropdown-item" href="pricing.html">
                      Pricing Table
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container">
          <h1 class="mt-4 mb-3">
            Contact
            <small>Subheading</small>
          </h1>

          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active">Contact</li>
          </ol>

          <div class="row">
            <div class="col-lg-8 mb-4">
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

            <div class="col-lg-4 mb-4">
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

          <div class="row">
            <div class="col-lg-8 mb-4">
              <h3>Send us a Message</h3>
              <form name="sentMessage" id="contactForm" novalidate>
                <div class="control-group form-group">
                  <div class="controls">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p class="help-block" />
                  </div>
                </div>
                <div class="control-group form-group">
                  <div class="controls">
                    <label>Phone Number:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      required
                      data-validation-required-message="Please enter your phone number."
                    />
                  </div>
                </div>
                <div class="control-group form-group">
                  <div class="controls">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                  </div>
                </div>
                <div class="control-group form-group">
                  <div class="controls">
                    <label>Message:</label>
                    <textarea
                      rows="10"
                      cols="100"
                      class="form-control"
                      id="message"
                      required
                      data-validation-required-message="Please enter your message"
                    />
                  </div>
                </div>
                <div id="success" />
                <button
                  type="submit"
                  class="btn btn-primary"
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
