import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center bg-dark px-lg-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-n2">
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Monday, January 1, 2045
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Advertise
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body small" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 text-right d-none d-md-block">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-auto mr-n2">
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-twitter"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-facebook-f"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-linkedin-in"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-instagram"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-google-plus-g"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-youtube"></small>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row align-items-center bg-white py-3 px-lg-5">
          <div className="col-lg-4">
            <a href="index.html" className="navbar-brand p-0 d-none d-lg-block">
              <h1 className="m-0 display-4 text-uppercase text-primary">
                Biz
                <span className="text-secondary font-weight-normal">News</span>
              </h1>
            </a>
          </div>
          <div className="col-lg-8 text-center text-lg-right">
            <a href="https://htmlcodex.com">
              <img className="img-fluid" src="img/ads-728x90.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-uppercase text-primary">
              Biz<span className="text-white font-weight-normal">News</span>
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="category.html" className="nav-item nav-link">
                Category
              </a>
              <a href="single.html" className="nav-item nav-link">
                Single News
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="#" className="dropdown-item">
                    Menu item 1
                  </a>
                  <a href="#" className="dropdown-item">
                    Menu item 2
                  </a>
                  <a href="#" className="dropdown-item">
                    Menu item 3
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <div
              className="input-group ml-auto d-none d-lg-flex"
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <input
                type="text"
                className="form-control border-0"
                placeholder="Keyword"
              />
              <div className="input-group-append">
                <button className="input-group-text bg-primary text-dark border-0 px-3">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 px-0">
            <div className="owl-carousel main-carousel position-relative">
              <div
                className="position-relative overflow-hidden"
                style={{ height: "500px" }}
              >
                <img
                  className="img-fluid h-100"
                  src="img/news-800x500-1.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Business
                    </a>
                    <a className="text-white" href="">
                      Jan 01, 2045
                    </a>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href=""
                  >
                    Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                  </a>
                </div>
              </div>
              <div
                className="position-relative overflow-hidden"
                style={{ height: "500px" }}
              >
                <img
                  className="img-fluid h-100"
                  src="img/news-800x500-2.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Business
                    </a>
                    <a className="text-white" href="">
                      Jan 01, 2045
                    </a>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href=""
                  >
                    Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                  </a>
                </div>
              </div>
              <div
                className="position-relative overflow-hidden"
                style={{ height: "500px" }}
              >
                <img
                  className="img-fluid h-100"
                  src="img/news-800x500-3.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Business
                    </a>
                    <a className="text-white" href="">
                      Jan 01, 2045
                    </a>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href=""
                  >
                    Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 px-0">
            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-1.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-2.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-3.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-4.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark py-3 mb-3">
        <div className="container">
          <div className="row align-items-center bg-dark">
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <div
                  className="bg-primary text-dark text-center font-weight-medium py-2"
                  style={{ width: "170px" }}
                >
                  Breaking News
                </div>
                <div
                  className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                  style={{ paddingRight: "90px" }}
                >
                  <div className="text-truncate">
                    <a
                      className="text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit. Proin interdum lacus eget
                      ante tincidunt, sed faucibus nisl sodales
                    </a>
                  </div>
                  <div className="text-truncate">
                    <a
                      className="text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit. Proin interdum lacus eget
                      ante tincidunt, sed faucibus nisl sodales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 mb-3">
        <div className="container">
          <div className="section-title">
            <h4 className="m-0 text-uppercase font-weight-bold">
              Featured News
            </h4>
          </div>
          <div className="owl-carousel news-carousel carousel-item-4 position-relative">
            <div
              className="position-relative overflow-hidden"
              style={{ height: "300px" }}
            >
              <img
                className="img-fluid h-100"
                src="img/news-700x435-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href=""
                  >
                    Business
                  </a>
                  <a className="text-white" href="">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href=""
                >
                  Lorem ipsum dolor sit amet elit...
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: "300px" }}
            >
              <img
                className="img-fluid h-100"
                src="img/news-700x435-2.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href=""
                  >
                    Business
                  </a>
                  <a className="text-white" href="">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href=""
                >
                  Lorem ipsum dolor sit amet elit...
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: "300px" }}
            >
              <img
                className="img-fluid h-100"
                src="img/news-700x435-3.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href=""
                  >
                    Business
                  </a>
                  <a className="text-white" href="">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href=""
                >
                  Lorem ipsum dolor sit amet elit...
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: "300px" }}
            >
              <img
                className="img-fluid h-100"
                src="img/news-700x435-4.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href=""
                  >
                    Business
                  </a>
                  <a className="text-white" href="">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href=""
                >
                  Lorem ipsum dolor sit amet elit...
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: "300px" }}
            >
              <img
                className="img-fluid h-100"
                src="img/news-700x435-5.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href=""
                  >
                    Business
                  </a>
                  <a className="text-white" href="">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href=""
                >
                  Lorem ipsum dolor sit amet elit...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">
                      Latest News
                    </h4>
                    <a
                      className="text-secondary font-weight-medium text-decoration-none"
                      href=""
                    >
                      View All
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <img
                      className="img-fluid w-100"
                      src="img/news-700x435-1.jpg"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="bg-white border border-top-0 p-4">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                      <p className="m-0">
                        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                        rebum clita rebum dolor stet amet justo
                      </p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle mr-2"
                          src="img/user.jpg"
                          width="25"
                          height="25"
                          alt=""
                        />
                        <small>John Doe</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3">
                          <i className="far fa-eye mr-2"></i>12345
                        </small>
                        <small className="ml-3">
                          <i className="far fa-comment mr-2"></i>123
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <img
                      className="img-fluid w-100"
                      src="img/news-700x435-2.jpg"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="bg-white border border-top-0 p-4">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                      <p className="m-0">
                        Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                        rebum clita rebum dolor stet amet justo
                      </p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle mr-2"
                          src="img/user.jpg"
                          width="25"
                          height="25"
                          alt=""
                        />
                        <small>John Doe</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3">
                          <i className="far fa-eye mr-2"></i>12345
                        </small>
                        <small className="ml-3">
                          <i className="far fa-comment mr-2"></i>123
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-3">
                  <a href="">
                    <img
                      className="img-fluid w-100"
                      src="img/ads-728x90.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <img
                      className="img-fluid w-100"
                      src="img/news-700x435-3.jpg"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="bg-white border border-top-0 p-4">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle mr-2"
                          src="img/user.jpg"
                          width="25"
                          height="25"
                          alt=""
                        />
                        <small>John Doe</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3">
                          <i className="far fa-eye mr-2"></i>12345
                        </small>
                        <small className="ml-3">
                          <i className="far fa-comment mr-2"></i>123
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <img
                      className="img-fluid w-100"
                      src="img/news-700x435-4.jpg"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="bg-white border border-top-0 p-4">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle mr-2"
                          src="img/user.jpg"
                          width="25"
                          height="25"
                          alt=""
                        />
                        <small>John Doe</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <small className="ml-3">
                          <i className="far fa-eye mr-2"></i>12345
                        </small>
                        <small className="ml-3">
                          <i className="far fa-comment mr-2"></i>123
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-1.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-2.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-3.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-4.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-3">
                  <a href="">
                    <img
                      className="img-fluid w-100"
                      src="img/ads-728x90.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-lg-12">
                  <div className="row news-lg mx-0 mb-3">
                    <div className="col-md-6 h-100 px-0">
                      <img
                        className="img-fluid h-100"
                        src="img/news-700x435-5.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                      <div className="mt-auto p-4">
                        <div className="mb-2">
                          <a
                            className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href=""
                          >
                            Business
                          </a>
                          <a className="text-body" href="">
                            <small>Jan 01, 2045</small>
                          </a>
                        </div>
                        <a
                          className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                          href=""
                        >
                          Lorem ipsum dolor sit amet elit...
                        </a>
                        <p className="m-0">
                          Dolor lorem eos dolor duo et eirmod sea. Dolor sit
                          magna rebum clita rebum dolor stet amet justo
                        </p>
                      </div>
                      <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded-circle mr-2"
                            src="img/user.jpg"
                            width="25"
                            height="25"
                            alt=""
                          />
                          <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <small className="ml-3">
                            <i className="far fa-eye mr-2"></i>12345
                          </small>
                          <small className="ml-3">
                            <i className="far fa-comment mr-2"></i>123
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-1.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-2.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-3.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center bg-white mb-3"
                    style={{ height: "110px" }}
                  >
                    <img
                      className="img-fluid"
                      src="img/news-110x110-4.jpg"
                      alt=""
                    />
                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                      <div className="mb-2">
                        <a
                          className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                          href=""
                        >
                          Business
                        </a>
                        <a className="text-body" href="">
                          <small>Jan 01, 2045</small>
                        </a>
                      </div>
                      <a
                        className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                        href=""
                      >
                        Lorem ipsum dolor sit amet elit...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
        <div className="row py-4">
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Get In Touch
            </h5>
            <p className="font-weight-medium">
              <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York,
              USA
            </p>
            <p className="font-weight-medium">
              <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
            </p>
            <p className="font-weight-medium">
              <i className="fa fa-envelope mr-2"></i>info@example.com
            </p>
            <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">
              Follow Us
            </h6>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-lg btn-secondary btn-lg-square" href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Popular News
            </h5>
            <div className="mb-3">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href=""
                >
                  Business
                </a>
                <a className="text-body" href="">
                  <small>Jan 01, 2045</small>
                </a>
              </div>
              <a
                className="small text-body text-uppercase font-weight-medium"
                href=""
              >
                Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
              </a>
            </div>
            <div className="mb-3">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href=""
                >
                  Business
                </a>
                <a className="text-body" href="">
                  <small>Jan 01, 2045</small>
                </a>
              </div>
              <a
                className="small text-body text-uppercase font-weight-medium"
                href=""
              >
                Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
              </a>
            </div>
            <div className="">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href=""
                >
                  Business
                </a>
                <a className="text-body" href="">
                  <small>Jan 01, 2045</small>
                </a>
              </div>
              <a
                className="small text-body text-uppercase font-weight-medium"
                href=""
              >
                Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Categories
            </h5>
            <div className="m-n1">
              <a href="" className="btn btn-sm btn-secondary m-1">
                Politics
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Business
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Corporate
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Business
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Health
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Education
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Science
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Business
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Foods
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Entertainment
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Travel
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Lifestyle
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Politics
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Business
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Corporate
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Business
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Health
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Education
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Science
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Business
              </a>
              <a href="" className="btn btn-sm btn-secondary m-1">
                Foods
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Flickr Photos
            </h5>
            <div className="row">
              <div className="col-4 mb-3">
                <a href="">
                  <img className="w-100" src="img/news-110x110-1.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 mb-3">
                <a href="">
                  <img className="w-100" src="img/news-110x110-2.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 mb-3">
                <a href="">
                  <img className="w-100" src="img/news-110x110-3.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 mb-3">
                <a href="">
                  <img className="w-100" src="img/news-110x110-4.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 mb-3">
                <a href="">
                  <img className="w-100" src="img/news-110x110-5.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 mb-3">
                <a href="">
                  <img className="w-100" src="img/news-110x110-1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-4 px-sm-3 px-md-5"
        style={{ background: "#111111" }}
      >
        <p className="m-0 text-center">
          &copy; <a href="#">Your Site Name</a>. All Rights Reserved. Design by{" "}
          <a href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>

      <a href="#" className="btn btn-primary btn-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </Fragment>
  );
}
