import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
    <title>Metaverse</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://stijndv.com" />
    <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
