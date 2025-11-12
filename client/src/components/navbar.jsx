'use client';
import { useEffect } from 'react';
const Navbar = () => {
    useEffect(() => {
    // Import Bootstrap JS only on the client
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">गृहपृष्ठ</a>
                            </li>
                             <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    परिचय
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">संक्षिप्त परिचय</a></li>
                                    <li><a className="dropdown-item" href="#">वडा विवरण</a></li>
                                    <li><a className="dropdown-item" href='#'>कर्मचारी विवरण</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">पुर्व कर्मचारी विवरण</a></li>
                                    <li><a className="dropdown-item" href='#'>पुर्व जनप्रतिनिधि विवरण</a></li>
                                </ul>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">कार्यक्रम तथा परियोजना</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">बिद्धुतिय शुसासन सेवा</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">प्रतिवेदन</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">प्रकाशन</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">डाउनलोड</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
