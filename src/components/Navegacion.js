import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navegacion = () => {
    return (
        <>
                     
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/categoria/oro' className="nav-link">Joyas de Oro</Link>
            </li>
            <li className="nav-item">
              <Link to='/categoria/aceroq' className="nav-link">Joyas Acero Quirurgico</Link>
            </li>
            <li className="nav-item">
              <Link to='/categoria/plata' className="nav-link ">Joyas de Plata</Link>
            </li>
          </ul>
        </>
    );
}

export default Navegacion;
