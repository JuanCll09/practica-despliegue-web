import './globals.css';

export const metadata = {
  title: 'Bitácora Cloud | Mi primer despliegue',
  description: 'Una página web para practicar el despliegue de una aplicación Next.js en una máquina virtual con Nginx.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
