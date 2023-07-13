import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Required from './components/helpers/Required';

export const metadata = {
  title: "Game-score",
  description: "This task designed by Abdullah AL-Mousa",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <Required />
      </head>
      <body>{children}</body>
    </html>
  );
}
