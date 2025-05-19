import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YOHA - Style & Beauty Studio",
  description:
    "Tu estudio de belleza exclusivo con servicios personalizados de peluquería, estética y productos únicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans">
        {/* Header */}
        <header className="bg-white shadow-md fixed w-full z-10">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold font-serif">
                  <span className="text-pink-600">Y</span>
                  <span className="text-gray-800">OHA</span>
                </span>
                <span className="ml-2 text-sm text-gray-600 border-l pl-2 border-gray-300">
                  Style & Beauty Studio
                </span>
              </Link>
              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  href="/services/turnos"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Reservar Turno
                </Link>
                <div className="relative group">
                  <span className="text-gray-400 cursor-not-allowed flex items-center">
                    Tazas Personalizadas
                    <span className="ml-2 text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                      Próximamente
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold font-serif mb-4">
                  <span className="text-pink-400">Y</span>
                  <span>OHA</span>
                </h3>
                <p className="text-gray-300">Style & Beauty Studio</p>
                <p className="text-gray-300 mt-2">Tu belleza, nuestra pasión</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3">Horarios</h4>
                <p className="text-gray-300">Lunes a Sábados: 10 am a 8 pm</p>
                <p className="text-gray-300">Domingos: 10 am a 5 pm</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3">Contacto</h4>
                <p className="text-gray-300">📞 (+53) 53342152</p>
                <p className="text-gray-300">📍 Vedado, La Habana</p>
                <p className="text-gray-300">✉️ info@yoha.studio</p>
              </div>
            </div>
            <div className="text-center mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-400">
                © {new Date().getFullYear()} YOHA Style & Beauty Studio. Todos
                los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
