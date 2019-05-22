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

        <div class="container">
          <h1 class="mt-4 mb-3">
            About
            <small>Subheading</small>
          </h1>

          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active">About</li>
          </ol>

          <div class="row">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-4"
                src="http://placehold.it/750x450"
                alt=""
              />
            </div>
            <div class="col-lg-6">
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

          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card h-100 text-center">
                <img
                  class="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Team Member</h4>
                  <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card h-100 text-center">
                <img
                  class="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Team Member</h4>
                  <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card h-100 text-center">
                <img
                  class="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Team Member</h4>
                  <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
          </div>

          <h2>Our Customers</h2>
          <div class="row">
            <div class="col-lg-2 col-sm-4 mb-4">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div class="col-lg-2 col-sm-4 mb-4">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div class="col-lg-2 col-sm-4 mb-4">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div class="col-lg-2 col-sm-4 mb-4">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div class="col-lg-2 col-sm-4 mb-4">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
            <div class="col-lg-2 col-sm-4 mb-4">
              <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
