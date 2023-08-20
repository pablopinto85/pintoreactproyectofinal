import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="container text-center">
        
      <p>© {new Date().getFullYear()} Pablo Pinto. Todos los derechos reservados.</p>
      <Link to="./contacto">Contacto</Link>
    </footer>
    
  );
}

export default Footer;

