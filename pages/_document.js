import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Here we add modal wrapper */}
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
