import React from "react";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import kycImage from "../../assets/kyc.png"; // Add your KYC image here

export default function ProfileAndPayment() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-8 lg:px-16 xl:px-24 py-12">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section 1 */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Administre su perfil y personalice su experiencia fácilmente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 border border-gray-200 rounded-lg overflow-hidden">
            {[
              {
                title:
                  "Actualice fácilmente su información y preferencias en cualquier momento",
                description:
                  "Mantenga su perfil actualizado y adaptado a sus necesidades.",
                link: "Actualizar >",
              },
              {
                title: "Cambia tu foto de perfil para reflejar tu identidad",
                description:
                  "Use una nueva foto para que su perfil se destaque.",
                link: "Subir >",
              },
              {
                title:
                  "Gestione sus preferencias para una experiencia de usuario personalizada",
                description:
                  "Elija sus temas y foto para que su perfil le describa.",
                link: "Ajustar >",
              },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <a href="#" className="text-sm text-blue-600 font-medium">
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center text-gray-900">
            Administre sus métodos de pago con facilidad y seguridad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title:
                  "Personaliza tu billetera interna para realizar transacciones sin problemas",
                description:
                  "Agregue y administre diferentes formas de pago según sus necesidades.",
                button: "Administrar >",
                image: profile1,
              },
              {
                title:
                  "Realice un seguimiento del saldo de su billetera interna sin esfuerzo",
                description:
                  "Monitoree y administre sus fondos para realizar pagos y compras.",
                button: "Vista >",
                image: profile2,
              },
              {
                title: "Proteja sus transacciones con cifrado avanzado",
                description:
                  "Mantenga sus datos financieros seguros con tecnología de cifrado de alto nivel.",
                button: "Seguro >",
                image: profile3,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 text-center space-y-4"
              >
                <img
                  src={item.image}
                  alt="illustration"
                  className="mx-auto w-full h-40 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <button className="text-sm font-medium text-blue-600">
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - Privacy Settings */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Mejore su seguridad con configuraciones de privacidad integrales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 border border-gray-200 rounded-lg overflow-hidden">
            {[
              {
                title: "Administre la seguridad de su cuenta con facilidad",
                description:
                  "Ajuste la configuración de seguridad de su cuenta para garantizar que su información esté protegida.",
                link: "Activar >",
              },
              {
                title:
                  "Controle sus preferencias de intercambio de datos para una mayor privacidad",
                description:
                  "Elija cómo se comparten sus datos para una experiencia personalizada.",
                link: "Ajustar >",
              },
              {
                title:
                  "Habilitar o deshabilitar la autenticación de dos pasos para mayor seguridad",
                description:
                  "Agregue una capa extra de seguridad a su cuenta mediante códigos de acceso.",
                link: "Activar >",
              },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <a href="#" className="text-sm text-blue-600 font-medium">
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Mejore su seguridad con configuraciones de privacidad integrales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 border border-gray-200 rounded-lg overflow-hidden">
            {[
              {
                title: "Administre la seguridad de su cuenta con facilidad",
                description:
                  "Ajuste la configuración de seguridad de su cuenta para garantizar que su información esté protegida.",
                link: "Actualizar >",
              },
              {
                title:
                  "Controle sus preferencias de intercambio de datos para una mayor privacidad",
                description:
                  "Elija cómo se comparten sus datos para una experiencia personalizada.",
                link: "Ahorrar >",
              },
              {
                title:
                  "Habilitar o deshabilitar la autenticación de dos pasos para mayor seguridad",
                description:
                  "Agregue una capa adicional de seguridad a su cuenta con la autenticación de dos pasos.",
                link: "Activar >",
              },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <a href="#" className="text-sm text-blue-600 font-medium">
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 - KYC Verification */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Asegure su identidad con la verificación KYC
            </h2>
            <p className="text-sm text-gray-600">
              La verificación KYC (Conozca a su Cliente) es esencial para su
              seguridad. Suba los documentos para confirmar su identidad y
              disfrute de una experiencia segura.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-800">Proceso fácil</h3>
                <p className="text-sm text-gray-600">
                  Cargue fácilmente los documentos necesarios con instrucciones
                  en línea paso a paso.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Datos seguros</h3>
                <p className="text-sm text-gray-600">
                  Su información es confidencial y está protegida mediante los
                  más altos estándares de seguridad.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md">
                Subir
              </button>
              <button className="text-sm font-medium text-blue-600">
                Más información
              </button>
            </div>
          </div>
          <div>
            <img
              src={kycImage}
              alt="KYC Verification"
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
