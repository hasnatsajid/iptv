import Downloads from './components/UI/Downloads';
import Features from './components/UI/Features';
import HeroSlider from './components/UI/HeroSlider';
import HowItWorks from './components/UI/HowItWorks';
import Introduction from './components/UI/Introduction';
import Layout from './components/UI/Layout';
import Premium from './components/UI/Premium';
import Pro from './components/UI/Pro';
import Rebranding from './components/UI/Rebranding';
import Screenshots from './components/UI/Screenshots';
import Terms from './components/UI/Terms';

// i18next
import { useTranslation } from 'react-i18next';
import React, { Component, Suspense, useRef } from 'react';

// Tawk.to chat
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>loading...</h1>
  </div>
);

function App() {
  const { t, i18n } = useTranslation();
  const tawkMessengerRef = useRef();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="app">
        <TawkMessengerReact ref={tawkMessengerRef} propertyId="636b5d9db0d6371309ce1723" widgetId="1ghdmbd3e" />
        <Layout>
          {/* <button type="button" onClick={() => changeLanguage('de')}>
            de
          </button>
          <button type="button" onClick={() => changeLanguage('en')}>
            en
          </button>
          <button type="button" onClick={() => changeLanguage('he')}>
            he
          </button>
          <button type="button" onClick={() => changeLanguage('es')}>
            es
          </button> */}

          <HeroSlider />

          <div className="wrapper">
            <Introduction />
          </div>
          <Features />
          <Downloads />
          <Rebranding />
          <Pro />
          <Premium />
          <HowItWorks />
          <Screenshots />
          <Terms />
        </Layout>
      </div>
    </Suspense>
  );
}

export default App;
