import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import "../../modern-business.css";
import { Link } from "react-router-dom";
import "../../vendor/bootstrap/css/bootstrap.css";
import "../../css/modern-business.css";
import Carousel from 'react-bootstrap/Carousel';

class Start extends React.Component {
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

        <header>

        <Carousel>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src="http://placehold.it/700x400"
              alt="First slide"
            /> */}
            <iframe width="800" height="400" src="https://www.youtube.com/embed/ItwQoIPvb-w">
            </iframe>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src="data:image/png;base64,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"
              alt="Second slide"
            /> */}
            <iframe width="800" height="400" src="https://www.youtube.com/embed/oyy7_9ZM97I">
            </iframe>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src="data:image/png;base64,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"
              alt="Third slide"
            /> */}
            <iframe width="800" height="400" src="https://www.youtube.com/embed/vy_EhPZrjVo">
            </iframe>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
{/* 
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <h3>First Slide</h3>
                  <p>This is a description for the first slide.</p>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Second Slide</h3>
                  <p>This is a description for the second slide.</p>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Third Slide</h3>
                  <p>This is a description for the third slide.</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div> */}
        </header>

        <div className="container">
          <h1 className="my-4">Welcome to Modern Business</h1>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis ipsam eos, nam perspiciatis natus commodi
                    similique totam consectetur praesentium molestiae atque
                    exercitationem ut consequuntur, sed eveniet, magni nostrum
                    sint fuga.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h2>Portfolio Heading</h2>

          <div className="row">
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project One</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur eum quasi sapiente nesciunt?
                    Voluptatibus sit, repellat sequi itaque deserunt, dolores
                    in, nesciunt, illum tempora ex quae? Nihil, dolorem!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Two</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Three</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos quisquam, error quod sed cumque, odio distinctio velit
                    nostrum temporibus necessitatibus et facere atque iure
                    perspiciatis mollitia recusandae vero vel quam!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Four</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Five</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Six</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque earum nostrum suscipit ducimus nihil provident,
                    perferendis rem illo, voluptate atque, sit eius in
                    voluptates, nemo repellat fugiat excepturi! Nemo, esse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h2>Modern Business Features</h2>
              <p>The Modern Business template by Start Bootstrap includes:</p>
              <ul>
                <li>
                  <strong>Bootstrap v4</strong>
                </li>
                <li>jQuery</li>
                <li>Font Awesome</li>
                <li>Working contact form with validation</li>
                <li>Unstyled page elements for easy customization</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis, omnis doloremque non cum id reprehenderit, quisquam
                totam aspernatur tempora minima unde aliquid ea culpa sunt.
                Reiciendis quia dolorum ducimus unde.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid rounded"
                src="http://placehold.it/700x450"
                alt=""
              />
            </div>
          </div>

          <hr />

          <div className="row mb-4">
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, expedita, saepe, vero rerum deleniti beatae veniam
                harum neque nemo praesentium cum alias asperiores commodi.
              </p>
            </div>
            <div className="col-md-4">
              <a className="btn btn-lg btn-secondary btn-block" href="#">
                Call to Action
              </a>
            </div>
          </div>
        </div>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2019
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Start;
