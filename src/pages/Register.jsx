import React from "react";
import { Mail, Lock, Eye, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/revolear-logo.png";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="Revolear Logo" className="w-24" />
          <h1 className="text-3xl font-semibold text-gray-900">Revolear</h1>
        </div>

        {/* Register Card */}
        <div className="bg-gradient-to-b from-[#c4bdf7] to-[#f5a3b8] p-6 rounded-2xl shadow-md">
          <div className="space-y-4">
            {/* Username */}
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Nombre de usuario"
                className="outline-none flex-1 bg-transparent text-sm"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="outline-none flex-1 bg-transparent text-sm"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Contraseña"
                className="outline-none flex-1 bg-transparent text-sm"
              />
              <Eye className="w-4 h-4 text-gray-400" />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="confirmar Contraseña"
                className="outline-none flex-1 bg-transparent text-sm"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium text-sm">
              Inscribirse
            </button>
          </div>

          {/* Login Link */}
          <div className="text-xs text-gray-700 mt-4">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-purple-700 font-medium">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
