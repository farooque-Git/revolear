import React from "react";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-white p-8 text-black">
      {/* Header Section */}
      <div className="text-center md:text-left mb-16">
        <h1 className="text-4xl font-bold mb-2">Contacta con nosotros</h1>
        <p className="text-lg">¡Nos encantaría saber de usted!</p>

        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:hello@revolear.com"
                className="text-sm text-gray-700 hover:underline"
              >
                hello@revolear.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>📞</span>
            <div>
              <p className="font-semibold">Phone</p>
              <a
                href="tel:+15551234567"
                className="text-sm text-gray-700 hover:underline"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>📍</span>
            <div>
              <p className="font-semibold">Office</p>
              <p className="text-sm text-gray-700">
                456 Example Ave, New York NY 10001 US
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row md:justify-start md:items-start gap-12">
        <div className="text-4xl font-bold mb-2">Ponte en contacto</div>
        <div className="text-lg mb-4">¡Nos encantaría saber de usted!</div>

        <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] p-6 rounded-lg max-w-md w-full">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea
                rows="5"
                className="w-full border rounded px-3 py-2 focus:outline-none"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="border" />
              <label className="text-sm">Acepto los términos</label>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-pink-100 to-gray-100 border rounded hover:shadow-md"
            >
              Entregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
