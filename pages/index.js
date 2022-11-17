import Head from 'next/head';
import Downloads from '../components/UI/Downloads';
import Features from '../components/UI/Features';
import HeroSlider from '../components/UI/HeroSlider';
import HowItWorks from '../components/UI/HowItWorks';
import Introduction from '../components/UI/Introduction';
import Layout from '../components/UI/Layout';
import Premium from '../components/UI/Premium';
import Pro from '../components/UI/Pro';
import Rebranding from '../components/UI/Rebranding';
import Screenshots from '../components/UI/Screenshots';
import Terms from '../components/UI/Terms';

import { useRouter } from 'next/router';

// i18next
import { useTranslations } from 'next-intl';
// import { useTranslation } from 'react-i18next';
import React, { Suspense, useRef } from 'react';

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

export default function Home() {
  // const t = useTranslations();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();

  const { locale } = useRouter();

  return (
    <div className="app">
      <Head>
        <title>IPTV Smarters App is a fabulous video streaming player</title>
        <meta
          name="description"
          content="IPTV Smarters App is a fabulous video streaming player that allows your IPTV customers or end-users to stream content like Live TV, VOD, Series, and TV Catchup."
        />
        <link rel="icon" href="/icon.jpg" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Suspense fallback={<Loader />}>
        <div className="app">
          <TawkMessengerReact ref={tawkMessengerRef} propertyId="636b5d9db0d6371309ce1723" widgetId="1ghdmbd3e" />
          <Layout lang={locale} setLang={setLang}>
            <div dir={locale === 'he' ? 'rtl' : 'ltr'}>
              <HeroSlider />

              <div className="wrapper">
                <Introduction lang={locale} />
              </div>
              <Features lang={locale} />
              <Downloads />
              <Rebranding />
              <Pro lang={locale} />
              <Premium lang={locale} />
              <HowItWorks />
              <Screenshots />
              <Terms lang={locale} />
            </div>
          </Layout>
        </div>
      </Suspense>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        // ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
    },
  };
}
