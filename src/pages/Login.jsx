import React, { useState } from "react";
import { Mail, Lock, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authSlice";
import logo from "../assets/revolear-logo.png";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check
    if (email === "test@revolear.com" && password === "123456") {
      dispatch(login({ email }));
      setErrorMsg("");
      // alert("¡Inicio de sesión exitoso!");
      navigate("/"); // replace with your route
    } else {
      // setErrorMsg("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="Revolear Logo" className="w-24" />
          <h1 className="text-3xl font-semibold text-gray-900">Revolear</h1>
        </div>

        {/* Login Form Card */}
        <form
          onSubmit={handleLogin}
          className="bg-gradient-to-b from-[#c4bdf7] to-[#f5a3b8] p-6 rounded-2xl shadow-md"
        >
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="outline-none flex-1 bg-transparent text-sm"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-none flex-1 bg-transparent text-sm"
              />
              <Eye className="w-4 h-4 text-gray-400" />
            </div>

            {/* Forgot password */}
            <div className="text-right text-xs text-gray-700">
              Has olvidado tu contraseña?
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="text-sm text-red-600 font-medium">{errorMsg}</div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium text-sm"
            >
              Iniciar sesión
            </button>

            {/* Divider */}
            <div className="text-xs text-gray-700">O por cuentas sociales</div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full py-2 rounded-full bg-white text-sm font-medium border flex items-center justify-center gap-2 shadow-sm"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Iniciar sesión con Google
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-xs text-gray-700 mt-4">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-purple-700 font-medium">
              Inscribirse
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
