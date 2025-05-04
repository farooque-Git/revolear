import React from "react";
import silhouetteImage from "../../assets/blogsec/blogtes.png"; // use your image path

const subscriptionData = {
  title: "Mantente actualizado con nuestro blog",
  subtitle:
    "Suscríbete para recibir las últimas actualizaciones y contenido exclusivo directamente en tu bandeja de entrada.",
  placeholder: "Ingresa tu correo electrónico",
  buttonText: "Regístrate",
  disclaimer:
    "Al hacer clic en Regístrate, aceptas nuestros Términos y condiciones.",
  image: silhouetteImage,
};

const testimonialData = {
  stars: 5,
  quote:
    '"REVOLEAR® ha transformado la forma en que compro y vendo productos. ¡La interfaz intuitiva y las potentes características lo convierten en un cambio de juego!"',
};

export default function SubscriptionAndTestimonial() {
  return (
    <div className="w-full">
      {/* Subscription Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-300 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {subscriptionData.title}
            </h2>
            <p className="text-gray-700">{subscriptionData.subtitle}</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={subscriptionData.placeholder}
                className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto sm:flex-1"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-white text-black font-semibold border border-gray-800 rounded hover:bg-gray-100"
              >
                {subscriptionData.buttonText}
              </button>
            </form>
            <p className="text-xs text-gray-600">
              {subscriptionData.disclaimer}
            </p>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
            <img
              src={subscriptionData.image}
              alt="Silhouette"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-4 text-center">
        <div className="text-2xl text-black mb-4">
          {"★".repeat(testimonialData.stars)}
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-900 max-w-3xl mx-auto">
          {testimonialData.quote}
        </p>
      </section>
    </div>
  );
}
