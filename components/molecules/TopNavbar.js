import React from 'react'

const TopNavbar = () => {
    return (
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
    )
}

export default TopNavbar