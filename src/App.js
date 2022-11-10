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
import { useState } from 'react';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>loading...</h1>
  </div>
);

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <Suspense fallback={<Loader />}>
      <div className="app" dir={lang === 'he' && 'rtl'}>
        <TawkMessengerReact ref={tawkMessengerRef} propertyId="636b5d9db0d6371309ce1723" widgetId="1ghdmbd3e" />
        <Layout lang={lang} setLang={setLang}>
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
            <Introduction lang={lang} />
          </div>
          <Features lang={lang} />
          <Downloads />
          <Rebranding />
          <Pro lang={lang} />
          <Premium lang={lang} />
          <HowItWorks />
          <Screenshots />
          <Terms lang={lang} />
        </Layout>
      </div>
    </Suspense>
  );
}

export default App;
