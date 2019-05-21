import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import "../../modern-business.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="index.js">
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
                <li class="nav-item active">
                  <a class="nav-link" href="about.js">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="services.js">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.js">
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
                    <a class="dropdown-item" href="portfolio-1-col.js">
                      1 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-2-col.js">
                      2 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-3-col.js">
                      3 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-4-col.js">
                      4 Column Portfolio
                    </a>
                    <a class="dropdown-item" href="portfolio-item.js">
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
                    <a class="dropdown-item" href="blog-home-1.js">
                      Blog Home 1
                    </a>
                    <a class="dropdown-item" href="blog-home-2.js">
                      Blog Home 2
                    </a>
                    <a class="dropdown-item" href="blog-post.js">
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
                    <a class="dropdown-item" href="full-width.js">
                      Full Width Page
                    </a>
                    <a class="dropdown-item" href="sidebar.js">
                      Sidebar Page
                    </a>
                    <a class="dropdown-item" href="faq.js">
                      FAQ
                    </a>
                    <a class="dropdown-item" href="404.js">
                      404
                    </a>
                    <a class="dropdown-item" href="pricing.js">
                      Pricing Table
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default About;
