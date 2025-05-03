import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Revolear Logo" className="w-6 h-6" />
              <span className="font-bold text-lg">Revolear®</span>
            </div>
            <p className="mb-4">
              Suscríbase a nuestro boletín para conocer las últimas funciones y
              actualizaciones.
            </p>
            <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="px-4 py-2 border border-gray-300 rounded w-full sm:w-auto"
              />
              <button
                type="submit"
                className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-800 hover:text-white"
              >
                Únete a
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Al suscribirse, acepta nuestra Política de privacidad y sus
              actualizaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1 w-full">
            <div>
              <h4 className="font-semibold mb-2">Enlaces útiles</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="hover:underline">
                    Página de inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    Quiénes somos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contacte con nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:underline">
                    Centro de asistencia
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Entradas de blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Conéctese con nosotros</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/facebook" className="hover:underline">
                    Página de Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/instagram" className="hover:underline">
                    Instagram Feed
                  </Link>
                </li>
                <li>
                  <Link to="/twitter" className="hover:underline">
                    Perfiles de Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/linkedin" className="hover:underline">
                    Página LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/youtube" className="hover:underline">
                    Canal YouTube
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Mantente al día</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/facebook"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <i className="fab fa-facebook"></i> Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="/instagram"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="/x"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <i className="fab fa-x-twitter"></i> X
                  </Link>
                </li>
                <li>
                  <Link
                    to="/linkedin"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="/youtube"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <i className="fab fa-youtube"></i> YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 text-xs flex flex-col sm:flex-row justify-between items-center">
          <p>2025 REVOLEAR®. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/privacy" className="hover:underline">
              Política de privacidad
            </Link>
            <Link to="/terms" className="hover:underline">
              Condiciones de uso
            </Link>
            <Link to="/cookies" className="hover:underline">
              Configuración de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
